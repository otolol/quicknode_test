 
## Getting Started
 
First, run the development server:
 
```bash
npm run dev
```
 
To connect Ethereum testnet should create a `.env.local` file and set the `PRIVATE_KEY` property with your private key.
To connect `.icy.tools` should fill `API_KEY` in the `env.local` file.
 
As it is, the frontend test project does not contain any database. Authentication is done via ethers.js and connects the user wallet directly.
