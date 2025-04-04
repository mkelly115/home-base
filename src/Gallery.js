import React, { useState, useEffect } from "react";
import PICTURES from "./data/pictures";

const SECONDS = 1000;
const minimumDelay = 1 * SECONDS;
const minimumIncrement = 1

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [delay, setDelay] = useState(3 * SECONDS);
  const [increment, setIncrement] = useState(1);

  useEffect(() => {
    console.log("delay", delay , 'increment', increment);

    const interval = setInterval(() => {
      setIndex((storedIndex) => {
        return (storedIndex + increment) % PICTURES.length;
      });
    }, delay);

    return () => {
      clearInterval(interval);
    };
  }, [delay, increment]);

  const updateDelay = (event) => {
    const delay = Number(event.target.value) * SECONDS;

    setDelay(delay < minimumDelay ? minimumDelay : delay);
  };

  const updateIncrement = event => {
    const increment = Number(event.target.value)

    setIncrement( increment < minimumIncrement ? minimumIncrement : increment);
  }

  return (
    <div className="gallery">
      <img src={PICTURES[index].image} alt="gallery" />
      <div className="multiform">
        <div>
          Gallery transition delay (seconds):
          <input type="number" onChange={updateDelay}></input>
        </div>
        <div>
            Gallery increment:
            <input type="number" onChange={updateIncrement}></input>
        </div>
      </div>
    </div>
  );
}
