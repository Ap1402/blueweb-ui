import Axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Spinner from "../../components/Spinner/Spinner";
import authHeader from "../../helpers/getAuthToken";

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
      const result = await Axios.get("http://localhost:4000/api/clients/self", {
        headers: {
          "x-auth-token": authHeader(),
        },
      }).catch((err) => {
        console.log(err.response);
      });
      setUserData(result.data);
      setIsLoading(false);
    };
    getUserData();
  }, []);
  return !loading ? (
    <>
      <div className="card">
        <div className="card-body">
          <StyledContainer>
            <h1 className="seccion-header">Datos del cliente</h1>
            <div className="info">
              <p>
  Cedula: <span>{userData.dni}</span>
              </p>
              <p>
                Primer Nombre: <span>{userData.firstName}</span>
              </p>
              <p>
                Segundo Nombre: <span>{userData.secondName}</span>
              </p>
              <p>
                Primer Apellido: <span>{userData.firstLastName}</span>
              </p>
              <p>
                Segundo Apellido: <span>{userData.secondLastName}</span>
              </p>
            </div>
            <div className="info">
              <p>
                Direccion:
                <span>
                  {userData.address}
                </span>
              </p>
              <p>
                Teléfono:
                <span>
                  {userData.phone}
                </span>
              </p>
            </div>
          </StyledContainer>
        </div>
      </div>
    </>
  ) : (
    <Spinner></Spinner>
  );
};

export default PerfilCliente;
