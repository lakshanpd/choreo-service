const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get("/", (req, res) => {
    res.send({ message: "Welcome to the Node.js Service!" });
});

app.get("/data", (req, res) => {
    res.json({ success: true, data: ["Item1", "Item2", "Item3"] });
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
