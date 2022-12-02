import { ChainId } from '../constants';
import { Currency } from './currency';
import { Token } from './token';
import { Pair } from './pair';
import { Price } from './fractions/price';
import { PairExternal } from './externalpair';
export declare class Route {
    readonly pairs: Pair[] | PairExternal[];
    readonly path: Token[];
    readonly input: Currency;
    readonly output: Currency;
    readonly midPrice: Price;
    constructor(pairs: Pair[] | PairExternal[], input: Currency, output?: Currency);
    get chainId(): ChainId;
}
