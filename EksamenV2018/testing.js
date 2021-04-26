// @ts-check
// importerer test biblioteket
import { Test, expect } from './Test.js';

// importerer funksjonene som skal testes
import {allScores, harViNyHiScore} from './oppg3.js';

expect("<h1>Tester</h1>").be();

expect(harViNyHiScore,1).to.be("hiscore");
expect(harViNyHiScore,1).to.be("samme");
expect(harViNyHiScore,2).to.be("hiscore");
expect(harViNyHiScore,1).to.be("");
expect(allScores).is.a("array");
expect(allScores).to.be([1,1,2,1]);
expect(harViNyHiScore,-100).to.be("");
expect(harViNyHiScore,0).to.be("");
expect(harViNyHiScore,132457235476523764).to.be("hiscore");
expect(harViNyHiScore,1e87).to.be("hiscore");
expect(harViNyHiScore,"score").to.be(null);





export {Test};