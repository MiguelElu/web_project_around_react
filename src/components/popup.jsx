export default function Popup(props) {
  //los hijos son el contenido de la ventana emergente
  const { onClose, title, children } = props;
  return (
    <>
      <div className="fullview">
        {title ? (
          <form className="form form-container" noValidate>
            <div className="form__cancel-container">
              <img
                className="form__cancel-button button-active"
                src="../../images/Close Icon.png"
                alt="Close icon"
                onClick={onClose}
              />
            </div>
            <div className="form__elements">
              <h2 className="form__title">{title}</h2>
              {children}
            </div>
          </form>
        ) : (
          <div class="fullview__container">
            {children}
            <img
              className="fullview__cancel-button button-active"
              src="../../images/Close Icon.png"
              alt="Close icon"
              onClick={onClose}
            />
          </div>
        )}
      </div>
    </>
  );
}
