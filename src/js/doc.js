const docx = require('docx');

const getDOC = function(valueONE, valueTWO){
    const doc = new docx.Document({
      creator: 'marvall',
      description: 'the test lib docx',
      title: 'Trololo',
    });

    doc.addSection({
      children: [
        new docx.Paragraph({
          children: [new docx.TextRun(`${valueONE}`)],
        }),
        new docx.Paragraph({
          children: [new docx.TextRun(`${valueTWO}`)],
        }),
      ],
    });
    return doc;
}
export default getDOC;
