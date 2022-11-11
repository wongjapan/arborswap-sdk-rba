import JSBI from 'jsbi';
export declare type BigintIsh = JSBI | number | string;
export declare enum ChainId {
    MAINNET = 56,
    TESTNET = 97,
    ROBURNA = 159
}
export declare enum TradeType {
    EXACT_INPUT = 0,
    EXACT_OUTPUT = 1
}
export declare enum Rounding {
    ROUND_DOWN = 0,
    ROUND_HALF_UP = 1,
    ROUND_UP = 2
}
export declare const FACTORY_ADDRESS = "0x0de73FE9d848A68Aba41c3edcd2C69301a7f4573";
export declare const FACTORY_ADDRESS_ROBURNA = "0x0de73FE9d848A68Aba41c3edcd2C69301a7f4573";
export declare const FACTORY_ADDRESS_MAP: {
    56: string;
    97: string;
    159: string;
};
export declare const INIT_CODE_HASH = "0x2e26c6a371cb994ce7b30f334480a5782dff687140d5608ced830fc138a0ed7b";
export declare const INIT_CODE_HASH_ROBURNA = "0x2e26c6a371cb994ce7b30f334480a5782dff687140d5608ced830fc138a0ed7b";
export declare const INIT_CODE_HASH_MAP: {
    56: string;
    97: string;
    159: string;
};
export declare const MINIMUM_LIQUIDITY: JSBI;
export declare const ZERO: JSBI;
export declare const ONE: JSBI;
export declare const TWO: JSBI;
export declare const THREE: JSBI;
export declare const FIVE: JSBI;
export declare const TEN: JSBI;
export declare const _100: JSBI;
export declare const FEES_NUMERATOR: JSBI;
export declare const FEES_DENOMINATOR: JSBI;
export declare enum SolidityType {
    uint8 = "uint8",
    uint256 = "uint256"
}
export declare const SOLIDITY_TYPE_MAXIMA: {
    uint8: JSBI;
    uint256: JSBI;
};
