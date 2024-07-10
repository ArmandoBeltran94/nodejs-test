require('dotenv').config();
const express = require('express')
const app = express()
const port = process.env.PORT || '3000';


app.use(express.json());

app.get('/', (req, res) => {
  res.send('Technical Test for Mid-Level Node.js Backend Developers')
})

app.get('/health', (req, res) =>{
    const date = new Date()
    res.send({
        "status": "OK",
        "timestamp": date
    })
})

app.post('/users', (req, res) =>{
    const body = req.body;
    const {name, email, password} = body
    if (!name) {
        res.status(403)
        res.send({error : 'Nombre Vacion'})
    }
    if (!email) {
        res.status(403)
        res.send({error : 'Email Vacion'})
    }
    if (!password) {
        res.status(403)
        res.send({error : 'Contraseña Vacia'})
    }
    
    res.send(body)
})

app.get('/users/:id', (req, res) =>{
    const userId = req.params.id;

    const users = [{
        "id": "123",
        "name": "John Doe",
        "email": "john.doe@example.com"
    }]

    const findUser = users.find( usr => usr.id === userId)

    if(!findUser) res.status(404).send({error : 'Usuario no encontrado'})

    res.send(findUser)
})

app.listen(port, () => {
  console.log(`Example app listening on port  ${process.env.BASE_URL}:`+`${port}`)
})
