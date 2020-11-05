import React, { useState, useMemo } from "react";
import AdminPanelLayout from "../../../containers/Layouts/AdminPanelLayout";
import axios from "axios";
import { useTable } from "react-table";
import Link from "next/link";

const crear = (props) => {
  const data = React.useMemo(() => props.clients, []);

  const columns = React.useMemo(
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
        Cell: (data) => {
          return (
            <div>
              <Link href={"/admin/clientes/editar/" + data.row.original.id}>
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
};


crear.getInitialProps = async () => {
  try {
    const result = await axios
      .get("http://localhost:4000/api/clients/")
      .catch((err) => {
        console.log(err);
      });
    return {
      clients: result.data,
    };
  } catch (err) {}
};
export default crear;