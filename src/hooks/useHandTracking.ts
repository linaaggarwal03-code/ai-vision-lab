"use client";

import { useEffect } from "react";
import Webcam from "react-webcam";
import { createHandLandmarker } from "@/lib/mediapipe";

export function useHandTracking(
  webcamRef: React.RefObject<Webcam | null>
) {
  useEffect(() => {
    let animationFrameId: number;

    async function startTracking() {
      const handLandmarker = await createHandLandmarker();

      function detect() {
        const video = webcamRef.current?.video;

        if (
          video &&
          video.readyState === 4
        ) {
          const results = handLandmarker.detectForVideo(
            video,
            performance.now()
          );

          if (results.landmarks.length > 0) {
            console.log("✋ Hand Detected!", results);
}
          }

        animationFrameId = requestAnimationFrame(detect);
      }

      detect();
    }

    startTracking();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [webcamRef]);
}