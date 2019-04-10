import React, { Component } from 'react';
import Layout from '../../components/Layout';
import { Form, Button ,Input ,Message} from 'semantic-ui-react';
import voting from '../../ethereum/voitng';
import web3 from '../../ethereum/web3';
import { Router} from '../../routes';


class Votingcandidate extends Component {
    state = {
        candidateid:'',
        errorMessage:''
    };

    onSubmit = async (event) => {
        event.preventDefault();
        this .setState({ loading: true, errorMessage: '' });
        
        try{
        const accounts = await web3.eth.getAccounts();
        await voting.methods
        .getCandidate(this.state.candidateid)
        .send({
            from: accounts[0]

        });
        const add = await voting.methods.candidates(this.state.candidateid).call();
        console.log(add);
       // Router.pushRoute('/');
    } catch (err){
        this.setState({ errorMessage: err.message });
    }
    this .setState({ loading: false });


    };
    render() {
        return (
        <Layout>
            <h3>Get Candidate</h3>

            <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
             <Form.Field>
                <label>Candidate ID</label>
                <Input
                value={this.state.candidateid}
                onChange={event => this.setState({ candidateid: event.target.value}) }
                 />
            </Form.Field>

           
            <Message error header="Oops!" content={this.state.errorMessage} />

             <Button loading={this.state.loading} primary>Get</Button>
            </Form>
        </Layout>
        );
    }
}

export default Votingcandidate;