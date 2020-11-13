import { Slide } from "react-reveal";
import styled from "styled-components";
import { Button } from "@material-ui/core";
import Link from "@material-ui/core/Link";

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding-top: 5px;
  padding-bottom: 5px;
  align-items: center;
  position: relative;
  color: white;
  flex-wrap: wrap;
  justify-content: space-around;
  background-color: #2058ab;

  h1 {
    font-size: 25px;
    font-weight: 600;
    position: relative;
  }

  .divider-block {
    display: flex;
    flex-direction: row;
    align-items: center;

    h4 {
      font-size: 20px;
    }
    i {
      font-size: 40px;
      margin-right: 20px;
    }
    p {
      font-size: 20px;
    }
    button, a {
      font-size: 18px;
      font-family:  Helvetica,"Arimo", sans-serif; 
      font-weight:500;
    }

    @media (min-width: 720px) {
      h1 {
        font-size: 20px;
      }

      h4 {
        font-size: 18px;
      }
      i {
        font-size: 50px;
      }
      p {
        font-size: 18px;
        margin: 0 0;
      }
      button {
        font-size: 12px;
      }
    }
  }
`;

const SupportBanner = () => {
  return (
    <StyledWrapper>
      <Slide left duration={2100}>
        <div className="divider-block">
          <i className="fas fa-phone"></i>
          <div className="text">
            <h4>Atención al cliente</h4>
            <p>555-555555</p>
          </div>
        </div>
        <div className="divider-block">
          <i class="fas fa-clock"></i>

          <div className="text">
            <h4>Horario de atención</h4>
            <p>Las 24 horas</p>
          </div>
        </div>
        <div className="divider-block">
          <i className="fas fa-question"></i>
          <div className="text">
            <h4>Revisión de factibilidad</h4>
            <Link
              to="/contacto/factibilidad"
              style={{ textDecoration: "none" }}
            >
              <Button variant="contained" style={{ width: "100%" }}>
                Realizar solicitud
              </Button>
            </Link>
          </div>
        </div>
      </Slide>
    </StyledWrapper>
  );
};

export default SupportBanner;
