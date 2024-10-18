



import { useState } from "react";
export function TwitterFollowCard({ children, userName, name }) {


  const [isFollowing, setIsFollowing] = useState(false);

  const estado = () => {
    setIsFollowing(!isFollowing);
  };

  {
    /* esto le da interactividad a nuestro componenete*/
  }
  let text = isFollowing ? "Siguiendo" : "Seguir";
  const buttonClassName = isFollowing
    ? "tw-followCard-button is-following"
    : "tw-followCard-button";

  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img
          className="tw-followCard-avatar"
          src={`https://unavatar.io/${userName}`}
          alt="imagen avatar"
        />
        <div className="tw-followCard-info">
          <strong>{children || name}</strong>
          <span className="tw-followCard-infoUserName">@{userName}</span>
        </div>
      </header>

      <aside>
        <button className={buttonClassName} onClick={estado}>
          {text}
        </button>
      </aside>
    </article>
  );
}    





















