import { Modal } from "react-bootstrap";
import UpdateReportForm from "../Forms/Admin/UpdateReportForm";

function UpdateReportModal(props) {
  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton closeLabel>
        <Modal.Title id="contained-modal-title-vcenter centered">
          Actualizar reporte
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {props.reportId !== undefined ? (
          <UpdateReportForm reportId={props.reportId}></UpdateReportForm>
        ) : (
          <p>Cargando...</p>
        )}
      </Modal.Body>
    </Modal>
  );
}

export default UpdateReportModal;
