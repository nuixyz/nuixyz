import HeroSection from "@/components/section/HeroSection";
import TerminalWindow from "@/components/terminal/TerminalWindow";
import Projects from "@/components/section/Projects";
import CommissionsForm from "@/components/section/CommissionsForm";
import StatusBar from "@/components/section/Statusbar";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatusBar />
      <TerminalWindow />
      <Projects />
      <CommissionsForm />
    </>
  );
}
