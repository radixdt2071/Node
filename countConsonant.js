const fs = require('fs');

// Function to count consonants in a string
function countConsonants(text) {
  const consonantPattern = /[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]/g;
  const consonants = text.match(consonantPattern);
  return consonants ? consonants.length : 0;
}

// Read the content of the file
fs.readFile('address.txt', 'utf-8', (err, data) => {
  if (err) {
    console.error('Error reading the file:', err);
  } else {
    const consonantCount = countConsonants(data);
    console.log('Content of address.txt:', data);
    console.log('Consonants in the text:', consonantCount);

   
  }
});
 // Remove the file
fs.unlink('person.txt', (removeErr) => {
if (removeErr) {
    console.error('Error removing the file:', removeErr);
} else {
    console.log('person.txt has been removed.');
}
});
