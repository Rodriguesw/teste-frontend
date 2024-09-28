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
        <p>TAGS:</p>
        <span>Vendas</span>
        <span>Aplicativo</span>
        <span>Legislação</span>
      </div>

      <div className="containerSocialMedia">
        <a href="#">
          <img src="/images/svg/icon-tagsAndSocialMedia-whatsapp.svg" alt="" />
        </a>
        <a href="#">
          <img src="/images/svg/icon-tagsAndSocialMedia-facebook.svg" alt="" />
        </a>
        <a href="#">
          <img src="/images/svg/icon-tagsAndSocialMedia-x.svg" alt="" />
        </a>
        <a href="#">
          <img src="/images/svg/icon-tagsAndSocialMedia-linkedin.svg" alt="" />
        </a>
        <a href="#">
          <img src="/images/svg/icon-tagsAndSocialMedia-email.svg" alt="" />
        </a>

        <button onClick={handleLike}>
          <img src="/images/svg/icon-tagsAndSocialMedia-like.svg" alt="" />
          <p>{likes}</p>
        </button>
      </div>
    </div>
  )
}