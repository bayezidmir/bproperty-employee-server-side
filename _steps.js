/**
 1. Create node server with 5 steps
________________________________________
 * S-1: create a folder
 * S-2: npm init
 * S-3: npm i cors express mongodb
 * S-4: npm i -g nodemon
 * S-5: change to packege.json: "scripts": {
    "start": "node index.js",
    "start-dev": "nodemon index.js"}
________________________________________
Create database using Node
________________________________________'
 * S-1: Google by typing "Node atlas"
 * S-2: Register using social account or Email address
 * S-3: Answer the questions asked->Choose free package->Change nothing and press create cluster
 * S-4: Provide user credential and save it for further reference
 * S-5: Add your current IP address
 * S-6: on the next page press on "network access" tab-> "add IP Address"-> "Allow access from anywhere"
 * S-7: database-->connect-->copy code to paste at index.js
_________________________________________
CRUD Operation
_________________________________________
 * S-1: Node mongodb CRUD > fundamentals
 * S-2: Create async run function
 _________________________________________
 Integrate Sending data from client to server
 _________________________________________
 * client side: create form
 * on submit get form data and create user object
 * on server: create user POST method to received data on the backend (Google - "MDN fetch Post")
 * on client side: set fetch with Method:"POST", headers: {content-type: "application/json"}, body: JSON.stringify(user)
 * Make sure U return a json from post API
___________________________________________
Load/ Read Data from DB
___________________________________________
 * Create app.get API
 * create a query object
 * collection.Find
 * cursor.toArray()
 * return the result





*/
