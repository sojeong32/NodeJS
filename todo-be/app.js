const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')
const indexRouter = require('./routes/index')

const app = express()
app.use(bodyParser.json())
app.use(cors())
app.use('/api',indexRouter)

const mongoURI = `mongodb://localhost:27017/todo-demo`


// useNewUrlParser: mongodb주소가 옛날형식의 url말고도 요즘형식의 url도 잘 쓰게 도와달라는 것
mongoose.connect(mongoURI,{useNewUrlParser:true}).then(()=>{
    console.log('mongoose connected');
}).catch((err)=> {
    console.log('DB connection fail', err);
});

app.listen(5000,()=>{
    console.log('server on 5000')
})