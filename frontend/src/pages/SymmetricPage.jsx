import React, { useState } from "react";
import "./HashingPage.css"; // ✅ Reuse the same CSS

function SymmetricPage() {
  const [text, setText] = useState("");
  const [result, setResult] = useState(null);

  const handleEncrypt = async () => {
    const res = await fetch("http://localhost:5000/symmetric", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text }),
    });
    setResult(await res.json());
  };

  return (
    <div className="hashing-container">
      <div className="glass-card">
        <h2 className="mb-4">🔐 Symmetric (AES)</h2>

        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text"
          />
        </div>

        <button className="btn btn-info w-100 mb-3" onClick={handleEncrypt}>
          Encrypt
        </button>

        {result && (
          <div className="text-start mt-3">
            <p>
              <b>Key:</b>{" "}
              <span className="text-break">{result.key}</span>
            </p>
            <p>
              <b>IV:</b>{" "}
              <span className="text-break">{result.iv}</span>
            </p>
            <p>
              <b>Encrypted:</b>{" "}
              <span className="text-break">{result.encrypted}</span>
            </p>
            <p>
              <b>Decrypted:</b>{" "}
              <span className="text-break">{result.decrypted}</span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default SymmetricPage;
