import React, { Component } from 'react';
import Layout from '../../components/Layout';
import { Form, Button ,Input ,Message} from 'semantic-ui-react';
import voting from '../../ethereum/voitng';
import web3 from '../../ethereum/web3';
import { Router} from '../../routes';


class VotingNew extends Component {
    state = {
        nameofthecandidate:'',
        party:'',
        errorMessage:''
    };

    onSubmit = async (event) => {
        event.preventDefault();
        this .setState({ loading: true, errorMessage: '' });
        
        try{
        const accounts = await web3.eth.getAccounts();
        await voting.methods
        .addCandidate(this.state.nameofthecandidate,this.state.party)
        .send({
            from: accounts[0]

        });
        Router.pushRoute('/');
    } catch (err){
        this.setState({ errorMessage: err.message });
    }
    this .setState({ loading: false });


    };
    render() {
        return (
        <Layout>
            <h3>Add a Candidate</h3>

            <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
             <Form.Field>
                <label>Name of the Candidate</label>
                <Input
                value={this.state.nameofthecandidate}
                onChange={event => this.setState({ nameofthecandidate: event.target.value}) }
                 />
            </Form.Field>

            <Form.Field>
                <label>Party</label>
                <Input 
                value={this.state.party}
                onChange={event => this.setState({ party: event.target.value}) }
                />
            </Form.Field>
            <Message error header="Oops!" content={this.state.errorMessage} />

             <Button loading={this.state.loading} primary>Add</Button>
            </Form>
        </Layout>
        );
    }
}

export default VotingNew;