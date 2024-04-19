const express=require('express');
const ejsMate=require('ejs-mate');
const path=require('path');
const user=require('./model/user.js')
const methodOverride=require('method-override')
const app= express()
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1/my_database')
.then(async()=>{
    console.log('Mongoose Open')
})
.catch(e=>{
    console.log('Not Conected')
    console.log(e)
})

app.engine('ejs',ejsMate)
app.set('view engine','ejs')
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname,'public')))
app.use(methodOverride('__method'))
app.set('views',path.join(__dirname,'views'))



app.get('/',(req,res)=>{
    res.render('p')
})
app.get('/predictor',(req,res)=>{
    res.render('predictor')
})
app.get('/output/:id',async (req,res)=>{
    const use=await user.findById(req.params.id)
    res.render('output',{use})
})
app.post('/predictor',async(req,res)=>{
    const userDetail = new user(req.body)
    await userDetail.save()
    res.redirect(`/output/${userDetail._id}`)
})

app.get('/courses',(req,res)=>{
    res.render('courses')
})

app.get('/courses/it',(req,res)=>{
    res.render('IT')
})

app.get('/courses/civil',(req,res)=>{
    res.render('civil')
})

app.get('/courses/electronics',(req,res)=>{
    res.render('electronics')
})

app.get('/courses/comps',(req,res)=>{
    res.render('comps')
})

app.get('/courses/E&T',(req,res)=>{
    res.render('E&T')
})

app.get('/courses/AI',(req,res)=>{
    res.render('AI')
})

app.get('/contact',(req,res)=>{
    res.render('contact')
})

app.get('/index',(req,res)=>{
    res.render('index')
})

app.get('/Lo',(req,res)=>{
    res.render('Lo')
})


app.get('/Lo//',(req,res)=>{
    res.render('/')
})

app.get('/About',(req,res)=>{
    res.render('About')
})





app.get('/predictor',(req,res)=>{
    res.render('predictor')
})

app.listen(3333,()=>{
    console.log('conected')
})