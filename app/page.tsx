import { Services } from "./_components/services";
import { About } from "./_components/about";
import { Hero } from "./_components/hero";
import { Testimonial } from "./_components/testimonial";
import { Footer } from "./_components/footer";

export default function Home() {
  return (
    <div className=" ">
      <Hero />
      <About />
      <Services />
      <Testimonial />
      <Footer />
    </div>
  );
}
