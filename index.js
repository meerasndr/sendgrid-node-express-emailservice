const express = require('express')
const app = express()
const port = 3000

app.post('/', (req,res) => {
    res.send('Hello World')
    const sgMail = require('@sendgrid/mail')
    sgMail.setApiKey(process.env.SENDGRID_API_KEY)
    const msg = {
      to: 'abc@example.com', // Change to your recipient
      from: 'xyz@example.com', // Change to your verified sender
      subject: 'Discount price updated',
      text: 'The Playstation price just changed',
    }
    sgMail
      .send(msg)
      .then(() => {
        console.log('Email sent')
      })
      .catch((error) => {
        console.error(error)
      })
})
app.listen(port, () =>{
  console.log(`Email server running on port ${port}`)
})

