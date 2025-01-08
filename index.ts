import express, { Request, Response } from "express";

const app = express();
const PORT = 4000;

app.get("/", (req: Request, res: Response) => {
  res.json({ msg: "Hello There..." });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});