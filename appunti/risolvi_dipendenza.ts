import * as fs from "fs";
import * as path from "path";
import { genera_html } from "./genera_html";

const aggiorna = function(
  sorgente: string,
  destinazione: string,
  titolo: string
): boolean {
  const s_ext: string = path.extname(sorgente);
  const d_ext: string = path.extname(destinazione);
  const schema = s_ext + d_ext;
  switch (schema) {
    case ".md.html":
      console.log("Aggiorno ", sorgente, destinazione);
      const dst = genera_html(sorgente, titolo);
      fs.writeFileSync(destinazione, dst, "utf-8");
      break;
  }
  return true;
};

export const risolvi_dipendenza = function(
  sorgente: string,
  destinazione: string,
  titolo: string = ""
): boolean {
  if (!fs.existsSync(sorgente)) return false;
  const mt_sorgente = fs.statSync(sorgente).mtime;
  // Se la destinazione esiste ed è più recente della sorgente
  if (
    fs.existsSync(destinazione) &&
    fs.statSync(destinazione).mtime > mt_sorgente
  )
    return true;
  else {
    return aggiorna(sorgente, destinazione, titolo);
  }
};
