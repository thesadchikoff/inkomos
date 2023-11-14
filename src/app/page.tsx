import Image from 'next/image'
import WelcomeSection from "@/components/WelcomeSection";
import CaseSection from "@/components/CaseSection";
import OurTeam from "@/components/OurTeam";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className={"w-full h-full"}>
      <WelcomeSection/>
        <CaseSection/>
        <OurTeam/>
      <Footer/>
    </main>
  )
}
