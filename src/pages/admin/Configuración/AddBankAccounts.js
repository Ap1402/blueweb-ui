import React, { useEffect, useState } from "react";
import CreateDestinationAccount from "../../../components/Forms/Admin/CreateDestinationAccount";

const AddBankAccountsPage = () => {
  const [loading, setLoading] = useState(true);

/*   useEffect(() => {
    const getData = async () => {
      const resultCategories = await reportService.getCategories();
      setCategories(resultCategories.data);
      const resultStatuses = await reportService.getStatuses();
      setStatuses(resultStatuses.data);
      setLoading(false);
    };
    getData();
  }, []); */

  return (
    <>
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Cuentas de banco</h1>
      </div>
      <div className="row">
        <div className="col-lg-">
          <div className="card shadow mb-4">
            <div className="card-header py-3">
              <h6 className="m-0 font-weight-bold text-primary">
                Agregar cuenta de banco
              </h6>
            </div>
            <div className="card-body">
              <CreateDestinationAccount></CreateDestinationAccount>
            </div>
          </div>

          <div className="card shadow mb-4">
            <div className="card-header py-3">
              <h6 className="m-0 font-weight-bold text-primary">Estados</h6>
            </div>
            <div className="card-body"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddBankAccountsPage;
