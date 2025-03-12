import Contact from "@/components/main/home/Contact";
import Faq from "@/components/main/home/Faq";
import Feature from "@/components/main/home/Feature";
import Hero from "@/components/main/home/Hero";
import Orders from "@/components/main/home/Orders";
import Products from "@/components/main/home/Products";
import WhyChose from "@/components/main/home/WhyChose";

export default function Home() {
  return (
    <>
      <Hero />
      <Feature />
      <WhyChose />
      <Faq />
      <Contact />
      <Products />
      <Orders />
    </>
  );
}
