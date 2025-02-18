const express = require("express");
const path = require("path");

const app = express();

// Serve static files from the "public" folder
app.use(express.static(path.join(__dirname, "public")));

// Serve index.html when visiting "/"
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Start the server
const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
