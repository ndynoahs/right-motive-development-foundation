import Image from "next/image";
import Navbar from "@/components/Navbar";
import Welcome from "@/components/home/Welcome";
import GetInvolved from "@/components/home/GetInvolved";
import About from "@/components/home/About"
import Campaigns from "@/components/home/Campaigns";
import UpcomingEvents from "@/components/home/UpcomingEvents";
import VolunteerAds from "@/components/home/VolunteerAds";
import Footer from "@/components/home/Footer";
export default function Home() {
  return (
    <main className=" min-h-screen relative">
      <Navbar />
      <Welcome />
      <GetInvolved />
      <About />
      <Campaigns />
      <UpcomingEvents />
      <VolunteerAds />
      <Footer />
    </main>
  );
}
