import React, { useState } from "react";
import MATRIX_PICS from "./data/matrix";
import { useDynamicTransition } from "./hooks";

const SECONDS = 1000;
const minimumDelay = 0.05 * SECONDS;
const minimumIncrement = 1;

export default function Matrix() {
  const [delay, setDelay] = useState(0.08 * SECONDS);
  const [increment, setIncrement] = useState(1);

  const index = useDynamicTransition({ increment, delay, length: MATRIX_PICS.length})

  const updateDelay = (event) => {
    const delay = Number(event.target.value) * SECONDS;

    setDelay(delay < minimumDelay ? minimumDelay : delay);
  };

  const updateIncrement = (event) => {
    const increment = Number(event.target.value);

    setIncrement(increment < minimumIncrement ? minimumIncrement : increment);
  };

  return (
    <div className="Matrix">
      <img src={MATRIX_PICS[index]} alt="matrix" />
      <div className="multiform">
        <div>
          Matrix transition delay (seconds):
          <input type="number" onChange={updateDelay}></input>
        </div>
        <div>
          Matrix gallery increment:
          <input type="number" onChange={updateIncrement}></input>
        </div>
      </div>
    </div>
  );
}
