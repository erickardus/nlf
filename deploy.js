const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider(
  'left ride practice bridge bottom success document unknown vivid rich reduce sorry',
  'https://rinkeby.infura.io/TSioN7MQdn0uAJJifKzO'
);

const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log('Attempting to deploy from account', accounts[0]);

  result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode, arguments: ['Hello Teacher'] })
    .send({ gas: '1000000', from: accounts[0] });  

  console.log('Contract deployed to', result.options.address);

};
deploy();
