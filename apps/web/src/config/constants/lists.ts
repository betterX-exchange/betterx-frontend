import { ChainId } from '@pancakeswap/chains'

export const PANCAKE_EXTENDED = 'https://assets.betterx.pro/tokens/pancakeswap-extended.json'

const COINGECKO = 'https://assets.betterx.pro/tokens/coingecko.json'
const PANCAKE_ETH_DEFAULT = 'https://assets.betterx.pro/tokens/eth-default.json'
const PANCAKE_ZKSYNC_DEFAULT = 'https://assets.betterx.pro/tokens/zksync-default.json'
const PANCAKE_POLYGON_ZKEVM_DEFAULT = 'https://assets.betterx.pro/tokens/polygon-zkevm-default.json'
const PANCAKE_ARB_DEFAULT = 'https://assets.betterx.pro/tokens/arbitrum-default.json'
const PANCAKE_LINEA_DEFAULT = 'https://assets.betterx.pro/tokens/linea-default.json'
const PANCAKE_BASE_DEFAULT = 'https://assets.betterx.pro/tokens/base-default.json'
const PANCAKE_PULSE_DEFAULT = 'https://assets.betterx.pro/tokens/pulse-default.json'
const PANCAKE_DEGEN_DEFAULT = 'https://assets.betterx.pro/tokens/degen-default.json'
const PANCAKE_OPBNB_DEFAULT = 'https://assets.betterx.pro/tokens/pancakeswap-opbnb-default.json'

export const PANCAKE_ETH_MM = 'https://assets.betterx.pro/tokens/eth-mm.json'
export const PANCAKE_BSC_MM = 'https://assets.betterx.pro/tokens/bnb-mm.json'

const COINGECKO_ETH = 'https://tokens.coingecko.com/uniswap/all.json'
// export const CMC = 'https://assets.betterx.pro/tokens/cmc.json' // not updated for a while

const ETH_URLS = [PANCAKE_ETH_DEFAULT, PANCAKE_ETH_MM, COINGECKO_ETH]
const BSC_URLS = [PANCAKE_EXTENDED, COINGECKO, PANCAKE_BSC_MM]
const POLYGON_ZKEVM_URLS = [PANCAKE_POLYGON_ZKEVM_DEFAULT, 'https://tokens.coingecko.com/polygon-zkevm/all.json']
const ARBITRUM_URLS = [PANCAKE_ARB_DEFAULT, 'https://tokens.coingecko.com/arbitrum-one/all.json']
const LINEA_URLS = [PANCAKE_LINEA_DEFAULT, 'https://tokens.coingecko.com/linea/all.json']
const ZKSYNC_URLS = [PANCAKE_ZKSYNC_DEFAULT, 'https://tokens.coingecko.com/zksync/all.json']
const OP_SUPER_CHAIN_URL =
  'https://raw.githubusercontent.com/ethereum-optimism/ethereum-optimism.github.io/master/optimism.tokenlist.json'
const BASE_URLS = [PANCAKE_BASE_DEFAULT]
const PULSE_URLS = [PANCAKE_PULSE_DEFAULT, 'https://tokens.coingecko.com/pulsechain/all.json']
const DEGEN_URLS = [PANCAKE_DEGEN_DEFAULT, 'https://tokens.coingecko.com/degen/all.json']
const OPBNB_URLS = [PANCAKE_OPBNB_DEFAULT]

// List of official tokens list
export const OFFICIAL_LISTS = [PANCAKE_EXTENDED, PANCAKE_ETH_DEFAULT]

export const UNSUPPORTED_LIST_URLS: string[] = []
export const WARNING_LIST_URLS: string[] = []

// lower index == higher priority for token import
export const DEFAULT_LIST_OF_LISTS: string[] = [
  ...BSC_URLS,
  ...ETH_URLS,
  ...ZKSYNC_URLS,
  ...LINEA_URLS,
  ...POLYGON_ZKEVM_URLS,
  ...BASE_URLS,
  ...ARBITRUM_URLS,
  OP_SUPER_CHAIN_URL,
  ...UNSUPPORTED_LIST_URLS, // need to load unsupported tokens as well
  ...WARNING_LIST_URLS,
  ...OPBNB_URLS,
  ...PULSE_URLS,
  ...DEGEN_URLS,
]

// default lists to be 'active' aka searched across
export const DEFAULT_ACTIVE_LIST_URLS: string[] = [
  PANCAKE_EXTENDED,
  PANCAKE_ETH_DEFAULT,
  PANCAKE_ETH_MM,
  PANCAKE_BSC_MM,
  PANCAKE_ETH_DEFAULT,
  PANCAKE_POLYGON_ZKEVM_DEFAULT,
  PANCAKE_ZKSYNC_DEFAULT,
  PANCAKE_ARB_DEFAULT,
  PANCAKE_LINEA_DEFAULT,
  PANCAKE_BASE_DEFAULT,
  PANCAKE_PULSE_DEFAULT,
  PANCAKE_DEGEN_DEFAULT,
  PANCAKE_OPBNB_DEFAULT,
  OP_SUPER_CHAIN_URL,
]

export const MULTI_CHAIN_LIST_URLS: { [chainId: number]: string[] } = {
  [ChainId.BSC]: BSC_URLS,
  [ChainId.ETHEREUM]: ETH_URLS,
  [ChainId.ZKSYNC]: ZKSYNC_URLS,
  [ChainId.POLYGON_ZKEVM]: POLYGON_ZKEVM_URLS,
  [ChainId.ARBITRUM_ONE]: ARBITRUM_URLS,
  [ChainId.LINEA]: LINEA_URLS,
  [ChainId.PULSECHAIN]: PULSE_URLS,
  [ChainId.BASE]: BASE_URLS,
  [ChainId.DEGENCHAIN]: DEGEN_URLS,
  [ChainId.OPBNB]: OPBNB_URLS,
}
