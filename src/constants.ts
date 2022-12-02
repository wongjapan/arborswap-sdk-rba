import JSBI from 'jsbi'

// exports for external consumption
export type BigintIsh = JSBI | number | string

export enum ChainId {
  MAINNET = 56,
  TESTNET = 97,
  ROBURNA = 159
}

export enum TradeType {
  EXACT_INPUT,
  EXACT_OUTPUT
}

export enum Rounding {
  ROUND_DOWN,
  ROUND_HALF_UP,
  ROUND_UP
}
export const FACTORY_ADDRESS = '0x0de73FE9d848A68Aba41c3edcd2C69301a7f4573'
export const FACTORY_ADDRESS_EXTERNAL = '0xD3c5FF3f6C4E9Aa876E563f4cb04d3020CFC8Ad9'
export const FACTORY_ADDRESS_ROBURNA = '0x0de73FE9d848A68Aba41c3edcd2C69301a7f4573'

export const FACTORY_ADDRESS_MAP = {
  [ChainId.MAINNET]: FACTORY_ADDRESS,
  [ChainId.TESTNET]: FACTORY_ADDRESS,
  [ChainId.ROBURNA]: FACTORY_ADDRESS_ROBURNA
}

export const EXTERNAL_FACTORY_ADDRESS_MAP = {
  [ChainId.MAINNET]: FACTORY_ADDRESS_EXTERNAL,
  [ChainId.TESTNET]: FACTORY_ADDRESS_EXTERNAL,
  [ChainId.ROBURNA]: FACTORY_ADDRESS_EXTERNAL
}

export const INIT_CODE_HASH = '0x2e26c6a371cb994ce7b30f334480a5782dff687140d5608ced830fc138a0ed7b'
export const INIT_CODE_HASH_EXTERNAL = '0xc1356d02a24c59f29ae5ee0746a3c82345d8817f2dc7e93b56110d5690e5f242'
export const INIT_CODE_HASH_ROBURNA = '0x2e26c6a371cb994ce7b30f334480a5782dff687140d5608ced830fc138a0ed7b'

export const INIT_CODE_HASH_MAP = {
  [ChainId.MAINNET]: INIT_CODE_HASH,
  [ChainId.TESTNET]: INIT_CODE_HASH,
  [ChainId.ROBURNA]: INIT_CODE_HASH_ROBURNA
}

export const EXTERNAL_CODE_HASH_MAP = {
  [ChainId.MAINNET]: INIT_CODE_HASH_EXTERNAL,
  [ChainId.TESTNET]: INIT_CODE_HASH_EXTERNAL,
  [ChainId.ROBURNA]: INIT_CODE_HASH_EXTERNAL
}

export const MINIMUM_LIQUIDITY = JSBI.BigInt(1000)

// exports for internal consumption
export const ZERO = JSBI.BigInt(0)
export const ONE = JSBI.BigInt(1)
export const TWO = JSBI.BigInt(2)
export const THREE = JSBI.BigInt(3)
export const FIVE = JSBI.BigInt(5)
export const TEN = JSBI.BigInt(10)
export const _100 = JSBI.BigInt(100)
export const FEES_NUMERATOR = JSBI.BigInt(9975)
export const FEES_DENOMINATOR = JSBI.BigInt(10000)

export enum SolidityType {
  uint8 = 'uint8',
  uint256 = 'uint256'
}

export const SOLIDITY_TYPE_MAXIMA = {
  [SolidityType.uint8]: JSBI.BigInt('0xff'),
  [SolidityType.uint256]: JSBI.BigInt('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff')
}
