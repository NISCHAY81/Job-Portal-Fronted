import React, { useState } from "react";

export default function SimpleTextEditor() {
  const [value, setValue] = useState(
    ``
  );

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <label htmlFor="editor" style={{ fontWeight: "bold" }}>
        
      </label>
      <textarea
        id="editor"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        rows={10}
        style={{
          width: "100%",
          padding: "10px",
          fontSize: "16px",
          borderRadius: "6px",
          border: "1px solid #ccc",
          resize: "vertical",
        }}
      />
    </div>
  );
}
