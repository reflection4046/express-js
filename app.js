const express = require('express');
const app= express();


app.get('/',(req,res)=>{
    res.send(' I am a get request at  home route');
    req.end();
});

app.post('/',(req,res)=>{
    res.send(' I am post request at  about route');
    req.end();
});
app.put('/',(req,res)=>{
    res.send(' I am put request at  about route');
    req.end();
});
app.delete('/',(req,res)=>{
    res.send(' I am delete request at  about route');
    req.end();
});



module.exports =app;