const inquirer = require('inquirer');
const jest = require('jest');
const fs = require('fs');
const managerInfo = require('./lib/Manager');
const internInfo = require('./lib/Intern');
const engineerInfo = require('./lib/Engineer');
const ManagerInfo = require('./lib/Manager');

EngineerTeam = [];
InternTeam = [];
managerAnswers = [];
let finalEngineer = "";
let finalIntern = "";
let finalManager = "";

// Manager Prompts

const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'managerName',
            message: `What is the team manager's name?`,
        },
        {
            type: 'input',
            name: 'managerID',
            message: `What is the team manager's id?`,
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: `What is the team manager's Email?`,
        },
        {
            type: 'input',
            name: 'managerOffice',
            message: `What is the team manager's office number?`,
        },
    ])
        .then((managerData) => {
            managerAnswers.push(managerData)

            let managerHtml =
                `    <div class="card col2" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">${managerAnswers[0].managerName}</h5>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">ID: ${managerAnswers[0].managerID}</li>
              <li class="list-group-item">Email: <a href="${managerAnswers[0].managerEmail}">${managerAnswers[0].managerEmail}</a></li>
              <li class="list-group-item">Office Number: ${managerAnswers[0].managerOffice}</li>
            </ul>
            </div>`

            finalManager += managerHtml;

            console.log(finalManager)


        })
}

//Engineer and Inter choices switch case

function userChoice() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'members',
            message: 'Which type of team member would you like to add?',
            choices: ['Engineer', 'Intern', 'None'],
        }
    ]).then(data => {
        switch (data.members) {
            case 'Engineer':
                engineer()
                    .then((engineerData) => {
                        EngineerTeam.push(engineerData)


                        for (let i = 0; i < EngineerTeam.length; i++) {

                            let engineerCard = `<div class="card col2" style="width: 18rem;">
                            <div class="card-body">
                              <h5 class="card-title">${EngineerTeam[i].engineerName}</h5>
                            </div>
                            <ul class="list-group list-group-flush">
                            <li class="list-group-item">ID: ${EngineerTeam[i].engineerID}</li>
                            <li class="list-group-item">Email: <a href="mailto:${EngineerTeam[i].engineerEmail}">${EngineerTeam[i].engineerEmail}</a></li>
                              <li class="list-group-item">Github: <a href="${EngineerTeam[i].engineerGit}">${EngineerTeam[i].engineerGit}</a></li>
                            </ul>
                            </div>`
                            finalEngineer += engineerCard;
                        }


                        userChoice()
                        // console.log(finalEngineer)
                    })
                break;

            case 'Intern':
                intern()
                    .then((internData) => {
                        InternTeam.push(internData)

                        for (let i = 0; i < InternTeam.length; i++) {

                            let internCard = `    <div class="card col2" style="width: 18rem;">
                            <div class="card-body">
                              <h5 class="card-title">${InternTeam[i].internName}</h5>
                            </div>
                            <ul class="list-group list-group-flush">
                              <li class="list-group-item">ID: ${InternTeam[i].internID}</li>
                              <li class="list-group-item">Email: <a href="mailto:${InternTeam[i].internEmail}"></a>${InternTeam[i].internEmail}</li>
                              <li class="list-group-item">School: ${InternTeam[i].internSchool}</li>
                            </ul>
                            </div>`
                            finalIntern += internCard;

                        }
                        userChoice()
                    })
                break;

            default:
                console.log(`create team`)
                generateHtml()
        }
    })
}

//Engineer Questions

const engineer = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'engineerName',
            message: `what is the engineer's name?`,
        },
        {
            type: 'input',
            name: 'engineerID',
            message: `what is the engineer's ID?`,
        },
        {
            type: 'input',
            name: 'engineerEmail',
            message: `what is the engineer's Email?`,
        },
        {
            type: 'input',
            name: 'engineerGit',
            message: `What is your engineer's Github username?`,
        },
    ])
}

//Intern Questions

const intern = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'internName',
            message: `what is the intern's name?`,
        },
        {
            type: 'input',
            name: 'internID',
            message: `What is the intern's ID?`
        },
        {
            type: 'input',
            name: 'internEmail',
            message: `what is the intern's email?`,
        },
        {
            type: 'input',
            name: 'internSchool',
            message: `what is the intern's school?`,
        },
    ])
}

//Engineer Card

// for (let i = 0; i < EngineerTeam.length; i++) {

//     let engineerCard = `<div class="card col2" style="width: 18rem;">
//     <div class="card-body">
//       <h5 class="card-title">${EngineerTeam[i].engineerName}</h5>
//     </div>
//     <ul class="list-group list-group-flush">
//     <li class="list-group-item">ID: ${EngineerTeam[i].engineerID}</li>
//     <li class="list-group-item">Email: <a href="mailto:${EngineerTeam[i].engineerEmail}">${EngineerTeam[i].engineerEmail}</a></li>
//       <li class="list-group-item">Github: <a href="${EngineerTeam[i].engineerGit}">${EngineerTeam[i].engineerGit}</a></li>
//     </ul>
//     </div>`
//     finalEngineer += engineerCard;
// }

//Intern Card

// for (let i = 0; i < InternTeam.length; i++) {

//     let internCard = `    <div class="card col2" style="width: 18rem;">
//     <div class="card-body">
//       <h5 class="card-title">${InternTeam[i].internName}</h5>
//     </div>
//     <ul class="list-group list-group-flush">
//       <li class="list-group-item">ID: ${InternTeam[i].internID}</li>
//       <li class="list-group-item">Email: <a href="mailto:${InternTeam[i].internEmail}</a>${InternTeam[i].internEmail}</li>
//       <li class="list-group-item">School: ${InternTeam[i].internSchool}</li>
//     </ul>
//     </div>`
//     finalIntern += internCard;

// }


//Manager Card

// let managerHtml = () => {
//     `    <div class="card col2" style="width: 18rem;">
//     <div class="card-body">
//       <h5 class="card-title">${managerAnswers[0].managerName}</h5>
//     </div>
//     <ul class="list-group list-group-flush">
//       <li class="list-group-item">ID: ${managerAnswers[0].managerID}</li>
//       <li class="list-group-item">Email: <a href="${managerAnswers[0].managerEmail}">${managerAnswers[0].managerEmail}</a></li>
//       <li class="list-group-item">Office Number: ${managerAnswers[0].managerOffice}</li>
//     </ul>
//     <div class="card-body">
//       <a href="#" class="card-link">Card link</a>
//       <a href="#" class="card-link">Another link</a>
//     </div>
//     </div>`

// }



//Html Code

let html = () => {
    return `<!DOCTYPE html>
    <html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-wEmeIV1mKuiNpC+IOBjI7aAzPcEZeedi5yW5f2yOq55WWLwNGmvvx4Um1vskeMj0" crossorigin="anonymous">
    <link rel="stylesheet" href="./syle.css">
    <title>Team Profile Generator</title>
</head>
<body>
    <div>
        <header>
            <h1>My Team</h1>
        </header>
    </div>

    <div class = "container">
    ${finalManager}
    ${finalEngineer}
    ${finalIntern}
    </div>

    
</body>
</html>`
}


// Website Generator code

const generateHtml = () => {
    fs.writeFileSync("website.html", html(), (err) => {
        console.log("Error: ", err)
    })
};






const init = () => {
    questions()
        .then(() => {
            userChoice()
        })
}

init();
