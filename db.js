//conexion a base de datos
const mongoose = require('mongoose')

const user = 'nodeTest'
const password = 'S9F9UVKMQCz8Aqa9'
const bdname = 'prueba'
const uri = `mongodb+srv://${user}:${password}@cluster0.mmhu5rf.mongodb.net/${bdname}?retryWrites=true&w=majority&appName=Cluster0`

mongoose.connect(uri)
    .then(() => console.log('Database connected successfully'))
    .catch(e => console.log(e))

module.exports = mongoose;