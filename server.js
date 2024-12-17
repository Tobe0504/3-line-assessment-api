const express = require("express");
const cors = require("cors");
const roles = require("./data/roles");

const app = express();
const PORT = 5000;

const allowedOrigins = [
  "http://localhost:3000",
  "http://localhost:3001",
  "https://3line-assessment.vercel.app",
];

app.use(
  cors({
    origin: allowedOrigins,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.use(express.json());

// Routes
app.get("/api/roles", (req, res) => {
  res.json(roles);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

export default app;
