import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import PhotoGallery from "@/components/PhotoGallery";
import DiarySection from "@/components/DiarySection";
import PortfolioSection from "@/components/PortfolioSection";
import GuestbookSection from "@/components/GuestbookSection";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <PhotoGallery />
        <DiarySection />
        <PortfolioSection />
        <GuestbookSection />
      </main>
      <Footer />
    </div>
  );
}
