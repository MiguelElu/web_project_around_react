import { useRef } from "react";
import { useContext } from "react";
import CurrentUserContext from "../../../../../contexts/CurrentUserContext";

export default function ChangeAvatar() {
  const avatarRef = useRef();
  const userContext = useContext(CurrentUserContext); // Obtiene el objeto currentUser
  const { onAvatarUpdate } = userContext;

  function handleSubmit(e) {
    e.preventDefault();

    onAvatarUpdate(avatarRef.current.value);
  }
  return (
    <>
      <label className="form__field">
        <input
          className="form__field"
          id="url"
          name="card-name"
          placeholder="Title"
          required
          type="url"
          ref={avatarRef}
        />
        <span className="form__input-error" id="avatar-url-error"></span>
      </label>
      <button className="form__button" onClick={handleSubmit}>
        Guardar
      </button>
    </>
  );
}
