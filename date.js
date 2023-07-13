//jshint esversion:6s
module.exports = getDate

function getDate(){

let today = new Date();
let currentDay = today.getDay();

let options = {
    weekday : "long",
    day : "numeric",
    month : "long"
}

return today.toLocaleDateString("en-US" , options);
return day;

}

//console.log(module.exports);