import React, { useState } from "react";

export default function LikeButton() {
  const [likeCount, setLikeCount] = useState(0);
  const incrementLikes = () => setLikeCount((state) => state + 1);
  
  return (
    <>
      <button onClick={incrementLikes}>Likes {likeCount}</button>
    </>
  );
}
