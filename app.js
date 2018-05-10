
const express = require('express')
const app = express()
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })
const sendMail = require('./mail/mail')

app.post('/send_mail', urlencodedParser, function(req, res) {
  let body = Object.keys(req.body)
  let mail = JSON.parse((body[0]))
     let toUser = mail.toUser
     let content = mail.content
     let subject = mail.subject
     sendMail(toUser, subject, content)
     res.send('success')
})

let port = 8181
app.listen(port, (req, res) => {
  console.log('-----------------------------------------------------------------------------------------------')
  console.log('|                               mail server is start, the port is : ' + port + '                            |')
  console.log('-----------------------------------------------------------------------------------------------')
})
