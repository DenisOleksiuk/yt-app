import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import useVideos from "../hooks/useVideos";

const App = () => {
  const [videoSelected, setVideoSelected] = useState(null);
  const [videos, search] = useVideos("buildings");

  useEffect(() => {
    setVideoSelected(videos[0]);
  }, [videos]);

  return (
    <div className="ui container">
      <SearchBar onSubmit={search} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={videoSelected} />
          </div>
          <div className="five wide column">
            <VideoList onVideoSelect={setVideoSelected} videos={videos} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default App;
