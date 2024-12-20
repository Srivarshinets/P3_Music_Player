const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser"); //JSON
const mongoose = require("mongoose"); //to connect mongodb
const authRoutes = require("./routes/authRoutes");
const app = express();
const PORT = 5000;
const DB_URI = "mongodb://localhost:27017/music_player"; //mongodb compass

app.use(cors());
app.use(bodyParser.json());

mongoose
  .connect(DB_URI)
  .then(() => {
    console.log("Connected to mongodb");
  })
  .catch((err) => {
    console.error("Failed to connect to mongo db");
  });
// Routes
app.use("/", authRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
