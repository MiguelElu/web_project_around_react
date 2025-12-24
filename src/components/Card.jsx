export default function Card(props) {
  const { name, link, isLiked } = props.card;
  return (
    <li className="content__foto-item">
      <img
        className="content__foto"
        src={link}
        alt=""
        onClick={props.handleOpenPopup}
      />
      <div className="content__foto-tag">
        <p className="content__photo-tag-name">{name}</p>
        {!isLiked ? (
          <img
            className="content__like button-active"
            src="./images/like.png"
            alt="like button"
            onClick={props.handleLike}
          />
        ) : (
          <img
            className="content__like button-active"
            src="./images/like_active.png"
            alt="like button"
            onClick={props.handleLike}
          />
        )}
        <img
          className="content__trash-icon button-active"
          src="./images/trash.png"
          alt="Trash Icon"
          onClick={props.handleDelete}
        />
      </div>
    </li>
  );
}
