import { useState, useMemo } from "react";
import axios from "axios";
import RequestFactibility from "../../../components/Forms/ClientForms/RequestFactibility";
import { useTable } from "react-table";
import {Link} from "react-router-dom";

const index = (props) => {
  const data = useMemo(() => props.requests, []);

  const columns = useMemo(
    () => [
      {
        Header: "Solicitante",
        accessor: "requesterName",
      },
      {
        Header: "Coordenadas",
        accessor: "coordenades",
      },
      {
        Header: "Correo",
        accessor: "requesterEmail",
      },
      {
        Header: "Evaluado",
        Cell: (data) => data.row.original.wasEvaluated?'Evaluado':'Pendiente',
      },
      {
        Header: "Acciones",
        Cell: (data) => {
          return (
            <div>
              <Link href={"/admin/factibilidad/1" + data.row.original.id}>
                <button className="btn btn-primary mx-1">
                  <i className="fas fa-eye" />
                </button>
              </Link>
              <Link href={"/admin/clientes/editar/" + data.row.original.id}>
                <button className="btn btn-danger mx-1">
                  <i className="fas fa-trash" />
                </button>
              </Link>
            </div>
          );
        },
      },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data });

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
                  Solicitudes de factibilidad
                </h6>
              </div>
              <div className="card-body">
               <RequestFactibility></RequestFactibility>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


index.getInitialProps = async () => {
  try {
    const result = await axios
      .get("http://localhost:4000/api/factibility/pending")
      .catch((err) => {
        return err;
      });
    return {
      requests: result.data,
    };
  } catch (err) {
    return err;
  }
};

export default index;