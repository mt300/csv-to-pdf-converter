const Reader = require("./Reader");
const Processor = require("./Processor");
const Table = require("./Table");
const HtmlParser = require("./HtmlParser");
const Writer = require("./Writer");
const PDFWriter = require("./PDFWriter");

var reader = new Reader();
var writer = new Writer();

async function main() {
    var data = await reader.Read("./users.csv");
    var procdata = Processor.Process(data);

    var users = new Table(procdata); 
    
    var html = await HtmlParser.Parse(users);

    // writer.Write( Date.now() + ".html",html);
    PDFWriter.WritePDF(Date.now() + ".PDF", html);
    // console.log(html);
    // console.log(users.ColumnCount);
}

main();