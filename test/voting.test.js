const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());

const compiledVoting = require('../ethereum/build/Voting.json');



let accounts;
let vote;
//let campaignAddress;
//let campaign;


beforeEach(async () => {
 accounts = await web3.eth.getAccounts(); 
 
 vote = await new web3.eth.Contract(JSON.parse(compiledVoting.interface))
   .deploy({data : compiledVoting.bytecode })
   .send({ from: accounts[0] , gas: '1000000' });

});

 describe('E-voting Contract', () => {
     it('deploys a contract', () => {
         assert.ok(vote.options.address);
     });
     it('marks caller as the manager', async () => {
        const manager = await vote.methods.manager().call();
        assert.equal(accounts[0],manager);
    });
     it('allows a manager to add a candidate', async () => {
        await vote.methods
            .addCandidate('Mathew' , 'congress')
            .send({
                from:accounts[0],
                gas: '1000000'
            });
        const add = await vote.methods.candidates(0).call();
        assert.equal('Mathew' , add.name);

       
     });

 });