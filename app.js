const express = require('express');
//const router = express.Router();
const app= express();
const userRouter = require('./routes/users.route')

app.use("/api/user", userRouter);

app.get('/',(req,res)=>{
    res.send(' I am a get request at  home route');
    
});


app.use((req,res)=>{
    res.send('<h1>404!!! not a valid url</h1>');
});


module.exports =app;