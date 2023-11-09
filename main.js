const fetch = require("node-fetch");
// const fs = require('fs/promises');
const fs = require("node:fs");
// import { copyFile, constants } from 'node:fs';

// const path = require('path');

// async function getfiles(){
//     try {
//         const files = await fs.readdir('car-marketing');
//         for (const file of files)
//           console.log(file);
//       } catch (err) {
//         console.error(err);
//       }
// }
// getfiles();
let url =
  "https://res.cloudinary.com/dip3poftg/raw/upload/v1683002332/sample-book-data/books_m4bs2l.json";

let settings = { method: "Get" };

fetch(url, settings)
  .then((res) => res.json())
  .then((json) => {
    processData(json);
    //  console.log(json); // do something with JSON
  });

function processData(json) {
  let manipulatedData = json.map((item) => {
    if (item.year == 1300 || item.year == 1300) {
      return item;
    } else {
      return false;
    }
  });
  fs.writeFileSync(
    "manipulatedData.json",
    JSON.stringify(manipulatedData, null, 2)
  );
  let manipulatedData1 = json.map((item) => {
    if ((item.year >= 1500) && (item.year <= 1700)) {
      return item;
    } else {
       return undefined;
    }
  });
  fs.writeFileSync(
    "manipulatedData1.json",
    JSON.stringify(manipulatedData1, null , 2)
  );
  let data = json.map((item) => {
    if (item.year == 1900){
      return item;
    }
    else{
      return;
    }
  });
  fs.writeFileSync("data.json",JSON.stringify(data,null,2));
 
}

// function callback(err) {
//   if (err) throw err;
//   console.log('source.txt was copied to destination.txt');
// }

// destination.txt will be created or overwritten by default.
// fs.copyFile( url , 'destination.json', callback);
