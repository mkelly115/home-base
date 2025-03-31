import React, { useEffect, useState } from "react";

export default function Joke() {
  const [joke, setJoke] = useState({});

  useEffect(() => {
    fetch("https://official-joke-api.appspot.com/jokes/random")
      .then((response) => response.json())
      .then((data) => {
        console.log("joke json", data);
        setJoke(data)
      });
  }, []);

  const { setup, punchline } = joke;

  return (
    <div>
      <h3>Joke of the session</h3>
      <p>{setup}</p>
      <p><em>{punchline}</em></p>
    </div>
  );
}
