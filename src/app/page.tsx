import HeroSection from "@/components/sections/HeroSection/HeroSection";
import StatusBar from "@/components/sections/HeroSection/Statusbar";
import TerminalWindow from "@/components/sections/terminal/TerminalWindow";
import Projects from "@/components/sections/Projects";
import GallerySection from "@/components/sections/gallery/GallerySection";
import CommissionsForm from "@/components/sections/CommissionsForm";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatusBar />
      <TerminalWindow />
      <Projects />
      <GallerySection />
      <CommissionsForm />
    </>
  );
}
