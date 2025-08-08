// src/components/ParticulasBG.jsx
import React, { useEffect, useRef } from "react";

export default function ParticulasBG() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    let particles = [];
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 2 + 1,
        dx: Math.random() - 0.5,
        dy: Math.random() - 0.5
      });
    }

    function draw() {
      ctx.clearRect(0, 0, width, height);
      particles.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = "#8257e6";
        ctx.fill();
        p.x += p.dx;
        p.y += p.dy;
        if (p.x < 0 || p.x > width) p.dx *= -1;
        if (p.y < 0 || p.y > height) p.dy *= -1;
      });
      requestAnimationFrame(draw);
    }
    draw();

    function handleResize() {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    }
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="bg-particles"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: -1,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
      }}
      aria-hidden="true"
    />
  );
}
