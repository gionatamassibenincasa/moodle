import CodeMirror = require("codemirror");

export class Editor {
  private _codemirror: CodeMirror.Editor;

  constructor(configurazione: any, callback: Function, selettore: string) {
    let address: string = window.location.href.split("#")[0];
    /**
     * Il salvataggio del codice sorgente
     */
    let localSave = function(editor: CodeMirror.Editor) {
      // Salva il sorgente nel browser, per eventuali ripristini
      localStorage[address + selettore] = editor.getValue();
    };
    /**
     *  Callback per salvare le modifiche del codice sorgente ad ogni modifica
     */
    let addPersistence = function(editor) {
      var persisted: string =
        localStorage[address + selettore] || editor.getValue();
      editor.setValue(persisted);
      editor.on("change", localSave);
    };
    /**
     * Istanziazione dell'editor
     *
     * I dati del local storage devono essere caricati precedentemente in #editor
     */
    this._codemirror = CodeMirror.fromTextArea(
      document.querySelector(selettore),
      configurazione
    );
    addPersistence(this._codemirror);
    callback(this._codemirror);
  }

  get value() {
    return this._codemirror.getValue();
  }
}
