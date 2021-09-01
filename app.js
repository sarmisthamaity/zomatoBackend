require('dotenv').config();

const express = require('express');
const app = express();
app.use(express.json());
require('./connection/connect');

app.use('/', require('./routes/index'));

app.listen(process.env.PORT, (err) => {
    if(err) throw err;
    console.log(`server running on port ${process.env.PORT}`);
    console.log((`Api: http://localhost:${process.env.PORT}`));
});