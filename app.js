const express = require('express');
const path = require('path')
const app= express();
const Port = 3000 ;

app.get('/',(req,res)=>{
// console.log(req)
res.sendfile(path.join(__dirname,'index.html') );
});
app.get('/grettings',(req, res)=>{
    res.send('hey, good day') 
});

app.get("/greet/:name", (req, res) => {
    console.log(req.params);
    res.send(`aur , kya hal chal hai? ${req.params.name}`);
});

app.get('/bye', (req, res)=>{
    res.send(`aur, chalo milte hai badd mei ${req.query.name} from ${req.query.city}`)
});


app.listen(Port);//this will start a server 
