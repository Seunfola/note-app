#!/usr/bin/env node

const yargs = require("yargs");

yargs.version ("v1.0.0-alpha");

yargs.command({
    command: "add",
    describe:"Add a new Note",
    builder:{
    title:{
       describe: "Note Title",
       demandOption: true,
       type: "strings" 
        }, 
        body:{
       describe: "The Note Body",
       demandOption: true,
       type: "strings" 
        },   
    },
    handler: function(argv){
        console.log(argv.title);
        console.log(argv.body);
    } ,   
    });

    yargs.command({
    command: "Remove",
    describe:"Remove Note",
    builder:{
    title:{
       describe: "Note Title",
       demandOption: true,
       type: "strings" 
        }, 
         
    },
    handler: function(argv){
        const title =argv.title
console.log(`successfully deleted ${title}`);       
    } ,   
    });
    
    yargs.parse()
    
    
    


