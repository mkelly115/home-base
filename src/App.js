import { useState } from "react";
import Joke from "./Joke";
import Stories from "./Stories";
import Tasks from "./Tasks";
import Gallery from "./Gallery";
import Matrix from "./Matrix";

function App() {
  const [userQuery, setUserQuery] = useState('');
  const [showGallery, setShowGallery] = useState(true)

  const searchQuery = () => {
    window.open(`https://google.com/search?q=${userQuery}`, "_blank");
  };

  const toggleShowGallery = () => {
    setShowGallery(!showGallery);
  }

  const handleKeyPress = event => {
    if(event.key === 'Enter')
      searchQuery();
  }

  const updateUserQuery = (event) => {
    console.log("userQuery", userQuery);

    setUserQuery(event.target.value);
  };

  return (
    <div className="App">
      <h1>Hello Michael</h1>
      <div className="form">
        <input value={userQuery}
         onChange={updateUserQuery}
         onKeyDown={handleKeyPress} />
        <button onClick={searchQuery}>Search</button>
      </div>
      <hr />
      <Joke />
      <hr />
      <Tasks />
      <hr />
      <div>
        {
          showGallery ? <Gallery /> : null
        }
        <button onClick={toggleShowGallery}>
          {showGallery ? 'Hide' : 'Show'} Gallery
        </button>
      </div>
      <hr />
      <Matrix />
      <hr />
      <Stories />
    </div>
  );
}

export default App;
