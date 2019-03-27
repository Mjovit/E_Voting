import React, { Component } from 'react';
import { Header, Menu } from 'semantic-ui-react';
import voting from '../ethereum/voitng';
import Layout from '../components/Layout';

class VotingIndex extends Component {
     /*  static async getInitialProps() {
        const votings = await voting.methods.candidates().call();
        return { votings };
    }
    renderVotings() {
      const items =this.props.votings.map(uint => {
          return{
              header: candidate,
              description:<a>View Campaign</a>,
              fluid: true
          };
      });

      return <Card.Group items={items} />;
  }
*/
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    
    
   render() {
    
   
    const { activeItem } = this.state

    return (
        <Layout>
        <div>
      <Menu vertical>
        <Menu.Item
          name='AddCandidates'
          active={activeItem === 'AddCandidates'}
          onClick={this.handleItemClick}
        >
          <Header as='h4'>Add Candidates</Header>
          <p>Only manager can add Candidates</p>
        </Menu.Item>

        <Menu.Item name='coupons' active={activeItem === 'coupons'} onClick={this.handleItemClick}>
          <Header as='h4'>Vote</Header>
          <p>vote for your candidate</p>
        </Menu.Item>

        <Menu.Item name='rebates' active={activeItem === 'rebates'} onClick={this.handleItemClick}>
          <Header as='h4'>Total Votes</Header>
          <p>Number of votes for each candidate</p>
        </Menu.Item>

        <Menu.Item name='noofvoters' active={activeItem === 'noofvoters'} onClick={this.handleItemClick}>
          <Header as='h4'>Number of Voters</Header>
          <p>Number of voters participated for election</p>
        </Menu.Item>
      </Menu>
       
     
       </div>
       </Layout>
    )
    
  }
}
export default VotingIndex;