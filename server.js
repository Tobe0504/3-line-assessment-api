const express = require("express");
const cors = require("cors");
const roles = require("./data/roles");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Routes
app.get("/api/roles", (req, res) => {
  res.json(roles);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
