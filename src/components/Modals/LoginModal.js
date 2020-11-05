import { Modal } from "react-bootstrap";
import LoginForm from "../Forms/Client/LoginForm";

function LoginModal(props) {
  return (
    <Modal
      {...props}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter centered">
          Ingreso
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
          <LoginForm></LoginForm>

      </Modal.Body>
    </Modal>
  );
}

export default LoginModal;
