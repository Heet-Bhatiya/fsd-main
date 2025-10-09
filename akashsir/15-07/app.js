
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/home', (req, res) => {
  res.sendFile(__dirname+'/home.html')
})
app.get('/about', (req, res) => {
  res.sendFile(__dirname+'/about.html')
})

app.get('/sum', (req, res) => {
  res.sendFile(__dirname+'/sumdemo.html')
})
app.get('/sumprocess',(req,res)=>{
  var a=req.query.text1
  var b=req.query.text2
  var c= parseInt(a)+parseInt(b)
  res.send(`A value is ${a} <br/> b vlaue is ${b} <br/> sum is ${c}`)
})
app.get('/cake/surat', (req, res) => {
  res.send('hello surat')
})
app.get('/product/:id/:id1', (req, res) => {
  var id =req.params.id
  var id1 = req.params.id1
  res.send('Parameter Value is '+id+id1)//http://localhost:3000/Product/1/2
})
app.get('/search', (req, res) => {
  var qq =req.query.q//search/?q=iphone write is 
 
  res.send('QureyString Value is '+qq)
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.use(express.static('public'))

app.set('views',__dirname+'/views')
app.set('view engine','ejs')

app.get('/homepage',(req,res)=>{
  res.render('home',{"mya":"Jagdish"})
})
app.use(express.urlencoded())

app.get('/markshhet',(req,res)=>{
  res.render('markshhet')
})

app.post('/markshhetprocess',(req,res)=>{
  var a=req.body.txt1
    var b=req.body.txt2
      var c=parseInt(a)+parseInt(b)
      res.render('ans',{'mya':a,'myb':b,'myc':c})
})
