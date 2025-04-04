import React, { useState, useEffect } from "react";
import PICTURES from "./data/pictures";

export default function Gallery() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(storedIndex => {
        return (storedIndex + 1) % PICTURES.length;
      });
    }, 3000);

    return () => {
        clearInterval(interval)
    };
  }, []);

  return (
    <div className="gallery">
      <img src={PICTURES[index].image} alt="gallery" />
    </div>
  );
}
