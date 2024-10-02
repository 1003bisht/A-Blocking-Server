const express=require('express');
const os=require('os');
const app=express();
function delay(duration){
    const startTime=Date.now();
    while(Date.now()-startTime<duration){

    }
}
app.get('/', (req, res)=>{
    JSON.stringify({})
    JSON.parse()
        res.send(`Performance Example${process.pid}`);
    })
app.get('/timer',(req,res)=>{
    delay(3000);
    res.send(`tring tring tring! ${process.pid}`);
})
console.log('Running Server.js...')
console.log('Worker started');
    const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)});

