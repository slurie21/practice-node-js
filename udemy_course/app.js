// console.log("PROCESS: ", process);
// const {sum} = require("./helpers");
// const express = require('express');
// const app = express();


// app.get('/', (req, res) => {
//     res.send("hey whats up from express.");
// });

// app.listen(3000);

// const total = sum(1, 6);
// console.log("Total: ", total);


const fs = require('fs');
const fileName = "target.txt";

const errHandler = err => console.log(err);
const dataHandler = data => console.log(data.toString());

// fs.watch(fileName, () => console.log(`file changed!`));  //executes console log each time file changes
fs.readFile(fileName, (err, data) => {
    if(err){
        console.log(err);
    }
    dataHandler(data);
});

console.log('end file.');



/* syncronous ex
const fs = require('fs');
const fileName = "target.txt";

const data = fs.readFileSync(fileName);

console.log(data.toString());

console.log('end file.');
*/