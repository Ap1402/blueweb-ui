import React, { useState } from "react";
import CreateDestinationAccount from "../../../components/Forms/Admin/CreateDestinationAccount";
import { BankAccountsTable } from "../../../components/Tables/Configuration/BankAccountsTable";
import { UnmountClosed } from "react-collapse";
import { Button } from "react-bootstrap";
import payoutReportsService from "../../../services/payoutReports.service";
import createAlert from "../../../helpers/createAlert";

const AddBankAccountsPage = () => {
  const tableRef = React.createRef();
  const [showForm, setFormShow] = useState(false);
  const [showData, setShowData] = useState();
  const [requestStatus, setRequestStatus] = useState({
    message: "",
    success: false,
    sent: false,
  });
  const handleButtons = (e, type) => {
    e.preventDefault();
    setShowData();
    setFormShow(type === "close" ? false : true);
  };
  const deactivateAccount = async (id) => {
    const result = await payoutReportsService.deactivateDestinationAccount(id);
    setRequestStatus(result);
  };

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
                      Formulario para cuentas bancarias
                    </h6>
                    <i
                      className="fas fa-times float-right"
                      onClick={(e) => handleButtons(e, "close")}
                      style={{ fontSize: "20px" }}
                    ></i>
                  </div>
                  <div className="card-body">
                    <CreateDestinationAccount
                      currentValues={showData}
                      tableRef={tableRef}
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
              <div className="row">
                <div className="col-12 mx-auto">
                  {createAlert(requestStatus)}
                <Button onClick={(e) => handleButtons(e, "open")}>
                  Agregar nueva cuenta
                </Button>
                  <BankAccountsTable
                    ref={tableRef}
                    setFormShow={setFormShow}
                    setShowData={setShowData}
                    deactivateAccount={deactivateAccount}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddBankAccountsPage;
