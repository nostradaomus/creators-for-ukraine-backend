# Creators for Ukraine
Creators for Ukraine is a platform for enabling any artist to mint their own NFT onto Ethereum. This repository contains a express and hardhat project. 

* `/contract` contains the smart contract
* `/backend` contains the express JS server.

This project is currently under active development.

# Start Backend
To run the server

```
node start
```

In order to copy ABI from contract run this in the `backend/` directory

`cp ../contract/artifacts/contracts/YourContract.sol/YourContract.json .`

# Hardhat Project

To run the local JsonRPC server
```
npx hardhat node
```

And to deploy the `Greeter` and `ERC721` contracts onto the local JsonRPC

```
npx hardhat run scripts/sample-script.js --network localhost
