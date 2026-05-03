const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/api/health", (req, res) => {
  res.json({ ok: true, project: "RocketFit", status: "online" });
});

app.post("/api/contact", (req, res) => {
  const { name, email, message } = req.body;
  console.log("Novo contato RocketFit:", { name, email, message });
  res.json({ ok: true, message: "Contato recebido com sucesso!" });
});

app.post("/api/lead", (req, res) => {
  const { plan } = req.body;
  console.log("Lead de plano:", { plan });
  res.json({ ok: true, message: `Interesse recebido no plano ${plan}` });
});

const distPath = path.join(__dirname, "../client/dist");
app.use(express.static(distPath));

app.get("*", (req, res) => {
  res.sendFile(path.join(distPath, "index.html"));
});

app.listen(PORT, () => {
  console.log(`RocketFit server rodando em http://localhost:${PORT}`);
});
