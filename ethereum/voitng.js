import web3 from './web3';
import Voting from './build/Voting.json';

const instance = new web3.eth.Contract(
    JSON.parse(Voting.interface),
    '0x2FF0602b0AFce099331F4dcdf80A21d47236916f'
);

export default instance;