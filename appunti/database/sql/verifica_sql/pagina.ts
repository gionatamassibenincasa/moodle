import { Specifica } from "./specifica";
import * as CodeMirror from "codemirror";

export class Pagina {
  constructor() {
    const abilitaModificaCaratteriTipografi = function() {
      const selettoreCSSFontFace = "#opendyslexic-fonts",
        selettoreInputFont = "#font-scelto",
        fontDislessia = "opendyslexic",
        fontPredefinito = "",
        idStileInterno = "stile_interno";
      /**
       * Prestare attenzione alla dislessia.
       *
       * Permetti la scelta del font con un sottoinsieme da http://dyslexiahelp.umich.edu/sites/default/files/good_fonts_for_dyslexia_study.pdf
       */
      let fontFaceOD: HTMLLinkElement = document.querySelector(
        selettoreCSSFontFace
      );
      fontFaceOD["disabled"] = true;
      let fontInput: HTMLFormElement = document.querySelector(
        selettoreInputFont
      );
      fontInput["value"] = "";
      document
        .querySelector(selettoreInputFont)
        .addEventListener("change", function(evento_o_font: any) {
          const abilitaOpenDyslexic = function() {
            const link: HTMLLinkElement = document.querySelector(
              selettoreCSSFontFace
            );
            if (link === null) {
              return;
            }
            link["disabled"] = false;
          };

          const disabilitaOpenDyslexic = function() {
            const link: HTMLLinkElement = document.querySelector(
              selettoreCSSFontFace
            );
            if (link === null) {
              return;
            }
            link["disabled"] = true;
          };

          let ff: string;
          if (evento_o_font instanceof Event) {
            let target: any = evento_o_font.target;
            ff = target["value"];
          } else {
            let font = evento_o_font;
            ff = evento_o_font;
          }
          const odf = document.querySelector(selettoreCSSFontFace);
          switch (ff) {
            case fontDislessia:
              abilitaOpenDyslexic();
              break;
            default:
              disabilitaOpenDyslexic();
          }
          let trovato = false;
          let css = undefined;
          const ss: StyleSheetList = document.styleSheets;
          for (let j = 0; j < ss.length; j++) {
            css = ss[j];
            if (
              css.ownerNode &&
              css.ownerNode.hasAttributes() &&
              css.ownerNode.getAttribute("id") === idStileInterno
            ) {
              trovato = true;
              break;
            }
          }
          if (trovato) {
            const rules = css.cssRules;
            for (let j = 0; j < rules.length; j++) {
              let rule = rules[j];
              rule.style["font-family"] = ff;
              /*document.querySelectorAll(".CodeMirror").forEach(elem => {
                let codemirror: CodeMirror.Editor = elem["CodeMirror"];
                codemirror.refresh();
              });*/
              return;
            }
          }
        });
    };

    abilitaModificaCaratteriTipografi();
  }

  aggiungiSpecifiche(specifiche: Specifica[]) {
    let elenco = document.querySelector("#descr-specs");
    specifiche.forEach(function(spec: Specifica) {
      let item = document.createElement("li");
      item.setAttribute("id", "descr-spec-" + spec.indice);
      item.innerHTML =
        spec.quesito.descrizione +
        "<br>" +
        spec.quesito.descrizione_breve +
        '<br><textarea id="editor_' +
        spec.indice +
        '"></textarea>';

      elenco.appendChild(item);
    });
  }
}
