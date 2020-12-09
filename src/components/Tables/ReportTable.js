import { useEffect, useState } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import reportService from "../../services/report.service";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";

const RemotePagination = ({
  data,
  page,
  sizePerPage,
  onTableChange,
  totalSize,
}) => {
  const columns = [
    { dataField: "id", text: "Código" },
    { dataField: "category.name", text: "Razón" },
    { dataField: "state.name", text: "Estado" },
    { dataField: "priorityLevel", text: "Prioridad" },
    {
      text: "Acciones",
      formatter: (cell, row, rowIndex, formatExtraData) => {
        return (
          <>
            <button className="btn mx-1 btn-info">Ver</button>
            <button className="btn mx-1 btn-primary">Editar</button>
          </>
        );
      },
    },
  ];

  return (
    <div>
      <BootstrapTable
        remote
        bootstrap4
        keyField="id"
        data={data}
        columns={columns}
        pagination={paginationFactory({
          page,
          sizePerPage,
          totalSize,
          showTotal: true,
          firstPageText: "Inicio",
          lastPageText: "Final",
          withFirstAndLast: true,
        })}
        onTableChange={onTableChange}
      />
    </div>
  );
};

export const Table = ({ getDataUrl }) => {
  const [state, setState] = useState({
    page: 1,
    data: "",
    sizePerPage: 10,
    totalSize: 1,
  });

  const getData = async (page, size) => {
    const result = await reportService.getReports(
      {
        page: page ? page : 0,
        size: size ? size : 10,
      },
      false
    );

    setState({
      page: page ? page + 1 : 1,
      data: result.data,
      sizePerPage: size ? size : 10,
      totalSize: result.totalItems,
    });
  };

  useEffect(() => {
    getData();
  }, []);

  const handleTableChange = async (type, { page, sizePerPage }) => {
    getData(page - 1, sizePerPage);
    setState({
      page,
      data: state.data,
      sizePerPage,
    });
  };

  return (
    <RemotePagination
      data={state.data}
      page={state.page}
      sizePerPage={state.sizePerPage}
      totalSize={state.totalSize}
      onTableChange={handleTableChange}
    />
  );
};
