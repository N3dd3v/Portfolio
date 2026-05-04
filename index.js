const { render } = require('ejs');
const express = require('express');
const app = express();
app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.listen(5000,()=>{
    console.log('Server is running on port 5000');
});

app.get('/',(req,res)=>{
    res.render('index', {title: 'Home Page'});
});     

