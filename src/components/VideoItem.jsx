import React from "react";
import "./VideoItem.css";

export default function VideoItem({ video, onVideoSelect }) {
  return (
    <div className="video-item item" onClick={() => onVideoSelect(video)}>
      <img
        className="ui image"
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.description}
      />
      <div className="content">
        <h4 className="header">{video.snippet.title}</h4>
      </div>
    </div>
  );
}
