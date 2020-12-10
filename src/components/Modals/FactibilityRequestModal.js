import { Modal } from "react-bootstrap";
import styled from "styled-components";

const StyledList = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: 100%;
  grid-row-gap: 10px;
  @media (min-width: 720px) {
    grid-template-columns: 45% 45%;
  }
  li {
    display: flex;
    flex-direction: column;
  }
`;

function FactibilityRequestModal(props) {
  console.log(props.data);
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
              <strong>Nombre:</strong> {props.data.requesterName}
            </li>
            <li>
              <strong>Email del solicitante:</strong>{" "}
              {props.data.requesterEmail}
            </li>
            <li>
              <strong>Teléfono:</strong> {props.data.requesterPhone}
            </li>
            <li>
              <strong>Coordenadas:</strong> {props.data.coordenades}
            </li>
            <li>
              <strong>Marcado como factible:</strong>{" "}
              {props.data.isFactible
                ? props.data.isFactible
                  ? "Sì"
                  : "No"
                : "No ha sido evaluado"}
            </li>
          </StyledList>
        ) : (
          <p>Cargando..</p>
        )}
      </Modal.Body>
    </Modal>
  );
}

export default FactibilityRequestModal;
