import {expectType} from 'tsd';
import sparkly from './index.js';

expectType<string>(sparkly([0, 3, 5, 8, 4, 3, 4, 10]));
expectType<string>(sparkly([0, 3, 5, '', 4, 3, 4, 10]));
expectType<string>(sparkly([1, 2, 3, 4, 5], {minimum: 0}));
expectType<string>(sparkly([1, 2, 3, 4, 5], {maximum: 10}));
expectType<string>(sparkly([1, 2, 3, 4, 5, 6, 7, 8], {style: 'fire'}));
