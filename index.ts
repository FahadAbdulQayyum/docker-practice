import express, { Request, Response } from "express";

const app = express();
const PORT = 4000;

app.get("/", (req: Request, res: Response) => {
  res.json({ msg: "Hello There...!" });
});

app.get("/about", (req: Request, res: Response) => {
  res.json({ msg: "About Page...!" });
});

app.get("/contact", (req: Request, res: Response) => {
  res.json({ msg: "Contact Page...!" });
});

app.get("/contact/:id", (req: Request, res: Response) => {
  res.json({ msg: "Contact Page...!", id: req.params.id });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});