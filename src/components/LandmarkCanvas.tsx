"use client";

import { useEffect, useRef } from "react";
import { drawHand } from "@/lib/canvas";
import { HandLandmarkerResult } from "@/lib/mediapipe";

type LandmarkCanvasProps = {
  landmarks: HandLandmarkerResult["landmarks"];
  video: HTMLVideoElement | null;
};

export default function LandmarkCanvas({
  landmarks,
  video,
}: LandmarkCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current || !video) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    if (!ctx) return;

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    if (landmarks.length > 0) {
      drawHand(
        ctx,
        landmarks[0],
        canvas.width,
        canvas.height
      );
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  }, [landmarks, video]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 h-full w-full"
    />
  );
}