#!/usr/bin/env node

const yargs = require("yargs");
yargs.version("v1.0.0-alpha");

const fs = require("fs");
const path = require("path");

const noteJsonDir = path.resolve(__dirname, "./note.json")

yargs.command({
    command: "add",
    describe: "Add a new Note",
    builder: {
        id: {
            describe: "note Id",
            demandOption: true,
            type: "number"
        },
        title: {
            describe: "Note Title",
            demandOption: true,
            type: "strings"
        },
        body: {
            describe: "The Note Body",
            demandOption: true,
            type: "strings"
        },
    },
    handler: function (argv) {
        console.log(argv.id);
        console.log(argv.title);
        console.log(argv.body)
        // console.log(`successfully deleted ${title}`); 

        const noteJson = fs.readFileSync(noteJsonDir, "utf-8");
        const notes = JSON.parse(noteJson);
        const newNotes = {
            id: argv.id,
            title: argv.title,
            body: argv.body
        }
        notes.push(newNotes)
        const updateNotes = JSON.stringify(notes);
        fs.writeFileSync(noteJsonDir, updateNotes);
        console.log(`successfully added ${argv.id}`);
        console.log(`successfully added ${argv.title}`)
    },
});

yargs.command({
    command: "Remove",
    describe: "Remove Note",
    builder: {
        title: {
            describe: "Note Title",
            demandOption: true,
            type: "strings"
        },

    },
    handler: function (argv) {
        console.log(argv.title);
        // console.log(argv.body);
        note.filter((notes) => { notes.id !== id })
        // console.log(`successfully deleted ${title}`); 

        const noteJson = fs.readFileSync(noteJsonDir, "utf-8");
        const notes = JSON.parse(noteJson);
        const newNotes = {
            id: argv.id,
            title: argv.title,
            body: argv.body
        }
        notes.push(newNotes)
        const updateNotes = JSON.stringify(notes);
        fs.writeFileSync(noteJsonDir, updateNotes);
        console.log(`successfully added ${argv.id}`)
        console.log(`successfully added ${argv.title}`)
    }

});

yargs.parse();





