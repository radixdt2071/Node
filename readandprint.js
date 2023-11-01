const fs = require('fs').promises;

async function readAndPrintFiles() {
  try {
    // Read the content of file1.txt
    const contentFile1 = await fs.readFile('file1.txt', 'utf-8');
    console.log('Content of file1.txt:\n', contentFile1);

    // Read the content of file2.txt
    const contentFile2 = await fs.readFile('file2.txt', 'utf-8');
    console.log('Content of file2.txt:\n', contentFile2);
  } catch (err) {
    console.error('An error occurred:', err);
  }
}

readAndPrintFiles();
