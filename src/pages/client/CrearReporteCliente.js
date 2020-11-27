import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import CreateReport from "../../components/Forms/Client/CreateReport";
import Spinner from "../../components/Spinner/Spinner";
import userService from "../../services/user.service";

const StyledContainer = styled.div`
  width: 100%;
  .seccion-header {
    text-align: center;
    font-weight: 800;
    color: ${({ theme }) => theme.colors.blue};
    font-size: 40px;
  }
  .data-info {
    margin: 20px 30px;
    font-size:18px;
  }
`;

const CrearReporteCliente = () => {
  const [userData, setUserData] = useState();
  const [loading, setIsLoading] = useState(true);

  useEffect(() => {
    const getUserData = async () => {
      const result = await userService.getCurrentUserInfo();
      setUserData(result);
      setIsLoading(false);
    };
    getUserData();
  }, []);
  return !loading ? (
    <>
      <div className="card">
        <div className="card-body">
          <StyledContainer>
            <h1 className="seccion-header">Crear un reporte</h1>
            <p className="data-info">
              Es necesario que antes verifiques si los
              datos de contacto registrados en nuestro sistema son correctos,
              así podremos contactarte:
            </p>
            <ul>
              <li>
                <strong>Teléfono:</strong> {userData.phone}
              </li>
              <li>
                <strong>Correo Electrónico:</strong> {userData.email}
              </li>
            </ul>
            <p className="data-info">
              Si estos no son tus datos, por favor actualízalos {' '}
              <Link to="/">

              aquí
              </Link>
            </p>
            <hr></hr>
            <CreateReport></CreateReport>
          </StyledContainer>
        </div>
      </div>
    </>
  ) : (
    <Spinner></Spinner>
  );
};

export default CrearReporteCliente;
