
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
  res.send('-------------')
})

// const express = require('express')
// const app = express()
// const sendMail = require('./mail/mail')
// const multipart = require('connect-multiparty')
//
// const bodyParser = require('body-parser')
// const urlencodedParser = bodyParser.urlencoded({ extended: false })
//
// app.use(multipart())
//
// app.use(bodyParser.json())
// // app.use(bodyParser.urlencoded({
// //   extended: false
// // }))
//
// app.post('/send_mail', urlencodedParser, (req, res) => {
//   console.log('body', req.body)
//   let toUser = req.body.toUser
//   let content = req.body.content
//   let subject = req.body.subject
//   sendMail(toUser, subject, content)
//   res.send(req.body)
// })
//
//
let port = 8181
app.listen(port, (req, res) => {
  console.log('-----------------------------------------------------------------------------------------------')
  console.log('|                               mail server is start, the port is : ' + port + '                            |')
  console.log('-----------------------------------------------------------------------------------------------')
})
