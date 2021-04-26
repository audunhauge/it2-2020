// @ts-check

const allScores = [];


function setup() {

}

/**
 * Skal sjekk om dette er en ny hiscore
 * Eller lik forrige hiscore
 * "Hiscore" | "Samme" | ""
 * @param {number} score
 * @returns {string | null}
 */
function harViNyHiScore(score) {
    if (allScores.length < 1) {
        allScores.push(score);
        return "hiscore";
    }
    let max = allScores[0];
    for (let i=0; i< allScores.length; i++) {
        const verdi = allScores[i];
        if (verdi > max) max = verdi;
    }
    allScores.push(score);
    if (score < max) return "";
    if (score === max) return "samme";
    if (score > max) return "hiscore";
    return "feil";
}



export {setup,harViNyHiScore}