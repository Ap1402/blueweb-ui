import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  width: 100%;

  .info {
    p {
      font-size: 20px;
      span {
        font-weight: 500;
      }
    }
  }

  .seccion-header {
    text-align: center;
    font-weight: 800;
    color: ${({ theme }) => theme.colors.blue};
    font-size: 40px;
  }
`;

const HistorialPago = () => {
  return (
    <>
      <div className="card">
        <div className="card-body">
          <StyledContainer>
            <h1 className="seccion-header">Historial de pagos</h1>
            <div className="info">
              <p>
                Saldo pendiente: Bs. <span>0,00</span>
              </p>
            </div>
            <div className="info">
              <p>Fecha de corte: 00/00/00 </p>
            </div>
            <table className="table">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">Cod</th>
                  <th scope="col">Fecha</th>
                  <th scope="col">Tipo</th>
                  <th scope="col">Importe</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">123412</th>
                  <td>00/00/00</td>
                  <td>Transferencia</td>
                  <td>1.0000</td>
                </tr>
                <tr>
                  <th scope="row">123412</th>
                  <td>00/00/00</td>
                  <td>Transferencia</td>
                  <td>1.0000</td>
                </tr>
                <tr>
                  <th scope="row">123412</th>
                  <td>00/00/00</td>
                  <td>Transferencia</td>
                  <td>1.0000</td>
                </tr>
              </tbody>
            </table>
          </StyledContainer>
        </div>
      </div>
    </>
  );
};

export default HistorialPago;
