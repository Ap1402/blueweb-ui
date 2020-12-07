import { Modal } from "react-bootstrap";
import dayjs from "dayjs";
import styled from "styled-components";

const StyledModalInner = styled.ul`
  list-style: none;
  width: 100%;
  strong {
    font-size: 15px;
    color: black;
    width: 100%;
    margin-left: 0;
  }
  li {
    display: flex;
    flex-direction: column;
    font-size: 15px;
    margin: 10px 0;
  }
`;

function ClientInfoModal(props) {
  const createInnerElements = (info) => {
    return (
      <StyledModalInner>
        <li>
          <strong>Nombre del cliente: </strong>
          {info.names.toUpperCase() + " " + info.lastNames}
        </li>
        {info.isEnterprise ? (
          <>
            <li>
              <strong>Razón social: </strong>
              {info.socialReason ? info.socialReason.toUpperCase() : ""}
            </li>
            <li>
              <strong>Razón comercial: </strong>
              {info.commercialReason ? info.commercialReason.toUpperCase() : ""}
            </li>
          </>
        ) : (
          ""
        )}
        <li>
          <strong>Cédula o rif: </strong>
          {info.identification.toUpperCase() + " - " + info.dni}
        </li>
        <li>
          <strong>Teléfono del cliente: </strong>
          {info.phone}
        </li>
        <li>
          <strong>Dirección: </strong>
          {info.address}
        </li>
        <li>
          <strong>Fecha de ingreso del cliente: </strong>
          {dayjs(info.createdAt).format("DD/MM/YY HH:mm")}
        </li>
      </StyledModalInner>
    );
  };

  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton closeLabel>
        <Modal.Title id="contained-modal-title-vcenter centered">
          Información del cliente
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {props.clientInfo ? (
          createInnerElements(props.clientInfo)
        ) : (
          <p>Cargando...</p>
        )}
      </Modal.Body>
    </Modal>
  );
}

export default ClientInfoModal;
