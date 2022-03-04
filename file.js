const { appendFile } = require("fs");

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



const createTextFile = (path) => { 
    return new Promise((resolve,reject) => {
        fs.writeFile(path,text,(err) => {
            if(err) {
                return reject(err.message);
            }
            else resolve();
        });
    });
}

const writeFileAsync = (path,data) => {
    return new Promise((resolve,reject) => {
        fs.writeFile(path,data,(err) => {
            if(err) {
                return reject(err.message);
            }
            else resolve();
        });
    });
}


const appendFileAsync = (path,data) => {
    return new Promise((resolve,reject) => {
        fs.appendFile(path,data,(err) => {
            if(err) {
                return reject(err.message);
            }
            else resolve();
        });
    });
}



const readFileAsync = (path) => {
    return new Promise((resolve,reject) => {
        fs.readFile(path,(err,data) => {
            if(err) {
                return reject(err.message);
            }
            else resolve(data);
        });
    });
}