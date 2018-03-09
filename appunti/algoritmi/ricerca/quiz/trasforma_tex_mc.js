const fs = require("fs");

let tex = fs.readFileSync("ro_1.tex", "utf-8");
let chunk = tex.split("$$");
let str;
let inizio = true;
chunk.forEach((c, i) => {
  if (i % 2 === 0) return;

  c = c.replace(/\\/g, "\\\\");
  c = c.replace(/~/g, "\\\\~");
  //c = c.replace(/=/g, "\\\\=");
  c = c.replace(/#/g, "\\\\#");
  //c = c.replace(/{/g, "\\\\{");
  c = c.replace(/}/g, "\\\\}");
  c = c.replace(/\n/g, "");
  if (inizio) {
    str = "=";
    inizio = false;
  } else {
    str += "~";
  }
  str += "\\\\(" + c + "\\\\)";
});
console.log(str);
