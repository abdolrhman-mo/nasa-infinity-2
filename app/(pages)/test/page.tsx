import DailyBehavioursSection from "@/app/ui/infinity/home/daily-behaviours-section";
import HeroSection from "@/app/ui/infinity/home/hero-section";
import IntroSection from "@/app/ui/infinity/home/intro-section";
import TeamSection from "@/app/ui/infinity/home/team-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <IntroSection />
      <DailyBehavioursSection />
      <TeamSection />
    </>
  )
}
