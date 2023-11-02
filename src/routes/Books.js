import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import AboutImg from "../assets/Cc.jpg";
import Trip from "../Components/Trip";

function Books() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={AboutImg}
        title="Booktalks"
        text="classical books"
      />

      <Trip />
    </>
  );
}
export default Books;
