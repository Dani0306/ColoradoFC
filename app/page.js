import About from "@/sections/About";
import Awards from "@/sections/Awards";
import ColoradoFcSeciton from "@/sections/ColoradoFcSeciton";
import Explore from "@/sections/Explore";
import FindUs from "@/sections/FindUs";
import Footer from "@/sections/Footer";
import GetStarted from "@/sections/GetStarted";
import Navbar from "@/sections/Navbar";
import Schedule from "@/sections/Schedule";
import Trainings from "@/sections/Trainings";
import { AiOutlineWhatsApp } from "react-icons/ai"

export default function Home() {
  return (
    <main className="bg-black w-full min-h-screen max-h-max scrollbar-hide relative">
      <Navbar />
      <ColoradoFcSeciton />
      <GetStarted/>
      <Schedule />
      <About />
      <Explore />
      <Trainings />
      <Awards />
      <FindUs />
      <Footer />
      <a href="https://wa.me/573206976928" className="w-[50px] h-[50px] bg-[#25d366] text-white font-semibold fixed right-[30px] bottom-[30px] flex items-center justify-center rounded-xl z-[5000]">
        <AiOutlineWhatsApp className="w-[35px] h-[35px] text-white"/>
      </a>
    </main>
  )
}
