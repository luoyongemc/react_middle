const express = require('express');
const bodyParser = require('body-parser');
const user = require('./routes/user');

const app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use('/api',user);

app.listen(3000,() => {
    console.log('服务器在3000端口启动');
})