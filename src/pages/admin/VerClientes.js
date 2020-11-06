import React, { useState, useMemo, useEffect } from "react";
import axios from "axios";
import { useTable } from "react-table";
import Link from "next/link";

const VerClientes = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState();

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await axios
          .get("http://localhost:4000/api/clients/")
          .catch((err) => {
            console.log(err);
          });
        setData(result.data);
      } catch (err) {}
    };
    getData();
  }, []);

  const tableData = useMemo(() => data, []);
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
              <Link href={"/admin/clientes/editar/" + tableData.row.original.id}>
                <button className="btn btn-primary mx-1">
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
  );
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, tableData });
  setLoading(false);

  if (!loading) {
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
                    Tabla de clientes
                  </h6>
                </div>
                <div className="card-body">
                  <div className="table-responsive">
                    <table {...getTableProps()} className="table">
                      <thead>
                        {headerGroups.map((headerGroup) => (
                          <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map((column) => (
                              <th {...column.getHeaderProps()} scope="col">
                                {column.render("Header")}
                              </th>
                            ))}
                          </tr>
                        ))}
                      </thead>
                      <tbody {...getTableBodyProps()}>
                        {rows.map((row) => {
                          prepareRow(row);
                          return (
                            <tr {...row.getRowProps()}>
                              {row.cells.map((cell) => {
                                return (
                                  <td {...cell.getCellProps()}>
                                    {cell.render("Cell")}
                                  </td>
                                );
                              })}
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <p>cargando</p>;
  }
};

export default VerClientes;
