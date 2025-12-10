export default function UserInfo() {
  return (
    <>
      <label className="form__field">
        <input
          className="form__field"
          id="name"
          maxLength="30"
          minLength="1"
          name="card-name"
          placeholder="Name"
          required
          type="text"
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
          placeholder="Job"
          required
          type="text"
        />
        <span className="form__input-error" id="job-error"></span>
      </label>

      <button className="form__button" type="submit">
        Guardar
      </button>
    </>
  );
}
