//Demo for creating a REST service. REST service is a web service that uses HTTP methods GET, PUT, POST and DELETE to transfer data from a source to the User in the form of JSON and XML. REST stands for representational State Transfer. The purpose of the REST service is to render data from a secured location to the requesters. HTTP is the protocol used to transfer the data. REST does not expect to transfer html pages. They are used to transfer representational data: data with some form of self-description. JSON and XML have data with self descriptive info in the form of fields and Tags respectively. 
 
const fs = require('fs');
 
const usr = {
    userName:"Jackson",
    userPhone:"9994884588",
    userEmail:"jack@gmail.com",
    userCity:"Banglore"
}//object in JavaScript....
 
//to transfer any object thro HTTP, we convert this object to JSON(JavaScript Object Notation).
/* const jsondata = JSON.stringify(usr);//Converts the object to a JSON format...
console.log(usr);
console.log(jsondata);
 */
 
 //Use the parse method to convert jsondata to an object...
 /*let jsonObj =' { "cstId" : "123", "cstName": "Ramesh", "cstAddress" : "Kolkata" }';
 
let data = JSON.parse(jsonObj);
console.log(data.cstId);
console.log(data.cstAddress);//to access individual data... */


 
class user{
    constructor(name, phone, email,city){
        this.userName = name;
        this.userPhone = phone;
        this.userEmail = email;
        this.userCity=city;
    }
}
 
let user = [];


let jsonData = JSON.stringify(user);
console.log(jsonData);
