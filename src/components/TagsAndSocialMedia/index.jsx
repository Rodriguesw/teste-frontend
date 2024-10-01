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
        <a href="/" className="flex">
          <img src="/images/svg/icon-tagsAndSocialMedia-whatsapp.svg" alt="Ícone do Whatsapp" />
        </a>
        <a href="/"className="flex">
          <img src="/images/svg/icon-tagsAndSocialMedia-facebook.svg" alt="Ícone do Facebook" />
        </a>
        <a href="/"className="flex">
          <img src="/images/svg/icon-tagsAndSocialMedia-x.svg" alt="Ícone do X" />
        </a>
        <a href="/"className="flex">
          <img src="/images/svg/icon-tagsAndSocialMedia-linkedin.svg" alt="Ícone do LinkedIn" />
        </a>
        <a href="/"className="flex">
          <img src="/images/svg/icon-tagsAndSocialMedia-email.svg" alt="Ícone de e-mail" />
        </a>

        <button onClick={handleLike} className="flex">
          <img src="/images/svg/icon-tagsAndSocialMedia-like.svg" alt="Ícone de positivo" />
          <p>{likes}</p>
        </button>
      </div>
    </div>
  )
}