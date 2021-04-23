const { json } = require('express');
const express = require('express');
const fs = require('fs');
const path = require('path');
const data = require('./db/db.json')

const app = express();
const PORT = process.env.PORT || 3000;



app.use(express.urlencoded({ extended: true}))
app.use(express.json());

app.use(express.static('public'));

// Routes

//Basic route that sends the user first to the note page
app.get('/', (req, res) => res.sendFile(path.join(__dirname, './public/index.html')));
app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, './public/notes.html')));

app.get('/api/notes', (req, res) => res.json(data));

app.post('/api/notes', (req, res) => {
notesData = fs.readFileSync(data);
notesData.push(req.body);
notesData =JSON.stringify(notesData);
fs.writeFile(data, notesData)})

app.get('*', (req, res) => res.sendFile(path.join(__dirname, './public/index.html')));



app.listen(PORT, () => console.log('App listening on PORT ${PORT}'));