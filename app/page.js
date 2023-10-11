import About from "@/sections/About";
import ColoradoFcSeciton from "@/sections/ColoradoFcSeciton";
import Explore from "@/sections/Explore";
import Footer from "@/sections/Footer";
import Navbar from "@/sections/Navbar";
import Schedule from "@/sections/Schedule";

export default function Home() {
  return (
    <main className="bg-black w-full min-h-screen scrollbar-hide">
      <Navbar />
      <ColoradoFcSeciton />
      <div className="relative">
        <About />
        <div className="gradient-03 z-0" />
        <Explore />
      </div>
      <Schedule />
      <Footer />
    </main>
  )
}
