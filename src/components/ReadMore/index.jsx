import { useState } from "react";

import {ReadMoreData} from '../../utils/ReadMoreData'

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
               src="/images/svg/icon-commentAndLike-calendar-white.svg"
               alt="Ícone de calendário branco"
             />
             <p>{item.date}</p>
           </div>

           <div className="informationReadingTimeReadMore">
             <img
               src="/images/svg/icon-commentAndLike-clock-white.svg"
               alt="Ícone de relógio branco"
             />
             <p>{item.readingTime}</p>
           </div>

           <button className="buttonReadMore" onClick={handleLike}>
             <img src="/images/svg/icon-commentAndLike-like.svg" alt="Ícone de positivo" />
             <p>{likes}</p>
           </button>
         </div>
       </div>
      ))}
      </div>
    </div>
  )
}