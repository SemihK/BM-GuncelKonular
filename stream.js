const fs = require('fs');
const path = require('path');

fs.readFile(path.resolve(__dirname,"testdata.txt"),(err,data)=>{
    if(err) throw err;
    console.log(data);
}
    )

    const stream = fs.createReadStream(path.resolve(__dirname,"testdata.txt"));

    stream.on('open',()=>{console.log("Stream is open")});

    stream.on('data',(chunk)=>{
        console.log(chunk);
    })

    stream.on('end',()=>{
        console.log("Stream is ended");
    })  