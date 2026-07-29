"use client";

type LandmarkCanvasProps = {
  landmarks: any[];
};

export default function LandmarkCanvas({
  landmarks,
}: LandmarkCanvasProps) {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {landmarks.length > 0 &&
        landmarks[0].map((point: any, index: number) => (
          <div
            key={index}
            className="absolute h-2 w-2 rounded-full bg-cyan-400"
            style={{
              left: `${(1 - point.x) * 100}%`,
              top: `${point.y * 100}%`,
              transform: "translate(-50%, -50%)",
            }}
          />
        ))}
    </div>
  );
}