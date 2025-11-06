import React from "react";

const TextEditor = (props) => {
  const { form } = props;

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <textarea
        id="editor"
        value={form.values.description || ""}
        onChange={(e) => form.setFieldValue("description", e.target.value)}
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
      {form.errors.description && (
        <span style={{ color: "red", fontSize: "14px" }}>
          {form.errors.description}
        </span>
      )}
    </div>
  );
};

export default TextEditor;
