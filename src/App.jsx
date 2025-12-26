import React, { useEffect, useState } from "react";
import "../blocks/page.css";
import "../blocks/header.css";
import "../blocks/content.css";
import "../blocks/footer.css";
import "../blocks/form.css";
import "../blocks/fullview.css";
import "../blocks/confirmation.css";
import "../vendor/fonts.css";
import "../vendor/normalize.css";
import API from "./utils/api";
import Header from "./components/Header/header";
import Body from "./components/Main/Main";
import Footer from "./components/Footer/footer";
import NewCard from "./components/popup/NewCard/NewCard";
import UserInfo from "./components/popup/EditProfile/EditProfile";
import ChangeAvatar from "./components/popup/EditAvatar/EditAvatar";
import CurrentUserContext from "./contexts/CurrentUserContext";

function App() {
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    API.load_user_info().then((data) => {
      setCurrentUser(data);
    });
  }, []);

  const [popup, setPopup] = useState(null);
  const [cards, setCards] = useState([]);
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
  const handleUpdateUser = (data) => {
    (async () => {
      await API.update_info(data).then((newData) => {
        setCurrentUser(newData);
        handleClosePopup();
      });
    })();
  };

  const handleAddPlaceSubmit = (card) => {
    (async () => {
      await API.add_card(card).then((data) => {
        setCards([data, ...cards]);
        handleClosePopup();
      });
    })();
  };

  const onAvatarUpdate = (avatar) => {
    (async () => {
      await API.change_picture(avatar).then((newData) => {
        setCurrentUser(newData);
        handleClosePopup();
      });
    })();
  };

  async function handleCardLike(card) {
    // Toggle the like status in the API
    API.like_toogle(card.isLiked, card._id);

    // Update the card's isLiked status in state to trigger re-render
    await setCards((state) =>
      state.map((currentCard) =>
        currentCard._id === card._id
          ? { ...currentCard, isLiked: !currentCard.isLiked }
          : currentCard
      )
    );
  }

  async function handleCardDelete(card) {
    // Toggle the like status in the API
    API.delete_photo(card._id);

    // Update the card's isLiked status in state to trigger re-render
    await setCards((state) =>
      state.filter((currentCard) => currentCard._id !== card._id)
    );
  }

  useEffect(() => {
    API.get_cards().then((data) => {
      setCards(data);
    });
  }, []);

  return (
    <CurrentUserContext.Provider
      value={{
        currentUser,
        handleUpdateUser,
        onAvatarUpdate,
        handleAddPlaceSubmit,
      }}
    >
      <div className="page">
        <Header></Header>
        <Body
          popup={popup}
          cards={cards}
          newCardPopup={newCardPopup}
          editInfoPopup={editInfoPopup}
          changeAvatarPopup={changeAvatarPopup}
          handleOpenPopup={handleOpenPopup}
          handleClosePopup={handleClosePopup}
          handleCardLike={handleCardLike}
          handleCardDelete={handleCardDelete}
        ></Body>
        <Footer></Footer>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
