const path = require('path'); // build the path to serve
const express = require('express');
const app = express(); // server application
const publicPath = path.join(__dirname, '..', 'public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));  // host app from public folder

app.get('*', (request, response) => {
    response.sendFile(path.join(publicPath, 'index.html'));
});  //Match all unmatched routes when url is not found

app.listen(port, () => {    //listen to the port once the node server starts
    console.log('Server is Up!');
});
