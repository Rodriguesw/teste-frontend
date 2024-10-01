import React, { useState } from "react";

import { CommentAndLikeData } from "../../utils/CommentAndLikeData";

import "./styles.css";

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
                src="/images/svg/icon-commentAndLike-calendar-white.svg"
                alt="Ícone de calendário branco"
              />
              <p>{item.date}</p>
            </div>

            <div className="informationReadingTime">
              <img
                src="/images/svg/icon-commentAndLike-clock-white.svg"
                alt="Ícone de relógio branco"
              />
              <p>{item.readingTime}</p>
            </div>

            <button className="buttonCommentAndLike" onClick={handleLike}>
              <img src="/images/svg/icon-commentAndLike-like.svg" alt="Ícone de positivo" />
              <p>{likes}</p>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
