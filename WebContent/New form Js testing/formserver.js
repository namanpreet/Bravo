var http=require("http");
var fs=require("fs")


http.createServer(function(req,res)
{
if(req.method==="GET")
{
res.writeHead(200,{"Content-type":"text/html"});
fs.createReadStream("./public/form.html","UTF-8").pipe(res);

}
else if(req.method==="POST"){
	var data="";
	req.on("data",function(chunk){
		body+=chunk;
	});
	req.on("end",function(){
		res.writeHead(200,{"Content-type":"text/html"});
		res.end("SUCCESS");
})
}}).listen(3001);