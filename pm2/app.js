const cluster = require('cluster');
const express = require('express');
const app = express();
const crypto = require("crypto");

app.get("/", (req, res) => {
	crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
		console.log("worker:",cluster.worker.id); 
		res.send('Hi There');
	});
});
app.get("/fast", (req, res) => {
	res.send("Hello");
});

app.listen(3000, () => { 
	console.log("server is started");
});
