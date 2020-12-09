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
  .support-messages {
  }
`;

function ReportModal(props) {
  const createInfoElements = (info) => {
    return (
      <StyledModalInner>
        <li>
          <strong>Número de reporte: </strong>
          {info.id}
        </li>
        <li>
          <strong>Categoría de reporte: </strong>
          {info.category
            ? info.category.name.toUpperCase()
            : "Hubo un problema al buscar la categoria"}
        </li>
        <li>
          <strong>Estado de reporte: </strong>
          {info.status
            ? info.status.name.toUpperCase()
            : "Hubo un problema al buscar el estado"}
        </li>
        <li>
          <strong>Mensaje de cliente: </strong>
          {info.message}
        </li>
        <li>
          <strong>Nivel de prioridad: </strong>
          {info.priorityLevel}
        </li>

        <li>
          <strong>Fecha de creación: </strong>
          {dayjs(info.createdAt).format("DD/MM/YY HH:mm")}
        </li>

        <li>
          <strong>Mensajes de soporte: </strong>

          <ul className="support-messages">
            {info.comments.map((comment) => (
              <li>
                {comment.comment}

                {" " +
                  "Comentado por " +
                  comment.user.username +
                  " el " +
                  dayjs(comment.createdAt).format("DD/MM/YY HH:mm")}
              </li>
            ))}
          </ul>
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
        {props.reportId !== undefined ? (
          <p>{createInfoElements(props.reportId)}</p>
        ) : (
          <p></p>
        )}
      </Modal.Body>
    </Modal>
  );
}

export default ReportModal;
