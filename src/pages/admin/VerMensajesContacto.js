import React, { useState } from "react";
import SeeContactMessageInfo from "../../components/Modals/SeeContactMessageInfo";
import styled from "styled-components";
import { MessageTable } from "../../components/Tables/MessageTable";

const VerMensajesContacto = () => {
  const [modalShow, setModalShow] = useState(false);

  const [showData, setShowData] = useState();
  const tableRef = React.useRef();

  return (
    <>
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Panel de control</h1>
      </div>

      <div className="row">
        <div className="col-lg-12 mb-4 col-12">
          <div className="card shadow mb-4">
            <div className="card-header py-3">
              <h6 className="m-0 font-weight-bold text-primary">
                Mensajes por atender
              </h6>
            </div>
            <div className="card-body">
              <MessageTable
                setShowData={setShowData}
                setModalShow={setModalShow}
                ref={tableRef}
              ></MessageTable>

              <SeeContactMessageInfo
                data={showData}
                show={modalShow}
                onHide={() => setModalShow(false)}
              ></SeeContactMessageInfo>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VerMensajesContacto;
