// @ts-check

function setup() {
    localStorage.clear();
    const skjema = document.getElementById("skjema");
    const divBrukere = document.getElementById("brukere");
    const user = {fornavn:"",etternavn:"",brukernavn:""};
    // @ts-ignore
    skjema.info = user;

    skjema.addEventListener("useraccount", e => {
        if (e.detail === "ok") {
            const user = skjema.info;
            if (user.brukernavn !== "") {
                localStorage.setItem(user.brukernavn,JSON.stringify(user));
                // løkke som viser alle lagra brukere
                let s = "";
                for (let i=0; i < localStorage.length; i++) {
                    const key = localStorage.key(i);
                    const user = localStorage.getItem(key);
                    s += user + "<br>";
                }
                divBrukere.innerHTML = s;

            }
        } 
      })

}