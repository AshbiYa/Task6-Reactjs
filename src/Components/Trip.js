import "./TripStyle.css";
import TripData from "./TripData";
import Trip1 from "../assets/Cc.jpg";
import Trip2 from "../assets/Aa.jpg";
import Trip3 from "../assets/Dd.jpg";

function Trip() {
  return (
    <div className="trip">
      <h1>Classical Books</h1>
      <p>u can discover unique classical books here</p>
      <div className="tripcard">
        <TripData
          image={Trip1}
          heading="Reduce&recycle"
          text="You may be surprised that a well-crafted book introduction is your secret weapon to stand out. If you want happy readers before they open to the first chapter, 
        you’ve come to the right place"
        />

        <TripData
          image={Trip2}
          heading="Adventures"
          text="You may be surprised that a well-crafted book introduction is your secret weapon to stand out. If you want happy readers before they open to the first chapter, 
        you’ve come to the right place"
        />
        <TripData
          image={Trip3}
          heading="The catcher"
          text="You may be surprised that a well-crafted book introduction is your secret weapon to stand out. If you want happy readers before they open to the first chapter, 
        you’ve come to the right place"
        />
      </div>
    </div>
  );
}
export default Trip;
