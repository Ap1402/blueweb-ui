import Axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Spinner from "../../components/Spinner/Spinner";
import authHeader from "../../helpers/getAuthToken";
import clientsService from "../../services/clients.service";
import userService from "../../services/user.service";

const StyledContainer = styled.div`
  width: 100%;
  .info {
    width: 200px;
    @media (min-width: 720px) {
      width: 400px;
    }
    p {
      font-size: 18px;
      span {
        font-size: 15px;

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

const PerfilCliente = () => {
  const [userData, setUserData] = useState();
  const [loading, setIsLoading] = useState(true);

  useEffect(() => {
    const getUserData = async () => {
      const result = await clientsService.getCurrentLoggedClient();
      setUserData(result);
      setIsLoading(false);
    };
    getUserData();
  }, []);

  return !loading ? (
    <>
      <div className="row">
        <div className="col-12 col-lg-12">
          <div className="card">
            <div className="card-body">
              <StyledContainer>
                <h1 className="seccion-header">Datos del cliente</h1>
                <div className="info">
                  <p>
                    Cedula: <span>{userData.dni}</span>
                  </p>
                  <p>
                    Nombres: <span>{userData.names}</span>
                  </p>
                  <p>
                    Apellidos: <span>{userData.lastNames}</span>
                  </p>
                </div>
                <div className="info">
                  <p>
                    Direccion:
                    <span>{userData.address}</span>
                  </p>
                  <p>
                    Teléfono:
                    <span>{userData.phone}</span>
                  </p>
                </div>
              </StyledContainer>
            </div>
          </div>
        </div>
      </div>
    </>
  ) : (
    <Spinner></Spinner>
  );
};

export default PerfilCliente;
