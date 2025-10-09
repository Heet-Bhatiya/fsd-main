var http=require('http')
var fs=require('fs')

http.createServer((req,res)=>{
    //read file
    fs.readFile("demo.html",'utf-8',function(err,data){
        console.log(data)
        res.end(data)
    })
}).listen(4001)

console.log("Server Started on http://127.0.0.1:4001");
