// src/app/page.tsx
import Navbar from '../components/Navbar';
import Hero from '../sections/Hero';
import Footer from '../components/footer';
import Integration from '../sections/Integrations';
import LogoTicker from "@/src/sections/LogoTicker";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <LogoTicker />
      <Integration />
      <Footer />
    </>
  );
}

