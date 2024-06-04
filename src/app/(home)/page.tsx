import About from "@/components/About";
import FAQs from "@/components/FAQs";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HowToContribute from "@/components/HowToContribute";
import Listen from "@/components/Listen";
import RecordCTA from "@/components/RecordCTA";

export default function Home() {
  return (
    <main className="mt-20">
      <Hero />
      <About />
      <HowToContribute />
      <Listen />
      <RecordCTA />
      <FAQs />
      <Footer />
    </main>
  );
}
