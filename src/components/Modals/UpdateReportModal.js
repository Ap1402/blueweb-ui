import {  useState } from "react";
import { Modal } from "react-bootstrap";
import styled from "styled-components";
import UpdateReportForm from "../Forms/Admin/UpdateReportForm";

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

function UpdateReportModal(props) {

    
  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton closeLabel>
        <Modal.Title id="contained-modal-title-vcenter centered">
          Información del reporte
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
