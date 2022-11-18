const pdf = require("html-pdf");

class PDFWriter{

    static WritePDF(filename,html){
        pdf.create(html,{}).toFile(filename, (err) => {
            console.log(err);
        });
        console.log("piruzinho")
    }
}

module.exports = PDFWriter;