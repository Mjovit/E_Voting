import web3 from './web3';
import Voting from './build/Voting.json';

const instance = new web3.eth.Contract(
    JSON.parse(Voting.interface),
    '0xb8d7c6A52B0Ff7Da7c214b80B4416d297ecd8687'
);

export default instance;