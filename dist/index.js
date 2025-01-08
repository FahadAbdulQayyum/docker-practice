import express from "express";
const app = express();
const PORT = 4000 || proce;
app.get("/", (req, res) => {
    res.json({ msg: "Hello There...!" });
});
app.get("/about", (req, res) => {
    res.json({ msg: "About Page...!" });
});
app.get("/contact", (req, res) => {
    res.json({ msg: "Contact Page...!" });
});
app.get("/contact/:id", (req, res) => {
    res.json({ msg: "Contact Page...!", id: req.params.id });
});
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
