import React, { useState } from "react";
import "./styles.css";
import { CommentAndLikeData } from "./CommentAndLikeData";

export function CommentAndLike() {
  const [likes, setLikes] = useState(0);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  return (
    <div className="containerCommentAndLike">
      {CommentAndLikeData.map((item) => (
        <div key={item.id} className="contentCommentAndLike">
          <h4>{item.title}</h4>

          <p>
           {item.description}
          </p>

          <div className="informationsCommentAndLike">
            <div className="informationDate">
              <img
                src="/images/svg/icon-commentAndLike-calendar-black.svg"
                alt=""
              />
              <p>{item.date}</p>
            </div>

            <div className="informationReadingTime">
              <img
                src="/images/svg/icon-commentAndLike-clock-black.svg"
                alt=""
              />
              <p>{item.readingTime}</p>
            </div>

            <button className="buttonCommentAndLike" onClick={handleLike}>
              <img src="/images/svg/icon-commentAndLike-like.svg" alt="" />
              <p>{likes}</p>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
