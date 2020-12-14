import { Modal } from "react-bootstrap";
import styled from "styled-components";

const StyledList = styled.ul`
  list-style: none;
  li {
    display: flex;
    flex-direction: column;
  }
`;

function SeeContactMessageInfo(props) {
  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter centered">
          Información
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {props.data ? (
          <StyledList>
            <li>
              <strong>Nombre:</strong> {props.data.name}
            </li>
            <li>
              <strong>Email del solicitante:</strong> {props.data.email}
            </li>
            <li>
              <strong>Teléfono:</strong> {props.data.phone}
            </li>
            <li>
              <strong>Razón:</strong>{" "}
              {props.data.reason
                ? props.data.reason.name
                : "No especificado o razón desactivada"}
            </li>
            <li>
              <strong>Mensaje:</strong> {props.data.message}
            </li>
          </StyledList>
        ) : (
          <p>Cargando..</p>
        )}
      </Modal.Body>
    </Modal>
  );
}

export default SeeContactMessageInfo;
