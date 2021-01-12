import React, { useEffect, useState } from "react";
import CreateDestinationAccount from "../../../components/Forms/Admin/CreateDestinationAccount";
import { BankAccountsTable } from "../../../components/Tables/Configuration/BankAccountsTable";
import { UnmountClosed } from "react-collapse";

const AddBankAccountsPage = () => {
  const tableRef = React.createRef();
  const [showForm, setFormShow] = useState(false);
  const [showData, setShowData] = useState();
  return (
    <>
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Cuentas de banco</h1>
      </div>
      <div className="row">
        <div className="col-12">
          <UnmountClosed isOpened={showForm}>
            <div className="row">
              <div className="col-12 pb-4">
                <div className="card shadow">
                  <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary float-left">
                      Agregar cuenta de banco
                    </h6>
                    <i
                      className="fas fa-times float-right"
                      onClick={(e) => setFormShow(false)}
                      style={{ fontSize: "20px" }}
                    ></i>
                  </div>
                  <div className="card-body">
                    <CreateDestinationAccount
                      currentValues={showData}
                    ></CreateDestinationAccount>
                  </div>
                </div>
              </div>
            </div>
          </UnmountClosed>

          <div className="card shadow mb-4">
            <div className="card-header py-3">
              <h6 className="m-0 font-weight-bold text-primary">Estados</h6>
            </div>
            <div className="card-body">
              <BankAccountsTable
                ref={tableRef}
                setFormShow={setFormShow}
                setShowData={setShowData}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddBankAccountsPage;
