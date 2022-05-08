require('dotenv').config()
const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());
const path = require("path")

app.get('/', (req, res) => {res.sendFile(path.join(__dirname + '/public/index.html'))})

// app.get()

app.use(express.static('../public'))
app.use('/styles.css', express.static(__dirname + '/public/styles.css'))
app.use('/addMushroom.js', express.static(__dirname + '/public/addMushroom.js'))
app.use('/viewMushroom.js', express.static(__dirname + '/public/viewMushroom.js'))
// app.use('/deepai.min.js', express.static(__dirname + '/public/deepai.min.js'))

const {
  addMushroom,
  deleteMushroom,
  getMushroom
} = require('./controller')


app.post("/api/public/addMushroom", addMushroom)
app.delete("/api/public/viewMushrooms/:id", deleteMushroom)
app.get("/api/public/addMushroom", getMushroom)

const port = process.env.PORT || 5503

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})