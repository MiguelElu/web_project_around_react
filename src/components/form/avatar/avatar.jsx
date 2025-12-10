export default function ChangeAvatar() {
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
        />
        <span className="form__input-error" id="avatar-url-error"></span>
      </label>
      <button className="form__button" type="submit">
        Guardar
      </button>
    </>
  );
}
