import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import AboutImg from "../assets/Aa.jpg";
import Footer from "../Components/Footer";

function About() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={AboutImg}
        title="your books store"
        text="Ready to read"
      />
      <Footer />
    </>
  );
}
export default About;
