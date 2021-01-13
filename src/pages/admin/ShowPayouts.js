import React, { useState } from "react";
import PayoutReportInfoModal from "../../components/Modals/PayoutReportInfoModal";
import { PayoutReportsTable } from "../../components/Tables/PayoutReportsTable";

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
        <div className=" mb-4 col-12">
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
                tableRef={tableRef}
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
