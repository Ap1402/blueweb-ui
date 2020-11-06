import { Modal } from "react-bootstrap";

function SeeContactMessageInfo(props) {
  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter centered">
          Información del mensaje
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>{props.children}</Modal.Body>
    </Modal>
  );
}

export default SeeContactMessageInfo;
