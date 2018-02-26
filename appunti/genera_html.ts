import * as markdownIt from "markdown-it";
import * as table from "markdown-it-table";
import * as anchor from "markdown-it-anchor";
import * as toc from "markdown-it-table-of-contents";
import * as fs from "fs";
import * as hb from "handlebars";

export const genera_html = function(file, titolo) {
  const h = fs.readFileSync("./template/html/testa.html", "utf-8");
  const t = fs.readFileSync("./template/html/coda.html", "utf-8");
  const md_body = fs.readFileSync(file, "utf8");

  const mdi = markdownIt();
  mdi.set({
    html: true,
    linkify: true,
    typographer: true
  });
  mdi.use(table);
  mdi.use(anchor);
  mdi.use(toc, {
    includeLevel: [1, 2, 3, 4]
  });

  // let p = mdi.parse(fs.readFileSync(file, "utf8"), {});

  let b = mdi.render(md_body, {});

  const sorgente_html = h + "\n" + b + "\n" + t;
  const template = hb.compile(sorgente_html);
  const contesto = { titolo: titolo };
  return template(contesto);
};
