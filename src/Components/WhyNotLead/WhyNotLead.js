import * as React from "react";
import "./WhyNotLead.css";
import LeadMap from "../../map.png";
import Gif from "../../giphy.gif";

class WhyNotLead extends React.Component {
  render() {
    return (
      <div className="Lead_wrapper">
        <img
          src={LeadMap}
          style={{ width: "50vw", height: "60vh" }}
          className="lead_image"
        />
        <p>
          <b>
            სისხლში მომატებული ტყვიის შემცველობის გავრცელება 2-7 წლის ასაკის
            ბავშვებში, რეგიონების მიხედვით ≥ 10 მკგ/დლ კონცენტრაციებზე.
          </b>
        </p>
      </div>
    );
  }
}

export default WhyNotLead;
