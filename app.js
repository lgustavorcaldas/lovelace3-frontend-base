const express = require('express');
const app = express();
const port = 8080;

const { JSDOM } = require( "jsdom" );
const { window } = new JSDOM( "" );
const $ = require( "jquery" )( window );

let aboutMe

function push(){
    $.ajax({
        url:`https://simple-market-backend.herokuapp.com/aboutme`,
        method: `GET`
    }).done(data => aboutMe = data)
}
push()

app.use('/aboutme', express.static('src/aboutme'));
app.use('/', (req,res) => {
    res.send(aboutMe)
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));