import Carousel from "@/components/Carousel";
import Categories from "@/components/Categories";
import FAQSection from "@/components/FAQSection";
import Hero from "@/components/Hero";
import MobilePhotoSlider from "@/components/MobilePhotoSlider";

export default function Home() {
  return (
    <>
      <MobilePhotoSlider />
      <Hero />
      <Carousel />
      <Categories />
      <FAQSection />
    </>
  );
}