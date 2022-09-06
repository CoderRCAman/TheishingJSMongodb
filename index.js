const express = require('express') ; 
const mongoose = require('mongoose')
const app = express() ; 

const PORT = 5000 

//routes
const userRoutes = require('./routes/userRoutes') ;

//middlewares   


app.use(express.json()) ;   
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'))

//link ejs to node application  
app.set('view engine' , 'ejs') ; 

app.use('/' , userRoutes ) ;
/* 
  Dog dogobject = new Dog ()  
  
  {
    name : 'hi' 
    age : 20 
  } 
      ^
  JSON format 
*/
//start the server 

app.listen(PORT , () => {
    console.log(`Server is up and running on port  ${PORT}`)
}) 

//connection to the DATABASE  
mongoose.connect('mongodb+srv://Theishingkhui:Theishing224@cluster0.kw1hwdx.mongodb.net/?retryWrites=true&w=majority') //asynchronous
.then((success) => {
    console.log("Database was connected successfully!")
})
.catch((error)=> { 
    console.log('This ran=>')
     console.log(error)
})