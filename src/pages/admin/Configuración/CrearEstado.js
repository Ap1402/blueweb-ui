import React from "react";
import CreateCategory from "../../../components/Forms/Admin/CreateCategory";

import CreateStatusForm from "../../../components/Forms/Admin/CreateStatusForm";

const CreateStatus = () => {
    
  return (
    <>
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-gray-800">Panel de control</h1>
        </div>
        <div className="row">
          <div className="col-lg-10 mx-auto mb-4 col-12">
            <div className="card shadow mb-4">
              <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">
                  Estados
                </h6>
              </div>
              <div className="card-body">
                <CreateStatusForm></CreateStatusForm>
              </div>
            </div>

            <div className="card shadow mb-4">
              <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">
                  Categorias
                </h6>
              </div>
              <div className="card-body">
                <CreateCategory></CreateCategory>
              </div>
            </div>
          </div>
      </div>
    </>
  );
};

export default CreateStatus;
