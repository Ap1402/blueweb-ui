import React, { useEffect, useState } from "react";
import CreateCategory from "../../../components/Forms/Admin/CreateCategory";

import CreateStatusForm from "../../../components/Forms/Admin/CreateStatusForm";
import reportService from "../../../services/report.service";

const CreateStatus = () => {
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState();
  const [statuses, setStatuses] = useState();

  useEffect(() => {
    const getData = async () => {
      const resultCategories = await reportService.getCategories();
      setCategories(resultCategories.data);
      const resultStatuses = await reportService.getStatuses();
      setStatuses(resultStatuses.data);
      setLoading(false);
    };
    getData();
  }, []);

  const deleteCategoryStatus = async (type, id) => {
    const result =
      type === "status"
        ? await reportService.deleteStatus(id)
        : await reportService.deleteCategory(id);
    if (result === 1) {
      if (type === "status") {
        const tempStatuses = statuses.filter((status) => status.id !== id);
        setStatuses(tempStatuses);
      } else {
        const tempCategories = categories.filter(
          (category) => category.id !== id
        );
        setCategories(tempCategories);
      }
    }
  };

  return (
    <>
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">
          Control de estados y categorías de reportes
        </h1>
      </div>
      <div className="row">
        <div className="col-lg-5">
          <div className="card shadow mb-4">
            <div className="card-header py-3">
              <h6 className="m-0 font-weight-bold text-primary">
                Crear estado
              </h6>
            </div>
            <div className="card-body">
              <CreateStatusForm></CreateStatusForm>
            </div>
          </div>

          <div className="card shadow mb-4">
            <div className="card-header py-3">
              <h6 className="m-0 font-weight-bold text-primary">Estados</h6>
            </div>
            <div className="card-body">
              {!loading ? (
                <div className="table-responsive">
                  <table class="table">
                    <thead class="thead-dark">
                      <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">Acción</th>
                      </tr>
                    </thead>
                    <tbody>
                      {statuses.map((status) => {
                        return (
                          <tr key={status.id}>
                            <td>{status.name}</td>
                            <td>
                              <button
                                className="btn btn-danger m-1"
                                onClick={() =>
                                  deleteCategoryStatus("status", status.id)
                                }
                              >
                                <i className="fas fa-trash-alt"></i>
                              </button>
                              <button className="btn btn-primary m-1">
                                <i className="far fa-edit"></i>
                              </button>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              ) : (
                <p>Cargando...</p>
              )}
            </div>
          </div>
        </div>

        <div className="col-lg-7">
          <div className="card shadow mb-4">
            <div className="card-header py-3">
              <h6 className="m-0 font-weight-bold text-primary">
                Crear categoria
              </h6>
            </div>
            <div className="card-body">
              <CreateCategory></CreateCategory>
            </div>
          </div>

          <div className="card shadow mb-4">
            <div className="card-header py-3">
              <h6 className="m-0 font-weight-bold text-primary">Categorias</h6>
            </div>
            <div className="card-body">
              {!loading ? (
                <div className="table-responsive">
                  <table class="table">
                    <thead class="thead-dark">
                      <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">Prioridad</th>
                        <th scope="col">Acción</th>
                      </tr>
                    </thead>
                    <tbody>
                      {categories.map((category) => {
                        return (
                          <tr key={category.id}>
                            <td>{category.name}</td>
                            <td>{category.defaultPriorityLevel}</td>
                            <td>
                              <button
                                className="btn btn-danger m-1"
                                onClick={() =>
                                  deleteCategoryStatus("category", category.id)
                                }
                              >
                                <i className="fas fa-trash-alt"></i>
                              </button>
                              <button className="btn btn-primary m-1">
                                <i className="far fa-edit"></i>
                              </button>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              ) : (
                <p>Cargando...</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateStatus;
