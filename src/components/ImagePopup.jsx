export default function ImagePopup(props) {
  const { link } = props.card;
  return (
    <div className="fullview__container">
      <img
        src={link}
        alt="Paisaje en vista completa"
        className="fullview__image"
      />
    </div>
  );
}
