// node js start
var  http=require('http')
var a=100
var b=20
var c=a+b
var msg=''
if(c==30){
    msg="C value is 30"
}
else{
    msg="C value is not 30"
}

http.createServer(function(req,res){
    res.writeHead(200,{'content-type':'text/html'})
    res.write("hello this is my  first write first node js code")
    res.write("<b> this is B tag</b>")
    res.write(`<br>a value is ${a} b value is ${b} sum is ${a+b} </br>`)
    res.write(msg)
    res.end("<br/>bye")

}).listen(5000)// if port is busy change port 
console.log("server started http://127.0.0.1:5000");

