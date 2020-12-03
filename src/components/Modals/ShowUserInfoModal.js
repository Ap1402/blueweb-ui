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

function UserInfoModal(props) {
  const createInnerElements = (info) => {
    return (
      <StyledModalInner>
        <li>
          <strong>Nombre de usuario: </strong>
          {info.username}
        </li>
        <li>
          <strong>Nombre del cliente: </strong>
          {info.client
            ? info.client.names.toUpperCase() + " " + info.client.lastNames
            : "Parece que no se pudo encontrar el nombre de este cliente"}
        </li>
        <li>
          <strong>Fecha de del usuario: </strong>
          {dayjs(info.createdAt).format("DD/MM/YY HH:mm")}
        </li>
      </StyledModalInner>
    );
  };

  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton closeLabel>
        <Modal.Title id="contained-modal-title-vcenter centered">
          Información del reporte
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {props.userInfo ? (
          createInnerElements(props.userInfo)
        ) : (
          <p>Cargando...</p>
        )}
      </Modal.Body>
    </Modal>
  );
}

export default UserInfoModal;
