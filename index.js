const inquirer = require("inquirer");
var letterArray = "abcdefghijklmnopqrstuvwxyz";
//stored user input

inquirer
  .prompt([
    {
      type: "input",
      message: "Guess a letter!",
      name: "userinput"
    }
  ])
  .then(function(input) {
    //  if()
  });
