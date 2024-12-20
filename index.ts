const express = require("express");

const app = express();
const PORT = 3000;

// app.get("/", (req: Request, res: Response) => {
app.get("/", (req, res) => {
  res.send("Hello There...");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});