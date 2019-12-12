import * as React from "react";
import "./Map.css";
import Kaxeti from "../../svg/kaxeti.svg";
import Mtianeti from "../../svg/mtianeti.svg";
import Kartli from "../../svg/kartli.svg";
import Samcxe from "../../svg/samcxejavaxeti.svg";
import Imereti from "../../svg/imereti.svg";
import Racha from "../../svg/racha_lechxumi.svg";
import Adjara from "../../svg/adjara.svg";
import Guria from "../../svg/guria.svg";
import Samegrelo from "../../svg/samegrelo.svg";
import Abxazeti from "../../svg/abxazeti.svg";
import Svaneti from "../../svg/svaneti.svg";

class Map extends React.Component {
  render() {
    return (
      <div className="main_map">
        <div className="map_wrapper">
          <div className="kaxeti">
            <img src={Kaxeti} />
            <p>4%</p>
          </div>
          <div className="mtianeti">
            <img src={Mtianeti} />
          </div>
          <div className="kartli">
            <img src={Kartli} />
            <p>6%</p>
          </div>
          <div className="samcxe">
            <img src={Samcxe} />
          </div>
          <div className="imereti">
            <img src={Imereti} />
          </div>
          <div className="racha">
            <img src={Racha} />
          </div>
          <div className="adjara">
            <img src={Adjara} />
            <p>50%</p>
          </div>
          <div className="guria">
            <img src={Guria} />
          </div>
          <div className="samegrelo">
            <img src={Samegrelo} />
          </div>
          <div className="abxazeti">
            <img src={Abxazeti} />
          </div>
          <div className="svaneti">
            <img src={Svaneti} />
          </div>
        </div>
      </div>
    );
  }
}

export default Map;
