import { useState, useContext } from "react";
import CurrentUserContext from "../../../../../contexts/CurrentUserContext";
import Card from "../../Card/Card";

export default function NewCard() {
  const userContext = useContext(CurrentUserContext); // Obtiene el objeto currentUser
  const { handleAddPlaceSubmit } = userContext;
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleURLChange = (event) => {
    setUrl(event.target.value);
  };

  function handleSubmit(e) {
    e.preventDefault();

    handleAddPlaceSubmit({ name: name, url: url });
  }

  return (
    <>
      <label className="form__field">
        <input
          className="form__field"
          id="card-name"
          maxLength="30"
          minLength="1"
          name="card-name"
          placeholder="Title"
          required
          type="text"
          value={name}
          onChange={handleNameChange}
        />
        <span className="form__input-error" id="card-name-error"></span>
      </label>
      <label className="form__field">
        <input
          className="form__field"
          id="card-link"
          name="link"
          placeholder="Image link"
          required
          type="url"
          value={url}
          onChange={handleURLChange}
        />
        <span className="form__input-error" id="card-link-error"></span>
      </label>

      <button className="form__button" type="submit" onClick={handleSubmit}>
        Guardar
      </button>
    </>
  );
}
