#!/usr/bin/env node
let inputArr = process.argv.slice(2);
let fs = require("fs");
let path = require("path");
let helpObj = require("./commands/help");
let organizeObj = require("./commands/organize")
let treeObj = require("./commands/tree")
// console.log(inputArr);
// node main.js tree "directoryPath"
// node main.js organize "directoryPath"
// node main.js help
let command = inputArr[0];
let types = {
    media: ["mp4","mkv",'jpg'],
    archives: ["zip","7z","rar","tar","gz","ar","iso","xz"],
    documents: ['docs' , 'doc' , 'pdf' , 'xlxs' , 'xls' , 'odt' , 'ods' , 'odp' , 'odg' , 'txt' , 'ps','pdf'],
    app:['exe' , 'dmg' , 'pkg' , 'deb']
}
switch (command) {
    case "tree": 
       treeObj.treeKey(inputArr[1]);    
        break;
    case "organize":  
       organizeObj.organizeKey(inputArr[1]);   
        break;
    case "help":
        helpObj.helpKey();     
        break;    

    default:
        console.log("Please 👏 input correct command ffs")
}





