import React from "react";
import "./PostCard.css"

function PostCard({ id, title, body }) {
  return (
    <div className="post-content">
      <span>{id}</span>
      <h3>{title}</h3>
      <p>{body}</p>
    </div>
  );
}

export default PostCard;
