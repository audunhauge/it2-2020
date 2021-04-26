// @ts-check

function setup() {
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

export {setup,sqrt,count,avg,largest2}