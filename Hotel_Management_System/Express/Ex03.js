const app = require('express')();
const parser = require("body-parser");
const fs = require("fs");
const dir = __dirname;

//middleware....
app.use(parser.urlencoded({ extended: true }));
app.use(parser.json());

//GET(Reading), POST(Adding), PUT(Updating), DELETE(Deleting) data....
let user = []; //blank array...
let flag = 1;

function readData() {
    const filename = "data.json"; //new file... 
    const jsonContent = fs.readFileSync(filename, 'utf-8');
    user = JSON.parse(jsonContent);
}

function saveData() {
    const filename = "data.json";
    const jsonData = JSON.stringify(user);
    fs.writeFileSync(filename, jsonData, 'utf-8');
}
