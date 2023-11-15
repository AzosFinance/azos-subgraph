# azos-subgraph
<img width="518" alt="image" src="https://github.com/AzosFinance/azos-subgraph/assets/10622322/8c734522-6764-4faa-b95e-171eb3e29d21">

Azos subgraph captures smart contract events from the graph. 
A subgraph will need to be generated and launched for the application to get its data.

## Getting started
- Install
```bash
yarn global add @graphprotocol/graph-cli
yarn install

```
- You will have to create a [graph instance](https://thegraph.com) to get your DEPLOY KEY and SUBGRAPH_SLUG.
- to build the graph and deploy:

```bash
graph auth --hosted-service <DEPLOY KEY>
graph codegen && graph build --network sepolia
graph deploy --product hosted-service <SUBGRAPH_SLUG>
```

