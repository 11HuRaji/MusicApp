import { useState } from "react";
import LikeButton from "./LikeButton";
import jbImage from "./assets/images/jb_image.jpg";
import jbImage2 from "./assets/images/jb_grammys.jpg";
import "./App.css";

function App() {
  const [tracks, setTracks] = useState([]);
  console.log(tracks);
  const [inputText, setInputText] = useState("");

  return (
    <>
      <div>
        <h1>Justin Beiber's Tracklist</h1>
        <img src={jbImage} alt="An image of Justin Beiber" />
        <img src={jbImage2} alt="Another image of Justin Beiber" />
        <p>
          Bio: He is the son of Pattie Mallette and Jeremy Bieber. He is of
          French-Canadian, Irish, German, English, and Scottish descent. He has
          three younger half-siblings via his father. Growing up, he showed a
          strong interest in music and taught himself to play many instruments,
          including, guitar, drums, piano and trumpet.
        </p>
        <ul id="tracklist">
          <li>
            Baby 3:33 <LikeButton />
          </li>
          <li>
            One Time 3:35 <LikeButton />
          </li>
          <li>
            Never Say Never 3:47 <LikeButton />
          </li>
          <li>
            Somebody to Love Remix 3:40 <LikeButton />
          </li>
          {tracks}
        </ul>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setTracks((state) => [
              ...state,
              <li>
                {inputText} <LikeButton />
              </li>,
            ]);
          }}
        >
          <input
            type="text"
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Enter your favourite track"
          />
          <button type="submit">Add Track</button>
        </form>
      </div>
    </>
  );
}

export default App;
