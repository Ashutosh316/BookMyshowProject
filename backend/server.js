const express = require("express");
const app = express();
const connectDB = require('./dbConnection');
const cors = require("cors");
const PORT = 5000;

app.use(cors());
// Middleware for parsing JSON
app.use(express.json());
// Connecting to Database
connectDB();
app.use(express.urlencoded({ extended: false }));

// Creating an API and separating it.
app.use("/api", require("./routes"));

// Start server
app.listen(PORT, () => { 
    console.log(`Server is running on port: ${PORT}`); 
});
