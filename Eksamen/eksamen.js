// @ts-check


function setup() {
    const divMain = document.getElementById("main");

    function f(x) {
        return x**2 -2;
    }

    const X = [];
    for (let i=-2; i<2; i += 0.01) {
        X.push(i);
    }
    const Y = X.map(f);
    for (let i=0; i<3999; i++) {
        if (Y[i]*Y[i+1] <= 0) {
            divMain.innerHTML = "Jeg har funnet et nullpunkt x="+X[i];
        }
    }

}
