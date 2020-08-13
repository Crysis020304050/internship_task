const express = require('express');
const cors = require('cors');
const errorHandler = require('./errorHandler');
const router = require('./routers');
const {FAKE_ENV: {PORT}} = require('./constants');
const passport = require('./middlewares/passport');

const app = express();

app.use(cors());
app.use(express.json());
app.use(passport.initialize());
app.use(router);
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}!`);
});