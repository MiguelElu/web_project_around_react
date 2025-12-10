import { useState } from "react";
import avatar from "../../images/Avatar.png";
import NewCard from "./form/card/card";
import Popup from "./popup";
import UserInfo from "./form/user_info/user_info";
import ChangeAvatar from "./form/avatar/avatar";
import Card from "./Card";
import ImagePopup from "./ImagePopup";

const cards = [
  {
    isLiked: false,
    _id: "5d1f0611d321eb4bdcd707dd",
    name: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg",
    owner: "5d1f0611d321eb4bdcd707dd",
    createdAt: "2019-07-05T08:10:57.741Z",
  },
  {
    isLiked: false,
    _id: "5d1f064ed321eb4bdcd707de",
    name: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg",
    owner: "5d1f0611d321eb4bdcd707dd",
    createdAt: "2019-07-05T08:11:58.324Z",
  },
];

console.log(cards);

function Body() {
  const [popup, setPopup] = useState(null);
  const newCardPopup = { title: "Nuevo lugar", children: <NewCard /> };
  const editInfoPopup = { title: "Editar Informacion", children: <UserInfo /> };
  const changeAvatarPopup = {
    title: "Cambair Perfil",
    children: <ChangeAvatar />,
  };

  function handleOpenPopup(popup) {
    setPopup(popup);
  }

  function handleClosePopup() {
    setPopup(null);
  }

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
            <img className="content__avatar" src={avatar} />
          </div>
          <div className="content__profile-info">
            <div className="content__name-container">
              <h2 className="content__name"></h2>
              <img
                className="content__edit-button button-active"
                src="../../images/Edit Button.png"
                onClick={() => handleOpenPopup(editInfoPopup)}
              />
            </div>
            <p className="content__job"></p>
          </div>
          <img
            className="content__add-button button-active"
            src="../../images/Add Button.png"
            onClick={() => handleOpenPopup(newCardPopup)}
          />
        </section>
        <section className="content__gallery">
          <div className="content__gallery-grid">
            <ul className="cards__list">
              {cards.map((card) => (
                <Card
                  key={card._id}
                  card={card}
                  handleOpenPopup={() =>
                    handleOpenPopup({
                      title: null,
                      children: <ImagePopup card={card} />,
                      onClose: handleClosePopup,
                    })
                  }
                />
              ))}
            </ul>
          </div>
        </section>
      </main>
    </>
  );
}

export default Body;
