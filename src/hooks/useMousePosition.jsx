import { useEffect } from "react";
import { useState } from "react";

export default function useMousePosition() {
  const [mouseposition, setMousePosition] = useState({ x: null, y: null });
  const handleMousePosition = (e) => {
    const { width, height, left, top } = e.target.getBoundingClientRect();
    setMousePosition({
      x: e.clientX,
      y: e.clientY,
    });
  };
  useEffect(() => {
    window.addEventListener("mousemove", handleMousePosition);
    return () => window.removeEventListener("mousemove", handleMousePosition);
  }, [setMousePosition]);

  // console.log("mouseposition", mouseposition);
  return mouseposition;
}
