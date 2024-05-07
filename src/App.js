import "./App.css";
import { useState } from "react";
import MinutesToHours from "./component/MinutesToHours";
import KmToM from "./component/KmToM";

function App() {
  const [index, setIndex] = useState("0");
  const onSelect = (event) => {
    setIndex(event.target.value);
  };

  return (
    <div className="head">
      <div className="nav-bar">
        <h1>Super Convertor</h1>
      </div>
      <div className="body-content">
        <select className="Selection" value={index} onChange={onSelect}>
          <option value="0">Minutes & Hours</option>
          <option value="1">Km & M</option>
        </select>
        {index === "0" ? <MinutesToHours /> : null}
        {index === "1" ? <KmToM /> : null}
      </div>
    </div>
  );
}

export default App;
