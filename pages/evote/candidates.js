import React, { Component } from 'react';
import { Button ,Table } from 'semantic-ui-react';
import { Link } from '../../routes';
import Layout from '../../components/Layout';
import Voting from '../../ethereum/voitng';
import RequestRow from '../../components/RequestRow';
class CandidateIndex extends Component {
    static async getInitialProps(props){
        const candidateCount = await Voting.methods.getNumOfCandidates().call();
        const totalvoters = await Voting.methods.getNumOfVoters().call();
        
               
        const requests = await Promise.all(
            Array(parseInt(candidateCount)).fill().map(( _element ,index) => {
                
                return Voting.methods.candidates(index).call();
                               

            })
            
        );
        
        
        
        return{requests,totalvoters};


    }
    renderRows(){
        return this.props.requests.map((request, index) => {
            return (
                <RequestRow 
                    key={index}
                    id={index}
                    request={request}
                   // address={this.props.address}
            />
            );
        });
    }

    render() {
        const { Header, Row, HeaderCell, Body } = Table;
        return (
            <Layout>
            <h3>Candidate Lists</h3>
           
            <Table>
                <Header>
                    <Row>
                        <HeaderCell>ID</HeaderCell>
                        <HeaderCell>Candidate Name</HeaderCell>
                        <HeaderCell>Party</HeaderCell>                       
                        <HeaderCell>Number of Votes</HeaderCell>
                        
                    </Row>
                </Header>
                <Body>
                    {this.renderRows()}
                </Body>
            </Table>
            <div>Total Voters = {this.props.totalvoters}.</div>
            </Layout>

            
        );
    }
}
export default CandidateIndex;