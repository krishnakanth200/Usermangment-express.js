const express = require('express');

const routes = require('./Routes/User.js')

const app = express();
const PORT = 5000;
app.use("/",routes);

app.listen(PORT , ()=> {
    console.log("Server is running at port " + PORT);
})