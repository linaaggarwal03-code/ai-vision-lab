import Hero from "@/components/Hero";
import CameraPanel from "@/components/CameraPanel";
export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white px-10">

      <div className="mx-auto grid min-h-screen max-w-7xl grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE */}
        <Hero/>

        {/* RIGHT SIDE */}
        <CameraPanel/>
        

      </div>

    </main>
  );
}