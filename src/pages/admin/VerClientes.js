import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from "../../components/Table/Table";
import { Link } from "react-router-dom";
import authHeader from "../../helpers/getAuthToken";

const VerClientes = () => {
  const [data, setData] = useState(null);
  const [modalShow, setModalShow] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await axios
          .get("http://localhost:4000/api/clients/", {
            headers: {
              "x-auth-token": authHeader(),
            },
          })
          .catch((err) => {
            console.log(err);
          });
        console.log(result.data);
        setData(result.data);
      } catch (err) {}
    };
    getData();
  }, []);

  /*  const tableData = useMemo(() => data, []);
  const columns = useMemo(
    () => [
      {
        Header: "Cédula",
        accessor: "dni",
      },
      {
        Header: "Nombre",
        accessor: "firstName",
      },
      {
        Header: "Apellido",
        accessor: "firstLastName",
      },
      {
        Header: "Teléfono",
        accessor: "phone",
      },
      {
        Header: "Acciones",
        Cell: (tableData) => {
          return (
            <div>
              <Link href={"/admin/clientes/editar/" + data.row.original.id}>
                <button
                  className="btn btn-primary mx-1"
                  onClick={() => setModalShow(true)}
                >
                  <i className="fas fa-eye" />
                </button>
              </Link>
              <Link href={"/admin/clientes/editar/" + tableData.row.original.id}>
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
  ); */

  return (
    <div className="container-fluid">
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Panel de control</h1>
      </div>

      <div className="row">
        <div className="col-lg-10 mb-4 col-12">
          <div className="card shadow mb-4">
            <div className="card-header py-3">
              <h6 className="m-0 font-weight-bold text-primary">
                Tabla de clientes
              </h6>
            </div>
            <div className="card-body">
              {/*  {data && <Table columns={columns} data={data}></Table>} */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerClientes;
