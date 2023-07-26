
const express = require('express');
// const router = express.Router();
const cors = require('cors');
// const nodemailer = require("nodemailer");

const PORT = process.env.PORT || 3001;
const app= express();
app.use(cors());
app.get("/api", (req, res) => {
  res.json({message:"Hello from server!"})
});

app.listen(PORT, () => {
  console.log('Server is online on port')
})