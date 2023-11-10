//import json-server library in index.js file

const jsonServer= require('json-server')

//create server using json-server library
const mediaPlayerServer= jsonServer.create()

//create a path to db.json
const router= jsonServer.router('db.json')

//middleware to convert js to json using defauults method

const middleware= jsonServer.defaults()

//connect using use method
mediaPlayerServer.use(middleware)
mediaPlayerServer.use(router)


//setup port for server to change the port

const port=5225 || process.env.PORT

//monitor 5000 using listen method

mediaPlayerServer.listen(port,()=>{
    console.log(`mediaPlayerServer is listening to ${port} and waiting for the request`);
})