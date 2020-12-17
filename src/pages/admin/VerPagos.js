import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import UpdateUserForm from "../../components/Forms/Admin/UpdateUserForm";
import PayoutReportInfoModal from "../../components/Modals/PayoutReportInfoModal";
import UserInfoModal from "../../components/Modals/ShowUserInfoModal";
import { PayoutReportsTable } from "../../components/Tables/PayoutReportsTable";
import { UsersTable } from "../../components/Tables/UsersTable";

const UserUpdateModal = (props) => {
  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton closeLabel>
        <Modal.Title id="contained-modal-title-vcenter centered">
          Actualizar Usuario
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {props.userInfo ? (
          <UpdateUserForm
            tableRef={props.tableRef}
            userInfo={props.userInfo}
          ></UpdateUserForm>
        ) : (
          <p>Cargando...</p>
        )}
      </Modal.Body>
    </Modal>
  );
};

const VerPagos = () => {
  const [showData, setShowData] = useState();
  const [modalShow, setModalShow] = useState();
  const [updateModal, setUpdateModal] = useState();
  const tableRef = React.useRef();

  return (
    <>
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Panel de control</h1>
      </div>

      <div className="row">
        <div className="col-lg-10 mb-4 col-12">
          <div className="card shadow mb-4">
            <div className="card-header py-3">
              <h6 className="m-0 font-weight-bold text-primary">
                Reportes de pagos
              </h6>
            </div>
            <div className="card-body">
              <PayoutReportsTable
                setShowData={setShowData}
                setModalShow={setModalShow}
                setUpdateModalShow={setUpdateModal}
                ref={tableRef}
              ></PayoutReportsTable>

              <PayoutReportInfoModal
                payoutInfo={showData}
                show={modalShow}
                onHide={() => setModalShow(false)}
              ></PayoutReportInfoModal>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VerPagos;
