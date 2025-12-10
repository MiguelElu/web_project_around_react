export default function NewCard() {
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
        />
        <span className="form__input-error" id="card-link-error"></span>
      </label>

      <button className="form__button" type="submit">
        Guardar
      </button>
    </>
  );
}
