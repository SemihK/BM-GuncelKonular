const express = require("express");

const app = express();


//app.get("/", (req,res)=> {

  //  res.send("hello-merhaba--hiiii");
    //res.end
    //send() 
//})

//app.get("/" ,(req,res)=> {
 //   res.sendFile('./view/test.html', {root:__dirname})
//})
//app.get("/users/:id" ,(req,res)=> {
  // res.status(200).send(`<h1>users ID:${req.params.id}<h1>`)
   //})

   //.....
app.use(express.json());

   const express =[
       {id:1 ,name :'fizik'},
       {id:2 ,name :'kimya'},
       {id:3 ,name :'math'},

   ]
   app.get("/api/express:id" ,(req,res)=> {
       
    res.send(test22);
     })
  





app.listen(3000,() => console.log("server running")) 

