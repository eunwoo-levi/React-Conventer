import React from "react";
import { useState } from "react";

const KmToM = () => {
  const [amount, setamount] = useState(0);
  const [invert, setInvert] = useState(false);

  const onChange = (event) => {
    setamount(event.target.value);
  };

  const reset = (event) => setamount(0);
  const onFlip = () => {
    reset();
    setInvert((current) => !current);
  };
  return (
    <div>
      <h3 className="small-title"> Km To M</h3>
      <label htmlFor="kilos"> Km</label>
      <div>
        <input
          value={invert ? amount * 1000 : amount}
          id="kilos"
          placeholder="Kilos"
          type="number"
          onChange={onChange}
          disabled={invert}
        />
      </div>

      <label htmlFor="meters"> M</label>
      <input
        value={invert ? amount : Math.round(amount / 1000)}
        id="meters"
        placeholder="Meters"
        type="number"
        onChange={onChange}
        disabled={!invert}
      />

      <button onClick={reset}>RESET</button>
      <button onClick={onFlip}>Invert</button>
    </div>
  );
};

export default KmToM;
