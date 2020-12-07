import authService from "../../services/auth.service";

const LogoutModal = () => {
  return (
    <div
      className="modal fade"
      id="logoutModal"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              ¿Desea cerrar su sesión?
            </h5>
            <button
              className="close"
              type="button"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="modal-body">
            Seleccione "Salir" si está listo para cerrar su sesión.
          </div>
          <div className="modal-footer">
            <button
              className="btn btn-secondary"
              type="button"
              data-dismiss="modal"
            >
              Cancelar
            </button>
            <a
              className="btn btn-primary"
              onClick={(e) => authService.logout()}
              href="/"
            >
              Salir
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoutModal;
