const express = require('express')
const cors = require('cors')
const {MongoClient} = require('mongodb')

const app=express()
app.use(cors())
app.use(express.json())

const client = new MongoClient("mongodb+srv://admin:<adminu>@cluster.czh0zpb.mongodb.net/?retryWrites=true&w=majority")
client.connect()
const db = client.db('councelling2')
const col = db.collection('register')
col.insertOne({'student':"231"})

app.post('/register',(req,res)=>{
    col.insertOne(req.body)
    console.log(req.body)
    res.send("data inserted sucesfuly ")

})



app.get('/',(req,res)=>{
    res.send('<h1> Hello Klu </h1>')
})

app.get('/about',(req,res)=>{
    res.send('<h1> This is About Balayya </h1>')
})

app.get('/Contact ',(req,res)=>{
    res.send('<h1>  This is Contact Page </h1>')
})

app.listen(8080,()=>{console.log('Express server is running ')})