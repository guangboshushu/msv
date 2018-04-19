const express = require('express')
const app = express()
const sendMail = require('./mail/mail')
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: false
}))

app.post('/send_mail', (req, res) => {
  console.log(req.body)
  console.log(req.body.toUser)
  let toUser = req.body.toUser
  let content = req.body.content
  let subject = req.body.content
  sendMail(toUser, subject, content)
  res.send(req.query)
})


let port = 8181
app.listen(port, (req, res) => {
  console.log('-----------------------------------------------------------------------------------------------')
  console.log('|                               mail server is start, the port is : ' + port + '                            |')
  console.log('-----------------------------------------------------------------------------------------------')
})
