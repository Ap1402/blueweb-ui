import React, { useState } from "react";
import CreateClient from "../../components/Forms/Admin/CreateClient";
import axios from "axios";

const CrearCliente = () => {
  const [requestStatus, setRequestStatus] = useState({
    message: "",
    success: false,
    sent: false,
  });

  const createClient = async (client) => {
    try {
      const result = await axios
        .post("http://localhost:4000/api/clients/register", client)
        .catch((err) => {
          setRequestStatus({
            success: false,
            message: err.response.data,
            sent: true,
          });
        });
      if (result.status === 201) {
        setRequestStatus({
          success: true,
          message: "Cliente registrado correctamente",
          sent: true,
        });
      }
      return result;
    } catch (err) {}
  };

  const createAlert = () => {
    if (requestStatus.sent & !requestStatus.success) {
      return (
        <div class="alert alert-danger" role="alert">
          {requestStatus.message}
        </div>
      );
    }
    if (requestStatus.sent & requestStatus.success) {
      return (
        <div class="alert alert-success" role="alert">
          {requestStatus.message}
        </div>
      );
    }
  };

  return (
    <div>
      <div className="container-fluid">
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-gray-800">Panel de control</h1>
        </div>

        <div className="row">
          <div className="col-lg-10 mb-4 col-12">
            <div className="card shadow mb-4">
              <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">
                  Registro de clientes
                </h6>
              </div>
              <div className="card-body">
                {createAlert()}
                <CreateClient registerClient={createClient}></CreateClient>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default CrearCliente;
