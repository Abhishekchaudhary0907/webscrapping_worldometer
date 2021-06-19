const request = require('postman-request');
const cheerio = require('cheerio');
const chalk = require('chalk');

console.log(chalk.bold("This is web scrapping project"))
request("https://www.worldometers.info/coronavirus",cb);


function cb(err, res, html){
    if(err){
        return console.log(err);
    }
    handlehtml(html);
}

function handlehtml(html){
    const selectorTool = cheerio.load(html);
    const contentArr = selectorTool('#margincounter-wrap , .maincounter-number');
    let total_cases = selectorTool(contentArr[0]).text(); 
    let death = selectorTool(contentArr[1]).text();
    let recover = selectorTool(contentArr[2]).text();

    console.log(chalk.gray("total_cases " ,total_cases))
    console.log(chalk.red("death " ,death))
    console.log(chalk.green("recovery " ,recover))
}