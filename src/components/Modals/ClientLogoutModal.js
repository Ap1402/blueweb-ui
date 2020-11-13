import { Modal } from "react-bootstrap";
import authService from "../../services/auth.service";
import LoginForm from "../Forms/Client/LoginForm";

function ClientLogoutModal(props) {
  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter centered">
          Salir de la sesión
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>Seleccione Salir si desea cerrar la sesión</Modal.Body>
      <Modal.Footer>
        <button
          className="btn btn-secondary"
          type="button"
          data-dismiss="modal"
          onClick={()=>props.handleClose(false)}
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
      </Modal.Footer>
    </Modal>
  );
}

export default ClientLogoutModal;
