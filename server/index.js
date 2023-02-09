const express = require('express');
const app = express();
const cors = require('cors');
const colors = require('colors');
const mongoose = require('mongoose');
const port = process.env.PORT || 5000;
require('dotenv').config();

// Add medialeware
app.use(cors());
app.use(express.json());

// get route
const RegisterRoute = require('./Routes/v1/Register.route');

// connect mongoose
mongoose
	.connect('mongodb://localhost:27017/', {
		useNewUrlParser: 'true',
	})
	.then((res) => console.log('Database Already Added Successfull!'.yellow.bold))
	.catch((err) => console.log(err));

app.get('/', (req, res) => {
	res.send(`<h1>How are you?</h1>`);
});

// call route
app.use('/api/v1/register', RegisterRoute);

app.use('*', (req, res) => {
	const { baseUrl } = req;

	res.send(`<h1>${baseUrl} Not Found!</h1>`);
});

app.listen(port, () => {
	console.log(`SSIB Bank Management Website Is Running: ${port}`.red.bold);
});
