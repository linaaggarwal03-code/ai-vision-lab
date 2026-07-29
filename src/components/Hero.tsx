import FeatureCard from "./FeatureCard";
import PrimaryButton from "./PrimaryButton";

export default function Hero() {
  return (
    <section>

      <h1 className="text-5xl font-bold">
        AI Vision <span className="text-cyan-300">Lab</span>
      </h1>

      <p className="mt-6 text-2xl text-gray-300">
        Real-Time Computer Vision Playground
      </p>

      <p className="mt-4 text-lg text-gray-500">
        Turn yourself invisible using AI and control everything with hand gestures.
      </p>


      <div className="mt-10 flex flex-wrap gap-4">

        <FeatureCard
          title="👻 Ghost Mode"
        />

        <FeatureCard
          title="✋ Gesture Control"
        />

        <FeatureCard
          title="🎥 Live Vision"
        />

      </div>
      

      <div className="mt-10 flex gap-6">

        <PrimaryButton
        title="Launch Demo"
        />

        <button className="rounded-xl border border-cyan-300 px-8 py-4">
          Case Study
        </button>

      </div>

    </section>
  );
}