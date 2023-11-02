import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import AboutImg from "../assets/Dd.jpg";
import Footer from "../Components/Footer";
function Service() {
  return (
    <>
      <Navbar />
      <Hero cName="hero-mid" heroImg={AboutImg} title="Service" text="Bookie" />
      <Footer />
    </>
  );
}
export default Service;
