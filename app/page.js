import Image from "next/image";
import Navbar from "@/components/Navbar";
import Welcome from "@/components/home/Welcome";
import GetInvolved from "@/components/home/GetInvolved";
import About from "@/components/home/About"
import Campaigns from "@/components/home/Campaigns";
export default function Home() {
  return (
    <main className=" min-h-screen relative">
      <Navbar />
      <Welcome />
      <GetInvolved />
      <About />
      <Campaigns />
    </main>
  );
}
