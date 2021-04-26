// @ts-check
// importerer test biblioteket
import { Test, expect } from './Test.js';

// importerer funksjonene som skal testes
import {harViNyHiScore} from './oppg3.js';

expect("<h1>Tester</h1>").be();

expect(harViNyHiScore,1).to.be("hiscore");
expect(harViNyHiScore,1).to.be("samme");
expect(harViNyHiScore,2).to.be("hiscore");
expect(harViNyHiScore,1).to.be("");
expect(harViNyHiScore,-100).to.be("");
expect(harViNyHiScore,0).to.be("");
expect(harViNyHiScore,132457235476523764).to.be("hiscore");
expect(harViNyHiScore,1e87).to.be("hiscore");
expect(harViNyHiScore,"score").to.be("feil");



/*
expect("<h4>Tester count()</h4>").be();
// count skal telle opp antall like forekomster i en array
expect(count,"aaaabbbccd".split("")).to.be({ a: 4, b: 3, c: 2, d: 1 });
expect(count([1, 2, 3, 1]), "count[1,2,3,1]").to.be({ 1: 2, 2: 1, 3: 1 });



expect("<h4>Tester largest</h4>").be();
expect(largest2([1, 2]), "largest[1,2]").is.a("Array");
expect(largest2([1, 2]), "largest[1,2]").to.have(0).eq(1);
expect(largest2([1, 2]), "largest[1,2]").to.have(1).eq(2);
expect(largest2([1, 2, 3, 4]), "largest[1,2,3,4]").to.have(0).eq(3);
expect(largest2([1, 2, -13, 0, 3.14]), "largest[...]").to.have(1).eq(3.14);
expect(largest2([1, 1, 1, 4, 4]), "largest[...]").to.have(0).eq(4);
expect(largest2([1, 1, 1, 4, 4]), "largest[...]").to.have(1).eq(4);
expect(largest2([1, 1, 1, 4, 5]), "largest [..4,5]").to.includes([4, 5])
expect(largest2, [1, 1, 1, 4, 5]).to.be([4, 5])


expect("<h4>Tester sqrt</h4>").be();
expect(sqrt, 2).to.be(1);
expect(sqrt, -1).to.be("NaN");
expect(sqrt, -1).is.a("Number");

expect("<h4>Tester avg</h4>").be();
expect(avg, [1, 1]).to.be(1);
expect(avg, []).to.be(0);
expect(avg, [-1, 1]).to.be(0);



expect(avg([1, 2]), "avg[-1,1]").to.be(1.5);
*/

export {Test};