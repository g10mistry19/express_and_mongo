const express = require('express')
const app = express()
const port = 6969
app.use(express.static("public"))
app.get('/',(req,res) => {
    res.sendFile(__dirname + '/home.html')
})
app.get('/home',(req,res)=> {
    res.sendFile(__dirname + '/home.html')
})
app.get('/contactme',(req,res)=> {
    res.sendFile(__dirname + '/contactme.html')
    
})
app.get('/about',(req,res)=> {
    res.sendFile(__dirname + '/about.html')
})
app.get('/process',(req,res)=>{
    var no1 = req.query.txt1;
    var no2 = req.query.txt2;
    var c = parseInt(no1) + parseInt(no2);
    res.send('The sum of the two numbers is ' + c)
})
app.listen(port,() => {
    console.log(`Example app is listening on port ${port} on http://127.0.0.1:6969`)
})