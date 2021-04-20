// @ts-check

const $ = elm => document.getElementById(elm);

function setup() {
    const txtArea = $("txt");
    const options = {
        types: [
          {
            description: "Text Files",
            accept: {
              "text/csv": [".txt"],
            },
          },
        ],
      };
    $("lagre").addEventListener("click", () => lagre(txtArea,options));
    $("les").addEventListener("click", () => les(txtArea));
}


async function lagre(txtArea,options) {
    const txt = txtArea.value;
    if (txt === "") {
        const yes = confirm("Save empty text?")
        if (! yes) return;
    }
    const handle = await window // @ts-ignore
      .showSaveFilePicker(options)
      .catch((e) => console.log("file save rejected"));
    if (!handle) return; // canceled by user
    const writable = await handle.createWritable();
    await writable.write(txt);
    await writable.close();
  };


async function les(txtArea,options) {   // @ts-ignore
  const [fileHandle] = await window.showOpenFilePicker(options);
  const file = await fileHandle.getFile();
  const contents = await file.text();
  txtArea.value = contents;
}