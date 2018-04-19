
const express = require('express')
const app = express()
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })
app.post('/send_mail', urlencodedParser, function(req, res) {
  console.log(req.body)
  for let (obj of req.body) {
    console.log(obj)
  }
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
