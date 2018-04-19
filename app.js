const express = require('express')
const app = express()
const sendMail = require('./mail/mail')


app.post('/send_mail', (req, res) => {
  console.log(req.body)
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
