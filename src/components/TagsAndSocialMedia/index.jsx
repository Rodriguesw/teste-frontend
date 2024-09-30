import { useState } from "react";
import "./styles.css"

export function TagsAndSocialMedia() {
  const [likes, setLikes] = useState(0);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  return (
    <div className="containerTagsAndSocialMedia">
      <div className="containerTags">
        <p className="flex">TAGS:</p>
        <span className="flex">Vendas</span>
        <span className="flex">Aplicativo</span>
        <span className="flex">Legislação</span>
      </div>

      <div className="containerSocialMedia">
        <a href="#" className="flex">
          <img src="/images/svg/icon-tagsAndSocialMedia-whatsapp.svg" alt="" />
        </a>
        <a href="#"className="flex">
          <img src="/images/svg/icon-tagsAndSocialMedia-facebook.svg" alt="" />
        </a>
        <a href="#"className="flex">
          <img src="/images/svg/icon-tagsAndSocialMedia-x.svg" alt="" />
        </a>
        <a href="#"className="flex">
          <img src="/images/svg/icon-tagsAndSocialMedia-linkedin.svg" alt="" />
        </a>
        <a href="#"className="flex">
          <img src="/images/svg/icon-tagsAndSocialMedia-email.svg" alt="" />
        </a>

        <button onClick={handleLike} className="flex">
          <img src="/images/svg/icon-tagsAndSocialMedia-like.svg" alt="" />
          <p>{likes}</p>
        </button>
      </div>
    </div>
  )
}