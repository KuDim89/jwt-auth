require('dotenv').config();
const express = require('express');
//const cors = require('cors');
//const cookieParser = require('cookie-parser');

const port = process.env.PORT || 5000;
const app = express();

const start = async () => {
  try {
    app.listen(port, () => console.log(`Server started on PORT = ${port}`))
  } catch (e) {
    console.log(e)
  }
}

start();