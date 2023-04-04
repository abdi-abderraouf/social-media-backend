const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
const mongoose = require('mongoose');
const userRoutes = require('./routes/user.router');

mongoose.connect(process.env.connection_string, {
  useNewUrlParser:true,
  useUnifiedTopology:true
}).then(() => {
  console.log("db connected successfully!");
}).catch((err) => {
  console.error("db connection error:", err);
  process.exit(1);
});

const db = mongoose.connection;
db.on("error",console.error.bind(console,"connection error:"));
db.once("open",function(){
    console.log("db connected successfully!");
});

app.use(express.static('public'));
app.use(cors());
app.use(express.json());

// error handling middleware
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send('Internal Server Error');
});

app.use('/users', userRoutes);

app.get('/', (req, res) => {
  res.send('hello social media app')
});

app.listen(process.env.PORT,()=>{
    console.log(`listening on port ${process.env.PORT}`);
});
