import React, { useState } from "react";
import "./HashingPage.css"; // ✅ Reuse same CSS

function AsymmetricPage() {
  const [text, setText] = useState("");
  const [result, setResult] = useState(null);

  const handleRSA = async () => {
    const res = await fetch("http://localhost:5000/asymmetric", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text }),
    });
    setResult(await res.json());
  };

  return (
    <div className="hashing-container">
      <div className="glass-card">
        <h2 className="mb-4">🔑 Asymmetric (RSA)</h2>

        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text"
          />
        </div>

        <button className="btn btn-info w-100 mb-3" onClick={handleRSA}>
          Encrypt & Decrypt
        </button>

        {result && (
          <div className="text-start mt-3">
            <p>
              <b>Public Key:</b>
              <textarea
                className="form-control text-break mt-2"
                rows="4"
                readOnly
                value={result.publicKey}
              />
            </p>
            <p>
              <b>Private Key:</b>
              <textarea
                className="form-control text-break mt-2"
                rows="4"
                readOnly
                value={result.privateKey}
              />
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

export default AsymmetricPage;
