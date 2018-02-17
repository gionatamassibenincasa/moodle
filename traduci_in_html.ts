import * as markdownIt from "markdown-it";
import * as fs from "fs";

const h = `<!DOCTYPE html>
<html lang="it">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <!-- KaTeX -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.9.0-beta1/katex.min.css" integrity="sha384-VEnyslhHLHiYPca9KFkBB3CMeslnM9CzwjxsEbZTeA21JBm7tdLwKoZmCt3cZTYD"
        crossorigin="anonymous">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.9.0-beta1/katex.min.js" integrity="sha384-O4hpKqcplNCe+jLuBVEXC10Rn1QEqAmX98lKAIFBEDxZI0a+6Z2w2n8AEtQbR4CD"
        crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.9.0-beta1/contrib/auto-render.min.js" integrity="sha384-IiI65aU9ZYub2MY9zhtKd1H2ps7xxf+eb2YFG9lX6uRqpXCvBTOidPRCXCrQ++Uc"
        crossorigin="anonymous"></script>

    <!-- HighlightJS -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/styles/default.min.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/highlight.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/languages/javascript.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/languages/python.min.js"></script>

    <!-- Online Python Tutor -->
    <!--script type="text/javascript" src="http://pythontutor.com/build/pytutor-embed.bundle.js" charset="utf-8"></script-->
    <script type="text/javascript" src="../../lib/pytutor-embed.bundle.js" charset="utf-8"></script>
    
    <title></title>

    <style>
        tr,
        td {
            border-collapse: collapse;
            border: 1px solid black;
        }
    </style>
</head>

<body>`;
const t = `    <script>
renderMathInElement(document.body);
var algos = [];
document.querySelectorAll('pre > code').forEach(function (e) {
  if (algos.indexOf(e.attributes['algo'].value) == -1) {
    algos.push(e.attributes['algo'].value);
  }
});
algos.forEach(function (algo) {
    [{ lang: 'pseudo', ext: 'pseudo' }, { lang: 'javascript', ext: 'js' }, { lang: 'python', ext: 'py' }].forEach(function (impl) {
        var filename = algo + '.' + impl.ext;
        var url = './codice/' + filename;
        fetch(url).then(function(response) {
            return response.text();
          }).then(function(src) {
            var sel = 'code[algo="' + algo + '"][class="' + impl.lang + '"]';
            var elem = document.querySelector(sel);
            elem.innerText = src;
            hljs.highlightBlock(elem);
       });
    });
});
// Tracce con OPT
createAllVisualizersFromHtmlAttrs();
  </script>

</body>
</html>`;

const mdi = markdownIt();
mdi.set({
  html: true,
  linkify: true,
  typographer: true
});

let file = process.argv[2];
// let p = mdi.parse(fs.readFileSync(file, "utf8"), {});

let b = mdi.render(fs.readFileSync(file, "utf8"), {});
console.log(h);
console.log(b);
console.log(t);
