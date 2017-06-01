var express = require("express");
var bodyParser =require("body-parser");
var  app = express();

app.use(express.static("public"));

app.listen(8080, function() {
		console.log("📞http://localhost:8080");
	});