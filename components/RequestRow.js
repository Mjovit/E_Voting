import React, {Component } from 'react';
import { Table ,Button } from 'semantic-ui-react';
import Voting from '../ethereum/voitng';



class RequestRow extends Component {
       
    
    render() {
        const { Row, Cell } = Table;
        const {id, request} = this.props;
        
       

        return (
            <Row>
                <Cell>{id}</Cell>
                <Cell>{request.name}</Cell>
                <Cell>{request.party}</Cell> 
                <Cell>{request.totalvotes}</Cell> 
                

            </Row>
        );

    }
}
export default RequestRow;