import dayjs from "dayjs";
import React from "react";
import Fade from "react-reveal/Fade";
import styled from "styled-components";

const StyledModalInner = styled.ul`
  list-style: none;
  width: 100%;
  strong {
    font-size: 15px;
    color: black;
    width: 100%;
    margin-left: 0;
  }
  li {
    display: flex;
    flex-direction: column;
    font-size: 15px;
    margin: 10px 0;
  }
`;

const ReportsShow = ({ showInfo, setShowInfo, info }) => {
  return (
    <Fade collapse bottom when={showInfo}>
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="font-weight-bold text-primary float-left">
            Información del reporte
          </h6>
          <i
            className="fas fa-times-circle float-right"
            style={{ fontSize: "20px", color: "red", cursor: "pointer" }}
            onClick={() => setShowInfo(false)}
          ></i>
        </div>
        <div className="card-body justify-content-between">
          {info ? (
            <StyledModalInner>
              <li>
                <strong>Número de reporte: </strong>
                {info.id}
              </li>
              <li>
                <strong>Categoría de reporte: </strong>
                {info.category
                  ? info.category.name.toUpperCase()
                  : "Hubo un problema al buscar la categoria"}
              </li>
              <li>
                <strong>Estado de reporte: </strong>
                {info.status
                  ? info.status.name.toUpperCase()
                  : "Hubo un problema al buscar el estado"}
              </li>
              <li>
                <strong>Mensaje de cliente: </strong>
                {info.message}
              </li>
              <li>
                <strong>Nivel de prioridad: </strong>
                {info.priorityLevel}
              </li>
              <li>
                <strong>Fecha de creación: </strong>
                {dayjs(info.createdAt).format("DD/MM/YY HH:mm")}
              </li>
            </StyledModalInner>
          ) : (
            <p>Cargando...</p>
          )}
        </div>
      </div>
    </Fade>
  );
};

export default ReportsShow;
