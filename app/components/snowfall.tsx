"use client";

import React, { useRef, useEffect } from "react";

interface SnowfallProps {
  className?: string;
  quantity?: number;
  speed?: number;
}

const Snowfall: React.FC<SnowfallProps> = ({
  className = "",
  quantity = 50,
  speed = 1, // Adjusted for a slower fall
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const context = useRef<CanvasRenderingContext2D | null>(null);
  const snowflakes = useRef<any[]>([]);
  const dpr = typeof window !== "undefined" ? window.devicePixelRatio : 1;

  useEffect(() => {
    if (canvasRef.current) {
      context.current = canvasRef.current.getContext("2d");
      initCanvas();
      animate();
      window.addEventListener("resize", initCanvas);
      return () => {
        window.removeEventListener("resize", initCanvas);
      };
    }
  }, []);

  const initCanvas = () => {
    resizeCanvas();
    generateSnowflakes();
  };

  type Snowflake = {
    x: number;
    y: number;
    r: number; // Radius of the snowflake now reduced for smaller flakes
    d: number; // Density (used for speed and to distinguish snowflake size)
  };

  const resizeCanvas = () => {
    if (canvasRef.current && context.current) {
      const width = window.innerWidth;
      const height = window.innerHeight;
      canvasRef.current.width = width * dpr;
      canvasRef.current.height = height * dpr;
      canvasRef.current.style.width = `${width}px`;
      canvasRef.current.style.height = `${height}px`;
      context.current.scale(dpr, dpr);
    }
  };

  const generateSnowflakes = () => {
    const { current: currentCanvas } = canvasRef;
    if (currentCanvas) {
      const width = window.innerWidth;
      const height = window.innerHeight;
      snowflakes.current = [];
      for (let i = 0; i < quantity; i++) {
        const x = Math.random() * width;
        const y = Math.random() * height;
        const r = Math.random() * 2 + 1; // Reduced the maximum size for subtleness
        const d = Math.random() * quantity;
        snowflakes.current.push({ x, y, r, d });
      }
    }
  };

  const animate = () => {
    const { current: currentContext } = context;
    const { current: currentCanvas } = canvasRef;
    if (currentCanvas && currentContext) {
      clearCanvas(currentContext, currentCanvas.clientWidth, currentCanvas.clientHeight);
      snowflakes.current.forEach((fl) => {
        drawSnowflake(currentContext, fl);
        updateSnowflake(fl, currentCanvas.clientWidth, currentCanvas.clientHeight);
      });
      window.requestAnimationFrame(animate);
    }
  };

  const drawSnowflake = (ctx: CanvasRenderingContext2D, fl: Snowflake) => {
    ctx.beginPath();
    ctx.arc(fl.x, fl.y, fl.r, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255, 255, 255, 0.8)`; // Adjusted for a slight transparency
    ctx.fill();
    ctx.closePath();
  };

  const updateSnowflake = (fl: Snowflake, width: number, height: number) => {
    fl.y += Math.pow(fl.d, 2) * 0.001 * speed;
    fl.x += Math.sin(fl.d) * 1; // Reduced for less lateral sway
    // Recycle the snowflake at the top when it falls out of the view
    if (fl.y > height) {
      fl.x = Math.random() * width;
      fl.y = -fl.r;
      fl.d = Math.random() * quantity;
    }
  };

  const clearCanvas = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
    ctx.clearRect(0, 0, width, height);
  };

  return (
    <canvas className={className} ref={canvasRef} />
  );
};

export default Snowfall;