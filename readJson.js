//  W O R K I N G  READ JSON ONLY

// const fs = require('fs');

// for (let i = 1; i <= 3500; i++) {
//     let rawdata = fs.readFileSync('./assets/' + i + '.json');
//     let student = JSON.parse(rawdata);
//     console.log(student.image);   
// }



// W O R K I N G   READ AND UPDATE JSON DATA
// const updateJsonFile = require('update-json-file')
 
// const filePath = "./assets/"
// for (let i = 2001; i <= 3500; i++) {
//     const index = i;
//     updateJsonFile(filePath + index + ".json", (data) => {
//         data.image = "https://gateway.pinata.cloud/ipfs/QmWzRWagjJ7qkGcoaeghseTs5ZArF7qKMLJBVkvfoz9kce/"+ data.edition + ".png"
//         console.log(data.edition);
//       return data
//     })
// }