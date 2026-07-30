"use client";

import { useRef } from "react";
import Webcam from "react-webcam";
import { useHandTracking } from "@/hooks/useHandTracking";
import LandmarkCanvas from "./LandmarkCanvas";

export default function CameraPanel() {
  const webcamRef = useRef<Webcam>(null);

  // Start AI hand tracking
  const { landmarks, video } = useHandTracking(webcamRef);
  console.log(landmarks);

  return (
    <section>
      <div className="relative flex h-[550px] items-center justify-center overflow-hidden rounded-3xl border border-cyan-300/30 bg-zinc-900">
        <Webcam
          ref={webcamRef}
          audio={false}
          mirrored
          className="h-full w-full object-cover"
        />
        <LandmarkCanvas
          landmarks={landmarks}
          video={video}
        />
      </div>
    </section>
  );
}