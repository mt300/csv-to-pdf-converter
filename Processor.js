class Processor{

    static Process(data){
        var lines = data.split("\n");
        var rows = [];

        lines.forEach(row => {
            var arr = row.split(",");
            rows.push(arr);
        });
        // console.log(rows);
        return rows;
    }
}

module.exports = Processor;