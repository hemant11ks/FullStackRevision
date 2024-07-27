
const express = require('express')
// All express abilty is stored in app variable
const app = express()

// app.get() -> Used to set the route and request handler
// requestHandler is a middleware (middleware is a layer between request and response)
// app.get(route, requestHandler)

//app.use() // it is used to run always before a request
app.use(function(req, res, next){
    console.log("I am middleware... I will run first before sending request to Route")
    // If we dont use next() it will starting loading and will not go to route
    next(); 
})
app.use(function(req, res, next){
    console.log("I am second middleware... I will run first before sending request to Route")
   
    next(); // Moving forward to route
})
 
app.get('/', function (req, res) {
  res.send("This is the Home page")
})
// app.get('/profile', function (req, res) {
//     res.send("This is the Profile page")
// })

// Modifying profile route for error handling
app.get('/profile', function (req, res) {
    // This will print at the console
     return next(new Error("Not implemented")); // go the default error handling block
})

app.use((err, req, res, next)=>{
    console.error(err.stack)
    res.status(500).send('Something broke') // This will go to frontend
})
  
 // ERROR Handlers will also put at the end 

app.listen(3000)

// Middleware:
/* 
Picture (Facebook)-> Middle ware -> Routes | Response

Middleware is first point of contact before Routes
It is use to do small work before it goes to route like print "Hello" before the route

Jab bhi server reqeust accept krta h vha se route tk pohchna tk us request ko rokar
kuch bich p perform krte ho.

Like using middleware we pass user detail to the route
*/