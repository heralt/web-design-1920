const express = require('express');
const app = express();
const http = require('http').Server(app);

app.set('view engine', 'ejs');

app.use(express.static('static'));

app.get('/', (req,res) => {
    res.render('index');
});

const server = http.listen(process.env.PORT || 3000);