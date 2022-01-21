const inquirer = require('inquirer')
const fs = require('fs');




inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?',
        },
        {
            type: 'input',
            name: 'city',
            message: 'Where are you from?',
        }, 
        {
            type: 'input',
            name: 'github',
            message: 'What is your Github username?',
        }, 
        {
            type: 'input',
            name: 'linkedin',
            message: 'What is your LinkedIn URL?',
        }, 
    ])
    .then((response)=> {
        const newHTML =
        `<!DOCTYPE html>
        <html lang="en">
        <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Mini Proj</title>
        </head>
        <body style="background: linear-gradient(15deg, seagreen, lightseagreen); justify-content:center; align-text:center; font-family:monospace;">
        <div style="background-color: wheat; border-radius: 10px; width: 50vw; margin-left:25vw; margin-right:25vw; height:20vh; margin-top: 15vh;">
            <h1 style="text-align: center; font-size:3rem;">My name is ${response.name}</h1>
            <p style="text-align: center; font-size:2rem;">I am from ${response.city}</p>
        </div>
        <div style="background-color: wheat; border-radius: 10px; width: 50vw; margin-left:25vw; margin-right:25vw; height:30vh;">
            <h2 style="text-align: center; font-size:2rem;">Contact Me</h2>
            <div style="justify-content:center; text-align:center; font-size:1rem;">
                <a href="https://www.github.com/${response.github}/">My Github can be accessed here</a>
            </div>
            <div style="justify-content:center; text-align:center; font-size:1rem;">
                <a href="${response.linkedin}">My LinkedIn can be accessed here</a>
            </div>
        </div>
        
        </body>
        </html>`;

        fs.writeFile('index.html', newHTML, (err) =>
        err ? console.error(err) : console.log('new HTML file created')
        );
    })