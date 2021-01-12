import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import RegisterForm from "../../components/Forms/Client/RegisterForm";

const CrearUsuario = (props) => {
  return (
    <>
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Panel de control</h1>
      </div>

      <div className="row">
        <div className="col-lg-7 mb-4 col-12 mx-auto">
          <div className="card shadow mb-4">
            <div className="card-header py-3">
              <h6 className="m-0 font-weight-bold text-primary">
                Registro de usuarios
              </h6>
            </div>
            <div className="card-body">
              <RegisterForm></RegisterForm>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default withRouter(CrearUsuario);
