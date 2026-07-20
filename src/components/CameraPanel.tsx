"use client";

import Webcam from "react-webcam";

export default function CameraPanel() {
  return (
    <section>
      <div className="flex h-[550px] items-center justify-center rounded-3xl border border-cyan-300/30 bg-zinc-900 overflow-hidden">

        <Webcam
          audio={false}
          className="h-full w-full object-cover"
        />

      </div>
    </section>
  );
}