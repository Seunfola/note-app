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
    handler(argv) {
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
    handler(argv) {
        console.log(argv.title);
        // console.log(argv.body);
        notes = notes.filter((note) => { note.id !== id })
        // console.log(`successfully deleted ${title}`); 

        const noteJson = fs.readFileSync(noteJsonDir, "utf-8");
        const notes = JSON.parse(noteJson);
        const newNotes = {
            id: argv.id,
            title: argv.title,
            body: argv.body
        }
        const note = notes.push(newNotes)
        const updateNotes = JSON.stringify(notes);
        fs.writeFileSync(noteJsonDir, updateNotes);
        if (note) {
            console.log(`${note.title
                }.${note.body}`)
        } else {
            console.log(`Note with the ${note.title
                } ${note.body}not Found`)
        }

    }
}

);
yargs.command({
    command: "List",
    describe: "List Note",


    handler(argv) {

        const noteJson = fs.readFileSync(noteJsonDir, "utf-8");
        const notes = JSON.parse(noteJson);
        notes.map((note, i) => {
            console.log(`${i + 1}. ${note.title}
    "${note.body}`)
        })
    }
});
yargs.command({
    command: "Read",
    describe: "Remove Note",
    builder: {
        title: {
            describe: "Note Title",
            demandOption: true,
            type: "strings"
        },

    },
    handler(argv) {
        const title = argv.title;
        const noteJson = fs.readFileSync(noteJsonDir, "utf-8");
        const notes = JSON.parse(noteJson);
        const note = notes.find((note) => note.title === title);

        if (note) {
            console.log(`${note.title
                }. ${note.body}`)
        } else {
            console.log(`Note with the ${note.title
                }not Found`)
        }

    }
})
yargs.parse();





