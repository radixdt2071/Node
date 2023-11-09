const fs = require('fs');
const readline = require('readline');
const userDataFile = 'userdata.json';
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('Enter username: ', (username) => {
    rl.question('Enter password: ', (password) => {
        authenticateUser(username, password);
        rl.close();
    });
});
function authenticateUser(username, password) {
    fs.readFile(userDataFile, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading user data file:', err);
            return;
        }
        const user_data = JSON.parse(data);
        // console.log(user_data);
        const user = user_data.find((entry) => entry.name === username && entry.password === password);
        if (user) {
            console.log('Authentication successful for user:', username);
        } else {
            console.log('Unauthorized user');
        }
    });
}