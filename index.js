const fs = require('fs');

// Create the file and write "Hello World" to it
fs.writeFile('person1.txt', 'Hello World', (err) => {
  if (err) {
    console.error('Error writing "Hello World" to person1.txt:', err);
  } else {
    console.log('Hello World has been written to person1.txt');
    
    // Append "Hello India" to the file
    fs.appendFile('person.txt', '\nHello India', (appendErr) => {
      if (appendErr) {
        console.error('Error appending "Hello India" to person1.txt:', appendErr);
      } else {
        console.log('Hello India has been appended to person1.txt');
      }
    });
  }
});
if (process.argv.length < 3) {
    console.error('Please provide your name as a command line argument.');
    process.exit(1);
  }
  
  // Get the name from the command line argument
  const name = process.argv[2];
  
  // Create the file and write "Hello " + name to it
  fs.appendFile('person1.txt', `\nHello ${name}\n`, (err) => {
    if (err) {
      console.error(`Error appending "Hello ${name}" to person1.txt:`, err);
    } else {
      console.log(`Hello ${name} has been appended to person1.txt`);
    }
  });

  const path = require('path');
  
  // Create a folder named 'files'
  const folderPath = path.join(__dirname, 'files'); // Assuming you want to create the 'files' folder in the same directory as the script
  
  fs.mkdir(folderPath, (err) => {
    if (err) {
      if (err.code === 'EEXIST') {
        console.log('The "files" folder already exists.');
      } else {
        console.error('Error creating the "files" folder:', err);
      }
    } else {
      console.log('The "files" folder has been created.');
    }
  
    // Move 'person.txt' to the 'files' folder
    const sourceFilePath = 'person.txt'; // Assuming 'person.txt' is in the same directory as the script
    const destinationFilePath = path.join(folderPath, 'person.txt');
  
    fs.rename(sourceFilePath, destinationFilePath, (moveErr) => {
      if (moveErr) {
        console.error('Error moving "person.txt" to the "files" folder:', moveErr);
      } else {
        console.log('The "person.txt" file has been moved to the "files" folder.');
      }
    });
  });
  