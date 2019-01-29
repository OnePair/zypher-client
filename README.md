
# Zypher-Client

> A AuthID agent client implementation built in Typescript.


## Install

Install with npm ```npm install```.

## Build

Build with ```npm run build```

## Usage

### Wallet

```js
import { ZypherWallet } from "zypher-client"

const agentHost = "http://localhost:7777"
const password = "password123"
const eth = "eth";

let zypherWallet = new ZypherWallet(agentHost);

let address = await zypherWallet.getAddress(eth, password);

```

### Agent

```js
import { ZypherAgent } from "zypher-client"

const agentHost = "http://localhost:7777"
const password = "password123"
const eth = "eth";

let zypherAgent = new ZypherAgent(agentHost);

await zypherAgent.registerDID(eth, password);

```