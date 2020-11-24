import { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import reportService from "../../services/report.service";
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

function ReportModal(props) {
  const [reportInfo, setReportInfo] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      if (props.reportId !== undefined) {
        setLoading(true);
        const report = await reportService.getReportById(props.reportId);
        setReportInfo(report);
        setLoading(false);
      }
    };
    getData();
  }, [props.reportId]);

  const createInnerElements = (info) => {
    return (
      <StyledModalInner>
        <li>
          <strong>Número de reporte: </strong>
          {info.id}
        </li>
        <li>
          <strong>Categoría de reporte: </strong>
          {info.reportCategory.name.toUpperCase()}
        </li>
        <li>
          <strong>Estado de reporte: </strong>
          {info.reportStatus.name.toUpperCase()}
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
        {loading ? (
          "Cargando..."
        ) : props.reportId !== undefined ? (
          <p>{createInnerElements(reportInfo)}</p>
        ) : (
          <p></p>
        )}
      </Modal.Body>
    </Modal>
  );
}

export default ReportModal;
