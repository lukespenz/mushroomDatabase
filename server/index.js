const express = require("express");
// const cors = require("cors");

const app = express();

app.use(express.json());
// app.use(cors());

app.use(express.static('../public'))
app.use('/styles.css', express.static(__dirname + '../public/styles.css'))
app.use('/index.js', express.static(__dirname + '../public/index.js'))
app.use('/deepai.min.js', express.static(__dirname + '../public/deepai.min.js'))

app.get('', (req, res) => {res.sendFile(__dirname + '../public/index.html')})

const port = 5503 //|| process.env.PORT

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})