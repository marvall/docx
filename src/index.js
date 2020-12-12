import './scss/main.scss';
const docx = require('docx');
var FileSaver = require('file-saver');
import getDOC from './js/doc.js';

let someText;
let someText2;

const getFile = function () {
    let doc = getDOC(someText, someText2)
  docx.Packer.toBlob(doc).then(blob => {
    // saveAs from FileSaver will download the file
    FileSaver.saveAs(blob, 'Kolobochki.docx');
  });
};

const setText = function (e) {
  if (e.target.className === 'text') {
    someText = e.target.value;
  } else {
    someText2 = e.target.value;
  }
  console.log(String(someText));
  console.log(String(someText2));
};

document.querySelector('.some-doc').addEventListener('input', setText);
document.querySelector('.download').addEventListener('click', getFile);
