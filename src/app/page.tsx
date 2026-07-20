export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white px-10">

      <div className="mx-auto grid min-h-screen max-w-7xl grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE */}

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

            <div className="rounded-xl border border-gray-700 px-6 py-4">
              👻 Ghost Mode
            </div>

            <div className="rounded-xl border border-gray-700 px-6 py-4">
              ✋ Gesture Control
            </div>

            <div className="rounded-xl border border-gray-700 px-6 py-4">
              🎥 Live Vision
            </div>

          </div>

          <div className="mt-10 flex gap-6">

            <button className="rounded-xl bg-cyan-300 px-8 py-4 font-semibold text-black">
              Launch Demo
            </button>

            <button className="rounded-xl border border-cyan-300 px-8 py-4">
              Case Study
            </button>

          </div>

        </section>

        {/* RIGHT SIDE */}

        <section>

          <div className="flex h-[550px] items-center justify-center rounded-3xl border border-cyan-300/30 bg-zinc-900">

            <p className="text-gray-500">
              Live Camera Demo Coming Soon...
            </p>

          </div>

        </section>

      </div>

    </main>
  );
}