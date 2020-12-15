import { Modal } from "react-bootstrap";
import dayjs from "dayjs";
import styled from "styled-components";
import reportService from "../../services/report.service";
import { useEffect, useState } from "react";

const StyledModalInner = styled.ul`
  list-style: none;
  width: 90%;
  strong {
    font-size: 15px;
    color: black;
    width: 100%;
    margin-left: 0;
  }
  li {
    word-wrap: break-word;

    display: flex;
    flex-direction: column;
    font-size: 15px;
    margin: 10px 0;
  }
`;

function ReportModal(props) {
  const [loadingComments, setLoadingComments] = useState(true);
  const [comments, setComments] = useState();

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
          {info.wasCompleted === "1"
            ? "COMPLETADO"
            : info.status
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
          {!loadingComments ? (
            <ul className="support-messages">
              {comments.map((comment) => (
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
          ) : (
            <p>Cargando...</p>
          )}
        </li>
      </StyledModalInner>
    );
  };

  useEffect(() => {
    const getComments = async () => {
      try {
        setLoadingComments(true);
        const comments = await reportService.getCommentsById(props.reportId.id);
        setComments(comments);
        setLoadingComments(false);
      } catch (err) {}
    };
    getComments();
  }, [props.show]);

  return (
    <Modal
      {...props}
      aria-labelledby="contained-modal-title-vcenter"
      centered
      size="xl"
      dialogClassName="width-90w"
    >
      <Modal.Header closeButton closeLabel>
        <Modal.Title id="contained-modal-title-vcenter centered">
          Información del reporte
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {props.reportId !== undefined ? (
          <p>{createInfoElements(props.reportId)}</p>
        ) : (
          <p>Cargando...</p>
        )}
      </Modal.Body>
    </Modal>
  );
}

export default ReportModal;
