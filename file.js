// const { appendFile } = require("fs");

// const writeFileAsync = async (path,daata) => {
//     return new Promise((resolve,reject) => {
//         fs.writeFile(path,daata,(err) => {
//             if(err) {
//                 return reject(err.mesage);
//             }
//             else resolve();
//         });
//     });
// };

// writeFileAsync(path.resolve(__dirname,"text.txt"),'data')
// .then() => {appendFileAsync(path.resolve(__dirname,"text.txt"),
// .then() => {appendFileAsync(path.resolve(__dirname,"text.txt"),
// .then() => {appendFileAsync(path.resolve(__dirname,"text.txt"),
// .catch(err => console.log(err)




const text = "BIL 4 2 5";



// const createTextFile = (path) => { 
//     return new Promise((resolve,reject) => {
//         fs.writeFile(path,text,(err) => {
//             if(err) {
//                 return reject(err.message);
//             }
//             else resolve();
//         });
//     });
// }

// const writeFileAsync(path.resolve(__dirname,"text.txt"),'data')
// .then(() => readFileAsync(path.resolve(__dirname,"text.txt"))
// .then(data.split('').lenght)
// .then(count => writeFileAsync(path.resolve(__dirname,"count.txt"), $count))


const fsPromise = require('fs').promises;

const fileRead = async (path) => {

    try{
        await fsPromise.readFile(path).resolve(__dirname,"text.txt");
    } catch(err) {
        console.log(err.message);
    }



// const appendFileAsync = (path,data) => {
//     return new Promise((resolve,reject) => {
//         fs.appendFile(path,data,(err) => {
//             if(err) {
//                 return reject(err.message);
//             }
//             else resolve();
//         });
//     });
// }



// const readFileAsync = (path) => {
//     return new Promise((resolve,reject) => {
//         fs.readFile(path,{encoding: 'utf-8'}, (err,data) => {
//             if(err) {
//                 return reject(err.message);
//             }
//             else resolve(data);
//         });
//     });
//   }
