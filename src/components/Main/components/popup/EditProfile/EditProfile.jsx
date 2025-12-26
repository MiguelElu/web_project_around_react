import { useState, useContext } from "react";
import CurrentUserContext from "../../../../../contexts/CurrentUserContext";

export default function UserInfo() {
  const userContext = useContext(CurrentUserContext); // Obtiene el objeto currentUser
  const { currentUser, handleUpdateUser } = userContext;
  const [name, setName] = useState(currentUser.name); // Agrega la variable de estado para name
  const [description, setDescription] = useState(currentUser.about); // Agrega la variable de estado para description

  const handleNameChange = (event) => {
    setName(event.target.value); // Actualiza name cuando cambie la entrada
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value); // Actualiza description cuando cambie la entrada
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleUpdateUser([name, description]); // Actualiza la información del usuario
  };
  return (
    <>
      <label className="form__field">
        <input
          className="form__field"
          id="name"
          maxLength="30"
          minLength="1"
          name="card-name"
          placeholder={name}
          value={name}
          required
          type="text"
          onChange={handleNameChange}
        />
        <span className="form__input-error" id="name-error"></span>
      </label>
      <label className="form__field">
        <input
          className="form__field"
          id="job"
          maxLength="30"
          minLength="1"
          name="job"
          placeholder={description}
          value={description}
          required
          type="text"
          onChange={handleDescriptionChange}
        />
        <span className="form__input-error" id="job-error"></span>
      </label>

      <button className="form__button" onClick={handleSubmit}>
        Guardar
      </button>
    </>
  );
}
