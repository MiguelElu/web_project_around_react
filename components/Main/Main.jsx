import { useContext } from "react";

import Popup from "./components/popup/popup";
import Card from "./components/Card/Card.jsx";
import ImagePopup from "./components/popup/ImagePopup.jsx";
import CurrentUserContext from "../../src/contexts/CurrentUserContext";

function Body(props) {
  const { currentUser } = useContext(CurrentUserContext);
  const {
    popup,
    cards,
    newCardPopup,
    editInfoPopup,
    changeAvatarPopup,
    handleOpenPopup,
    handleClosePopup,
    handleCardLike,
    handleCardDelete,
  } = props;

  return (
    <>
      <main className="content">
        {popup && (
          <Popup onClose={handleClosePopup} title={popup.title}>
            {popup.children}
          </Popup>
        )}
        <section className="content__profile">
          <div className="content__avatar-container">
            <div className="content__avatar-edit">
              <img
                src="../../images/edit_symbol.png"
                onClick={() => handleOpenPopup(changeAvatarPopup)}
              />
            </div>
            <img className="content__avatar" src={currentUser.avatar} />
          </div>
          <div className="content__profile-info">
            <div className="content__name-container">
              <h2 className="content__name">{currentUser.name}</h2>
              <img
                className="content__edit-button button-active"
                src="../../images/Edit Button.png"
                onClick={() => handleOpenPopup(editInfoPopup)}
              />
            </div>
            <p className="content__job">{currentUser.about}</p>
          </div>
          <img
            className="content__add-button button-active"
            src="../../images/Add Button.png"
            onClick={() => handleOpenPopup(newCardPopup)}
          />
        </section>
        <section className="content__gallery">
          <ul className="content__gallery-grid">
            {cards.map((card) => (
              <Card
                key={card._id}
                card={card}
                isLiked={card.isLiked}
                handleOpenPopup={() =>
                  handleOpenPopup({
                    title: null,
                    children: <ImagePopup card={card} />,
                    onClose: handleClosePopup,
                  })
                }
                handleLike={() => handleCardLike(card)}
                handleDelete={() => handleCardDelete(card)}
              />
            ))}
          </ul>
        </section>
      </main>
    </>
  );
}

export default Body;
