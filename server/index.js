const express = require('express')
const path = require('path')
const app = express()

app.use(express.static('../public'))
app.use('/styles.css', express.static(__dirname + '../public/styles.css'))
app.use('/index.js', express.static(__dirname + '../public/index.js'))
app.use('/deepai.min.js', express.static(__dirname + '../public/deepai.min.js'))

app.get('', (req, res) => {res.sendFile(__dirname + '../public/index.html')})

const port = process.env.PORT || 3005

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})