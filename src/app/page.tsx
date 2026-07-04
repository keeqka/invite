"use client";

import HeroSection from "@/components/HeroSection";
import CountdownTimer from "@/components/CountdownTimer";
import OurStory from "@/components/OurStory";
import WeddingDetails from "@/components/WeddingDetails";
import RSVPSection from "@/components/RSVPSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <CountdownTimer />
      <OurStory />
      <WeddingDetails />
      <RSVPSection />
      <Footer />
    </main>
  );
}
