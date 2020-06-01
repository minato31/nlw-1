import express from "express";

const app = express();

app.get("/", (_, res) => {
  res.json({ hello: "worl" });
});

app.listen(3333, (e) => (e ? console.error(e) : null));
