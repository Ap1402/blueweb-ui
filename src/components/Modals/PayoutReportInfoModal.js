import { Modal } from "react-bootstrap";
import dayjs from "dayjs";
import styled from "styled-components";
import UpdatePayoutReportForm from "../Forms/Admin/UpdatePayoutReportForm";

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

function PayoutReportInfoModal(props) {
  const createInnerElements = (info) => {
    return (
      <StyledModalInner>
        <li>
          <strong>Código de transacción de banco emisor: </strong>
          {info.transactionCode}
        </li>
        <li>
          <strong>Banco emisor: </strong>
          {info.bank}
        </li>
        <li>
          <strong>Banco receptor: </strong>
          {info.bankDestiny.bankName}
        </li>
        <li>
          <strong>Propietario de la cuenta emisora: </strong>
          {info.accountOwnerName}
        </li>
        <li>
          <strong>Cantidad: </strong>
          {info.amount}
        </li>
        <li>
          <strong>Aprobado por: </strong>
          {info.user ? info.user.username : ""}
        </li>
        <li>
          <strong>Aprobado en: </strong>
          {dayjs(info.approvedAt).format("DD/MM/YY HH:mm")}
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
        {props.payoutInfo ? (
          <>
            {createInnerElements(props.payoutInfo)}
            <UpdatePayoutReportForm
              tableRef={props.tableRef}
              reportInfo={props.payoutInfo}
            ></UpdatePayoutReportForm>
          </>
        ) : (
          <p>Cargando...</p>
        )}
      </Modal.Body>
    </Modal>
  );
}

export default PayoutReportInfoModal;
