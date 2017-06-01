var express = require("express");
var  app = express();
var bodyParser=require("body-parser");

app.use(express.static("public"));

app.listen(8080, function() {
		console.log("📞http://localhost:8080");
	});