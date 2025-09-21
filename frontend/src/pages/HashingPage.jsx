import React, { useState } from "react";
import "./HashingPage.css"; // 👈 Add a CSS file

function HashingPage() {
  const [text, setText] = useState("");
  const [result, setResult] = useState(null);

  const handleHash = async () => {
    const res = await fetch("http://localhost:5000/hash", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text }),
    });
    setResult(await res.json());
  };

  return (
    <div className="hashing-container">
      <div className="glass-card">
        <h2 className="mb-4">🔒 Hashing</h2>

        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text"
          />
        </div>

        <button className="btn btn-info w-100 mb-3" onClick={handleHash}>
          Generate Hash
        </button>

        {result && (
          <div className="text-start mt-3">
            <p>
              <b>SHA-256:</b>{" "}
              <span className="text-break">{result.sha256}</span>
            </p>
            <p>
              <b>SHA-512:</b>{" "}
              <span className="text-break">{result.sha512}</span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default HashingPage;
