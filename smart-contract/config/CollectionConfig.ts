import CollectionConfigInterface from '../lib/CollectionConfigInterface';
import * as Networks from '../lib/Networks';
import * as Marketplaces from '../lib/Marketplaces';
import whitelistAddresses from './whitelist.json';

const CollectionConfig: CollectionConfigInterface = {
  testnet: Networks.ethereumTestnet,
  mainnet: Networks.ethereumMainnet,
  // The contract name can be updated using the following command:
  // yarn rename-contract NEW_CONTRACT_NAME
  // Please DO NOT change it manually!
  contractName: 'EmojiAdventures',
  tokenName: 'Emoji Adventures',
  tokenSymbol: 'EAV',
  hiddenMetadataUri: 'ipfs://QmPrLerKPrRQSE9YD9ZRLPiZY2dgqWYV3BnfYmUrVU4ot9/hidden.json',
  maxSupply: 50,
  whitelistSale: {
    price: 0.00001,
    maxMintAmountPerTx: 1,
  },
  preSale: {
    price: 0.0001,
    maxMintAmountPerTx: 2,
  },
  publicSale: {
    price: 0.001,
    maxMintAmountPerTx: 5,
  },
  contractAddress: "0xeFb1b065617660D9B2737ba49d53d9E8c76229Fb",
  marketplaceIdentifier: 'my-nft-token',
  marketplaceConfig: Marketplaces.openSea,
  whitelistAddresses,
};

export default CollectionConfig;
