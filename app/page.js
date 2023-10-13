import About from "@/sections/About";
import Awards from "@/sections/Awards";
import ColoradoFcSeciton from "@/sections/ColoradoFcSeciton";
import Explore from "@/sections/Explore";
import Footer from "@/sections/Footer";
import GetStarted from "@/sections/GetStarted";
import Navbar from "@/sections/Navbar";
import Schedule from "@/sections/Schedule";

export default function Home() {
  return (
    <main className="bg-black w-full min-h-screen scrollbar-hide">
      <Navbar />
      <ColoradoFcSeciton />
      <About />
      <Explore />
      <Schedule />
      <GetStarted/>
      <Awards />
      <Footer />
    </main>
  )
}
