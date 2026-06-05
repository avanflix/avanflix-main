import { Navbar } from "@/app/UI/navbar";
import { Hero } from "@/app/UI/hero";
import { Industries } from "@/app/UI/industries";
import { Brands } from "@/app/UI/brands";
import { Services } from "@/app/UI/services";
import { Process } from "@/app/UI/process";
import { WorkShowcase } from "@/app/UI/work-showcase";
import { Work } from "@/app/UI/work";
import { WhyUs } from "@/app/UI/why-us";
import { Testimonials } from "@/app/UI/testimonials";
import { Connect } from "@/app/UI/connect";
import { Footer } from "@/app/UI/footer";

export default function Home() {
  return (
    <main className="w-full">
      <Navbar />
      <Hero />
      <Industries />
      <Brands />
      <Services />
      <WorkShowcase />
      {/* <Process /> */}
      {/* <Work /> */}
      <WhyUs />
      <Testimonials />
      <Connect />
      <Footer />
    </main>
  );
}