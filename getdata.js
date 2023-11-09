const fs = require('fs/promises');
const path = require('path');

async function listFiles(dirpath){
    let fileNames;
    try {
        fileNames = await fs.readdir(dirpath);
    } catch (err) {
        console.error(`Failed to read directory: ${dirpath}`);
        return [];
    }
    const filesInfo = await Promise.all(
        fileNames.map(async fileName => {
          const filePath = path.join(dirpath, fileName);
          const fileStats = await fs.stat(filePath);
    
          return { fileName, fileSize: fileStats.size };
        })
     );
     console.table(filesInfo);
    }
    listFiles(process.argv[2] || '.');

// const file = fs.readFile('userdata.json','utf8', (err, data) => {
//   if (err) throw err;
//   const userdata = JSON.parse(data);
//   console.log(userdata);

// let newdata = userdata.map(user_data => ({
 
//     ... user_data,
//      email: `${ user_data.name}@radixweb.com`
    
 
// }));
// fs.writeFileSync("latestusr.json",JSON.stringify(newdata,null,2));
// });
fs.readFile('car-marketing/car-details.txt','utf8',(err,data) => {
    if(err){
        return console.error(err);
    } 
    const words = data.split(/\s+/);
    const wordCount = words.length;
    console.log(`Word count: ${wordCount}`);
});

