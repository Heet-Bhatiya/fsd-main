var http=require('http')
http.createServer((req,res)=>{
    if(req.url == '/home'){
        res.end("<h1>this home page</h1>")
    }
    else if(req.url == '/about'){
        res.end("<h1>this about page</h1>")
    }
  else{
        res.end("<h1>this welcome page</h1>")
    }
}).listen(4000)

console.log("Servarev Started http://127.0.0.1:4000");
