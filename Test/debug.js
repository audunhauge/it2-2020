// @ts-check

import { Test, expect, message } from './Test.js';

export function setup() {
    for (let i = 0; i < 10; i++) {
        const t = sqrt(i);
    }
}

function sqrt(x) {
    if (x < 0) return NaN;
    return x / 2;
}

function count(arr) {
    const c = {};
    for (let v of arr) {
        c[v] = c[v] ? c[v] + 1 : 1;
    }
    return c;
}

function avg(arr) {
    if (arr.length === 0) return 0;
    const s = arr.reduce((s, v) => s + v, 0);
    return s / arr.length;
}


function largest2(arr) {
    const sorted = arr.sort((a, b) => b - a);
    const [u, v] = sorted.slice(0, 2);
    return [v, u];
}


expect("Tester count()").be();
// count skal telle opp antall like forekomster i en array
expect(count,"aaaabbbccd".split("")).to.be({ a: 4, b: 3, c: 2, d: 1 });
expect(count([1, 2, 3, 1]), "count[1,2,3,1]").to.be({ 1: 2, 2: 1, 3: 1 });



expect("Tester largest").be();
expect(largest2([1, 2]), "largest[1,2]").is.a("Array");
expect(largest2([1, 2]), "largest[1,2]").to.have(0).eq(1);
expect(largest2([1, 2]), "largest[1,2]").to.have(1).eq(2);
expect(largest2([1, 2, 3, 4]), "largest[1,2,3,4]").to.have(0).eq(3);
expect(largest2([1, 2, -13, 0, 3.14]), "largest[...]").to.have(1).eq(3.14);
expect(largest2([1, 1, 1, 4, 4]), "largest[...]").to.have(0).eq(4);
expect(largest2([1, 1, 1, 4, 4]), "largest[...]").to.have(1).eq(4);
expect(largest2([1, 1, 1, 4, 5]), "largest [..4,5]").to.includes([4, 5])
expect(largest2, [1, 1, 1, 4, 5]).to.be([4, 5])


expect("Tester sqrt").be();
expect(sqrt, 2).to.be(1);
expect(sqrt, -1).to.be("NaN");
expect(sqrt, -1).is.a("Number");

expect("Tester avg").be();
expect(avg, [1, 1]).to.be(1);
expect(avg, []).to.be(0);
expect(avg, [-1, 1]).to.be(0);



expect(avg([1, 2]), "avg[-1,1]").to.be(1.5);
Test.summary("#Summary");