import React from "react";
import { useState } from "react";

const MinutesToHours = () => {
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
      <h3 className="small-title">Minutes To Hours</h3>
      <label htmlFor="minutes"> Minutes</label>
      <div>
        <input
          value={invert ? amount * 60 : amount}
          id="minutes"
          placeholder="Minutes"
          type="number"
          onChange={onChange}
          disabled={invert}
        />
      </div>

      <label htmlFor="hours"> Hours</label>
      <input
        value={invert ? amount : Math.round(amount / 60)}
        id="hours"
        placeholder="Hours"
        type="number"
        onChange={onChange}
        disabled={!invert}
      />

      <button onClick={reset}>RESET</button>
      <button onClick={onFlip}>Invert</button>
    </div>
  );
};

export default MinutesToHours;
