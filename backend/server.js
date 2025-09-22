const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const crypto = require("crypto");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// 🔹 Hashing Route
app.post("/hash", (req, res) => {
  const { text } = req.body;
  const sha256 = crypto.createHash("sha256").update(text).digest("hex");
  const sha512 = crypto.createHash("sha512").update(text).digest("hex");

  res.json({ sha256, sha512 });
});

// 🔹 Symmetric (AES) Route
app.post("/symmetric", (req, res) => {
  const { text } = req.body;

  const key = crypto.randomBytes(32);
  const iv = crypto.randomBytes(16);

  const cipher = crypto.createCipheriv("aes-256-cbc", key, iv);
  let encrypted = cipher.update(text, "utf8", "hex");
  encrypted += cipher.final("hex");

  const decipher = crypto.createDecipheriv("aes-256-cbc", key, iv);
  let decrypted = decipher.update(encrypted, "hex", "utf8");
  decrypted += decipher.final("utf8");

  res.json({
    key: key.toString("hex"),
    iv: iv.toString("hex"),
    encrypted,
    decrypted,
  });
});

// 🔹 Asymmetric (RSA) Route
app.post("/asymmetric", (req, res) => {
  const { text } = req.body;

  const { publicKey, privateKey } = crypto.generateKeyPairSync("rsa", {
    modulusLength: 2048,
    publicKeyEncoding: { type: "spki", format: "pem" },
    privateKeyEncoding: { type: "pkcs8", format: "pem" },
  });

  const encryptedData = crypto.publicEncrypt(publicKey, Buffer.from(text));
  const decryptedData = crypto.privateDecrypt(privateKey, encryptedData);

  res.json({
    publicKey,
    privateKey,
    encrypted: encryptedData.toString("base64"),
    decrypted: decryptedData.toString(),
  });
});

// ✅ Fix for Render
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Backend running on port ${PORT}`));
