const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const cors = require('cors');
const mongoose = require('mongoose');
const morgan = require('morgan');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(helmet());
app.use(morgan('dev'));
app.use(cors());


mongoose.connect("mongodb+srv://sakshamrana0987654321:srana29@cluster0.m45m9.mongodb.net/ecommerce?retryWrites=true&w=majority");


app.get("/",function(req,res){
res.send("Home page");
});

const UserRoutes = require('./routes/user_route');
app.use('/api/user', UserRoutes);

const PORT = 5000;
app.listen(PORT, ()=>console.log(`server started at port ${PORT}`));

// Users -> Model class, routes and controllers