const express = require('express');
const cors = require('cors');
const PORT = process.env.NODE_ENV || 5000;
const errorHandler = require('./errorHandler');

const app = express();

app.use(cors());
app.use(express.json());
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}!`);
});