import React, { Component } from 'react';
import Layout from '../../components/Layout';
import { Form, Button ,Input ,Message} from 'semantic-ui-react';
import voting from '../../ethereum/voitng';
import web3 from '../../ethereum/web3';
import { Router} from '../../routes';


class VotingNo extends Component {
    state = {
       
        errorMessage:''
    };

    onSubmit = async (event) => {
        event.preventDefault();
        this .setState({ loading: true, errorMessage: '' });
        
        try{
        const accounts = await web3.eth.getAccounts();
        await voting.methods
        .getNumOfVoters()
        .send({
            from: accounts[0]

        });
        const add = await voting.methods.getNumOfVoters().call();
        console.log(add);
        //Router.pushRoute('/');
    } catch (err){
        this.setState({ errorMessage: err.message });
    }
    this .setState({ loading: false });


    };
    render() {
        return (
        <Layout>
            <h3>Total Number Of Voters</h3>

            <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
             

           
            <Message error header="Oops!" content={this.state.errorMessage} />

             
            </Form>
        </Layout>
        );
    }
}

export default VotingNo;