const express = require('express')
const app = express()
const favicon = require('express-favicon')
const path = require('path')

const port = process.env.PORT || 1000

app.use(favicon(__dirname + '/build/favicon.ico'))

app.use(express.static(__dirname))
app.use(express.static(path.join(__dirname, 'build')))

app.use(express.static(__dirname + '.well-known', { dotfiles: 'allow' } ))

app.get('/*', function(req, res) {
	res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

app.listen(port, () => {
  console.log('Listening to port ' + port)
})