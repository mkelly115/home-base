import React from "react";
import { useFetch } from "./hooks";

export default function Joke() {

    useFetch('https://official-joke-api.appspot.com/jokes/random', {})

  const { setup, punchline } = useFetch('https://official-joke-api.appspot.com/jokes/random', {})

  return (
    <div>
      <h3>Joke of the session</h3>
      <p>{setup}</p>
      <p>
        <em>{punchline}</em>
      </p>
    </div>
  );
}
fetch("https://official-joke-api.appspot.com/jokes/random")