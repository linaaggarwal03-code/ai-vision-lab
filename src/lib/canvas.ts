import { HAND_CONNECTIONS } from "./handConnections";

type Point = {
  x: number;
  y: number;
};

export function drawHand(
  ctx: CanvasRenderingContext2D,
  landmarks: Point[],
  width: number,
  height: number
) {
  ctx.clearRect(0, 0, width, height);

  if (!landmarks.length) return;

  // ---------- Lines ----------
  ctx.strokeStyle = "#38bdf8";
  ctx.lineWidth = 1.5;

  HAND_CONNECTIONS.forEach(([start, end]) => {
    const a = landmarks[start];
    const b = landmarks[end];

    ctx.beginPath();

    ctx.moveTo((1 - a.x) * width, a.y * height);
    ctx.lineTo((1 - b.x) * width, b.y * height);

    ctx.stroke();
  });

  // ---------- Glowing Dots ----------
  landmarks.forEach((point) => {
    const x = (1 - point.x) * width;
    const y = point.y * height;

    ctx.beginPath();
    ctx.fillStyle = "#67e8f9";
    ctx.shadowColor = "#67e8f9";
    ctx.shadowBlur = 12;

    ctx.arc(x, y, 4, 0, Math.PI * 2);

    ctx.fill();
  });

  ctx.shadowBlur = 0;
}