var http=require("http");
var fs=require("fs")


http.createServer(function(req,res)
{
if(req.method==="GET")
{
res.writeHead(200,{"Content-type":"text/html"});
fs.createReadStream(".index.html","UTF-8").pipe(res);

}
else if(req.method==="POST"){
	var data="";
	req.on("data",function(chunk){
	});
	req.on("end",function(){
		res.writeHead(200,{"Content-type":"text/html"});
		res.end('success');
		res.writehead(200,{"Content-type":"text/html"});
		
})
}}).listen(3001);