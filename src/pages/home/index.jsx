import Hero from "./Hero";
import PickUpDropOff from "../../components/PickUpDropOff";
import PopularCars from "./PopularCars";
import HowItWorks from "./HowItWorks";
import Testimonials from "./Testimonials";

function Home() {
  return (
    <div className="home">
      <Hero />
      <PickUpDropOff />
      <PopularCars />
      <HowItWorks />
      <Testimonials />
    </div>
  );
}

export default Home;
