const express = require( 'express' );
const cors = require( 'cors' );
const PORT = process.env.NODE_ENV || 5000;

const app = express();
app.use( cors() );
app.use( express.json() );
app.listen( PORT, () => {
    console.log( `Example app listening on port ${PORT}!` );
} );