const readlineSync = require('readline-sync');
const fs = require("fs");
const userCredentials = require('./userCredentials');
const orchids = require('./orchids.js')

import('chalk').then(({ default: chalk }) => {

    console.log(chalk.blue('Welcome to the database of orchids'))
    console.log(chalk.magentaBright("What would you like to do today? Enter a number from the list below"))
    console.log(chalk.green("1. Log in\n 2. Random Orchid\n 3. Compare orchids\n 4. ID an orchid with the Key Feature "))

    let username = readlineSync.question('Enter your username: ');
    let password = readlineSync.question('Enter your password: ', {
        hideEchoBack: true
    })

    let userFound = false

    for (let user of userCredentials) {
        if (user.username === username && user.password === password) {
            userFound = true;
            console.log('Login successful. Welcome, ' + username + '!')
            break
        }
    }

    if (!userFound) {
        console.log('Incorrect username or password. Please try again.');
    }
}).catch(err => {
    console.error('Failed to import chalk:', err);
});
