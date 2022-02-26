const express = require('express');
const countsRoutes = require ('./routes/counts')
const app = express() 

// installed dependencies 
// DEV: npm install --save-dev nodemon 
// all env: 
//  npm install --save express
// npm install --save body-parser
app.use('/counts', countsRoutes) // forward all URL requests that beging with /counts


app.listen(8080)