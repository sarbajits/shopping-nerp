import AboutTab from "@/components/AboutTab";
import AppDownload from "@/components/AppDownload";
import Carousel from "@/components/Carousel";
import Categories from "@/components/Categories";
import ContactSection from "@/components/ContactSection";
import FAQSection from "@/components/FAQSection";
import Hero from "@/components/Hero";
import MobilePhotoSlider from "@/components/MobilePhotoSlider";

export default function Home() {
  return (
    <div className="">
      <MobilePhotoSlider />
      <Hero />
      <Carousel />
      <Categories />
      <AppDownload />
      <AboutTab />
      <ContactSection />
      <FAQSection />
    </div>
  );
}