// @ts-check

import {Test,expect} from './Test.js';

export function setup() {
    for (let i=0; i<10; i++) {
        const t = sqrt(i);
    }
}

function sqrt(x) {
    if (x <0) return NaN;
    return x/2;
}

expect(sqrt(2),"sqrt(2)").to.be(1);
expect(sqrt(3),"sqrt(3)").to.be(1.5);
Test.summary("#Summary");