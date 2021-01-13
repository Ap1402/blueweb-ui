import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CreateClient from "../../components/Forms/Admin/CreateClient";
import clientsService from "../../services/clients.service";

const EditarClienteInfo = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [client, setClient] = useState();

  useEffect(() => {
    const getClientData = async () => {
      const clientData = await clientsService.getClientById(id);
      setClient(clientData);
      setLoading(false);
    };
    getClientData();
  }, []);

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
                Editar datos del cliente
              </h6>
            </div>
            <div className="card-body">
              {!loading ? (
                !(client.statusCode === 404) ? (
                  <CreateClient data={client} isUpdating={true}></CreateClient>
                ) : (
                  <p>Hubo un problema al obtener los datos del cliente</p>
                )
              ) : (
                <p>Cargando</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditarClienteInfo;
