import { useState } from "react";

import {ReadMoreData} from './ReadMoreData'

import "./styles.css"

export function ReadMore() {
  const [likes, setLikes] = useState(0);

  const handleLike = () => {
    setLikes(likes + 1);
  };
  return (
    <div className="containerReadMore">
      <h2>Leia também...</h2>

      <div className="containerReadCard">
      {ReadMoreData.map((item) => (
         <div key={item.id} className="contentReadMore">
         <img src="/images/png/img-header-people.png" alt="Imagem de uma pessoa" />
         <h5>{item.title}</h5>

         <p>
            {item.description}
        </p>

         <div className="informationsReadMore">
           <div className="informationDateReadMore">
             <img
               src="/images/svg/icon-commentAndLike-calendar-black.svg"
               alt=""
             />
             <p>{item.date}</p>
           </div>

           <div className="informationReadingTimeReadMore">
             <img
               src="/images/svg/icon-commentAndLike-clock-black.svg"
               alt=""
             />
             <p>{item.readingTime}</p>
           </div>

           <button className="buttonReadMore" onClick={handleLike}>
             <img src="/images/svg/icon-commentAndLike-like.svg" alt="" />
             <p>{likes}</p>
           </button>
         </div>
       </div>
      ))}
      </div>
    </div>
  )
}