import { ChainId } from '@pancakeswap/chains'
import {
  Chain,
  degen as _degen,
  arbitrum,
  arbitrumGoerli,
  base,
  baseGoerli,
  bsc,
  bscTestnet,
  goerli,
  lineaTestnet,
  mainnet,
  polygonZkEvm,
  polygonZkEvmTestnet,
  pulsechain,
  scrollSepolia as scrollSepolia_,
  zkSync,
  zkSyncTestnet,
} from 'viem/chains'

const scrollSepolia = {
  ...scrollSepolia_,
  contracts: {
    multicall3: {
      address: '0xcA11bde05977b3631167028862bE2a173976CA11',
      blockCreated: 9473,
    },
  },
} as const satisfies Chain

const degen = {
  ..._degen,
  contracts: {
    multicall3: {
      address: '0x54337A58C93f306B1f47d2796bb8b500Ea859010',
      blockCreated: 8074132,
    },
  },
} as const satisfies Chain

export const opbnbTestnet = {
  id: 5_611,
  name: 'opBNB Testnet',
  network: 'opbnb-testnet',
  nativeCurrency: bscTestnet.nativeCurrency,
  rpcUrls: {
    default: {
      http: ['https://opbnb-testnet-rpc.bnbchain.org'],
    },
    public: {
      http: ['https://opbnb-testnet-rpc.bnbchain.org'],
    },
  },
  blockExplorers: {
    default: {
      name: 'opBNBScan',
      url: 'https://opbnbscan.com',
    },
  },
  contracts: {
    multicall3: {
      address: '0xcA11bde05977b3631167028862bE2a173976CA11',
      blockCreated: 3705108,
    },
  },
  testnet: true,
} as const satisfies Chain

export const linea = {
  id: 59_144,
  name: 'Linea Mainnet',
  network: 'linea-mainnet',
  nativeCurrency: { name: 'Linea Ether', symbol: 'ETH', decimals: 18 },
  rpcUrls: {
    infura: {
      http: ['https://linea-mainnet.infura.io/v3'],
      webSocket: ['wss://linea-mainnet.infura.io/ws/v3'],
    },
    default: {
      http: ['https://rpc.linea.build'],
      webSocket: ['wss://rpc.linea.build'],
    },
    public: {
      http: ['https://rpc.linea.build'],
      webSocket: ['wss://rpc.linea.build'],
    },
  },
  blockExplorers: {
    default: {
      name: 'Etherscan',
      url: 'https://lineascan.build',
    },
    etherscan: {
      name: 'Etherscan',
      url: 'https://lineascan.build',
    },
  },
  contracts: {
    multicall3: {
      address: '0xcA11bde05977b3631167028862bE2a173976CA11',
      blockCreated: 42,
    },
  },
  testnet: false,
} as const satisfies Chain

/**
 * Controls some L2 specific behavior, e.g. slippage tolerance, special UI behavior.
 * The expectation is that all of these networks have immediate transaction confirmation.
 */
export const L2_CHAIN_IDS: ChainId[] = [
  ChainId.ARBITRUM_ONE,
  ChainId.ARBITRUM_GOERLI,
  ChainId.POLYGON_ZKEVM,
  ChainId.POLYGON_ZKEVM_TESTNET,
  ChainId.ZKSYNC,
  ChainId.ZKSYNC_TESTNET,
  ChainId.LINEA_TESTNET,
  ChainId.LINEA,
  ChainId.BASE,
  ChainId.DEGENCHAIN,
  ChainId.BASE_TESTNET,
  ChainId.OPBNB_TESTNET,
]

export const CHAINS = [
  bsc,
  mainnet,
  bscTestnet,
  goerli,
  polygonZkEvm,
  polygonZkEvmTestnet,
  zkSync,
  zkSyncTestnet,
  arbitrum,
  arbitrumGoerli,
  linea,
  lineaTestnet,
  arbitrumGoerli,
  arbitrum,
  pulsechain,
  base,
  degen,
  baseGoerli,
  opbnbTestnet,
  scrollSepolia,
]
