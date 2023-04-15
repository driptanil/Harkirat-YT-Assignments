/*
Setting Up Environment:
    1. `npm init` to initialize node js app
    2. `npm install express` to install express framework
    3. `npm install body-parser` to stop getting object as undefined
*/
const express = require("express");
// importing express package

const bodyParser = require("body-parser");
// import bodyParser package

const HOST = "localhost";
const PORT = 4000;
// declaring host, port for web server

const app = express();
// creating web server using express

app.use(bodyParser.urlencoded({ extended: false }));
// to avoid undefined while console.log() ing objects

app.use(express.json());
// to use request.body to receive object, we need to use `express.json()`

app.post("/api/max", async (request, response) => {
	const array = request.body.array;
	const max = Math.max(...array);
	response.status(201).json({
		array: array,
		maximum: max,
	});
});

app.listen(PORT, HOST, () => {
	console.log(`Server is working: http://${HOST}:${PORT}`);
});
