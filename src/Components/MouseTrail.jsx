import { useEffect } from "react";

const MouseTrail = () => {
  useEffect(() => {
    const colors = ["#ff0080", "#00ffcc", "#ffcc00", "#7c4dff", "#00e5ff"];

    const handleMouseMove = (e) => {
      const dot = document.createElement("div");
      dot.className = "cursor-dot";

      dot.style.left = e.clientX + "px";
      dot.style.top = e.clientY + "px";

      dot.style.background =
        colors[Math.floor(Math.random() * colors.length)];

      document.body.appendChild(dot);

      setTimeout(() => {
        dot.remove();
      }, 600);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return null;
};

export default MouseTrail;