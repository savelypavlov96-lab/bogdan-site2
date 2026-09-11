const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 10000;

app.use(cors({
  origin: process.env.FRONTEND_ORIGIN || "*"
}));
app.use(express.json());

app.get("/api/health", (_req, res) => {
  res.json({ ok: true, service: "bogdan-site-api" });
});

app.post("/api/contact", (req, res) => {
  const { name, email, message } = req.body || {};
  if (!name || !email || !message) {
    return res.status(400).json({ ok: false, error: "Заполните все поля." });
  }

  // Здесь позже можно подключить Resend, Telegram Bot API или другую почту.
  console.log("CONTACT", { name, email, message, at: new Date().toISOString() });
  res.json({ ok: true, message: "Сообщение принято." });
});

app.listen(PORT, () => console.log(`API listening on ${PORT}`));
