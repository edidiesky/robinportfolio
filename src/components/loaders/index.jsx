import React, { useState } from "react";

export default function LoaderIndex({ loading }) {
  const [open, setOpen] = useState(true);
  return (
    <div>
      <div
        style={{
          height: "100vh",
          width: "100vw",
          position: "fixed",
          background: "#fff",
        }}
      ></div>
    </div>
  );
}
