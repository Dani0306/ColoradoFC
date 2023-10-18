import About from "@/sections/About";
import Awards from "@/sections/Awards";
import ColoradoFcSeciton from "@/sections/ColoradoFcSeciton";
import Explore from "@/sections/Explore";
import FindUs from "@/sections/FindUs";
import Footer from "@/sections/Footer";
import GetStarted from "@/sections/GetStarted";
import Navbar from "@/sections/Navbar";
import Schedule from "@/sections/Schedule";

export default function Home() {
  return (
    <main className="bg-black w-full min-h-screen max-h-max scrollbar-hide">
      <Navbar />
      <ColoradoFcSeciton />
      <GetStarted/>
      <Schedule />
      <About />
      <Explore />
      <Awards />
      <FindUs />
      <Footer />
    </main>
  )
}
