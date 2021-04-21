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

function avg(arr) {
    const s = arr.reduce((s,v)=> s+v,0);
    return s/arr.length;
}

expect(sqrt(2),"sqrt(2)").to.be(1);
expect((sqrt(-1)).toString(),"sqrt(-1)").to.be("NaN");
expect(sqrt(-1),"sqrt(-1)").is.a("Number");

expect(avg([1,1]),"avg[1,1]").to.be(1);
expect(avg([]),"avg[]").to.be(0);



Test.summary("#Summary");