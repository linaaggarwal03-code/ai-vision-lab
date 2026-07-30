"use client";

import { useEffect , useState } from "react";
import Webcam from "react-webcam";
import {
  createHandLandmarker,
  HandLandmarkerResult,
} from "@/lib/mediapipe";

export function useHandTracking(
  webcamRef: React.RefObject<Webcam | null>
) {
  const [landmarks, setLandmarks] = useState<HandLandmarkerResult["landmarks"]>([]);
  const [video, setVideo] = useState<HTMLVideoElement | null>(null);

  useEffect(() => {
    let animationFrameId = 0;
    let handLandmarker: Awaited<ReturnType<typeof createHandLandmarker>>;

    async function startTracking() {
      handLandmarker = await createHandLandmarker();

      function detect() {
        const currentVideo = webcamRef.current?.video;

        if (!currentVideo) {
            animationFrameId = requestAnimationFrame(detect);
            return;
}

        if (
          currentVideo.readyState === HTMLMediaElement.HAVE_ENOUGH_DATA
        ){
          setVideo(currentVideo);
          const results = handLandmarker.detectForVideo(
            currentVideo,
            performance.now()
          );

          // Only log when a hand first appears (temporary debugging)
          if (results.landmarks.length > 0) {
            setLandmarks(results.landmarks);
          }
          else {
            setLandmarks([]);
          }
        }

        animationFrameId = requestAnimationFrame(detect);
      }

        animationFrameId = requestAnimationFrame(detect);
    }

    startTracking();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, 
  [webcamRef]);

  return {
    landmarks,
    video,
};
}