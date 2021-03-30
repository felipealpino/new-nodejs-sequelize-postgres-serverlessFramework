const app = require('./app') // recebe o app que está sendo exportado de app.js
require('dotenv').config({
    path:'variables.env' 
}) //definindo variables.env como o arquivo para acesso de process.env das variaveis de ambiente

app.set('port', process.env.PORT || 7777) //setando porta servidor na 7777
const server = app.listen(app.get('port'), () => { 
    console.log('Server is runnung on: '+server.address().port)
})