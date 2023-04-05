const fs = require("fs");

const path = require("path");

const noteJsonDir = path.resolve(__dirname, "./note.json");

const noteJson = fs.readFileSync(noteJsonDir, "utf-8");

const note = JSON.parse(noteJson)
console.log(note);

const newNote = {
    "title": "My seventh note",
        "body":"This is my seventh Note"
};const newNote2 = {
    "title": "My eighth note",
        "body":"This is my eight Note"
};


note.push(newNote);
note.push(newNote2)
console.log(note);

note.map((note)=>{
    console.log(i, note.title,note.body)
})
const noteReady = JSON.stringify(note)

fs.writeFileSync(noteJsonDir, noteReady)