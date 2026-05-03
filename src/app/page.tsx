import { Capabilities } from "@/components/Capabilities";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { PainPoints } from "@/components/PainPoints";
import { Playbook } from "@/components/Playbook";
import { SiteHeader } from "@/components/SiteHeader";
import { TargetSegment } from "@/components/TargetSegment";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex min-h-screen w-full flex-col bg-[#050314] text-white">
        <Hero />
        <PainPoints />
        <Capabilities />
        <Playbook />
        <TargetSegment />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
