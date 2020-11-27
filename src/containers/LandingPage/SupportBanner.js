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
  background-color: ${({ theme }) => theme.colors.blue};

  .divider-block {
    display: flex;
    flex-direction: column;
    align-items: center;
    width:90%;
    h4 {
      font-weight: 600;
      margin-bottom: 0;
      font-size: 24px;
    }
    img {
      height: 75px;
      margin: 0 5px 0 0;
    }

    p {
      font-weight: 500;
      font-size: 20px;
    }

    button,
    a {
      font-family: "Calibri", sans-serif;
      font-size: 14px;
      font-weight: 600;
      padding: 2px;
      letter-spacing: 0;
    }
    button {
      background-color: white;
      width:300px;
    }
    .text{
      width:100%;
      align-items: center;
      align-content:center;
      text-align:center;
    }
    .image{
      display:flex;
      align-items: center;
      align-content:center;
      text-align:center;
      justify-content:center;
      width:100%;

    }

    @media (min-width: 720px) {
      flex-direction: row;

      width:300px;

      .text{
       width:80%;
      align-items: left;
      align-content:left;
      text-align:left;
    }
    .image{
      display:flex;
      align-items: center;
      align-content:center;
      text-align:center;
      img{
        align-self:center;
      }
      width:20%;
    }
      h4 {
        font-size: 22px;
      }
      img {
        height: 60px;
      }
      p {
        font-size: 20px;
        margin: 0 0;
      }
      button,
      a {
        font-family: "Calibri", sans-serif;
        font-size: 15px;
        font-weight: 600;
        padding: 2px;
        letter-spacing: 0;
      }
      button{
        width:100%;

      }
    }
  }
`;

const SupportBanner = () => {
  return (
    <StyledWrapper>
      <Slide left duration={2100}>
        <div className="divider-block">
          <div className="image">
          <img src="/images/icons/Phone.png"></img>

          </div>
          <div className="text">
            <h4>Atención al cliente</h4>
            <p>555-555555</p>
          </div>
        </div>
        <div className="divider-block">
        <div className="image">

          <img src="/images/icons/Clock.png"></img>
</div>
          <div className="text">
            <h4>Horario de atención</h4>
            <p>Las 24 horas</p>
          </div>
        </div>
        <div className="divider-block">
           <div className="image">

          <img src="/images/icons/Support.png"></img>
          </div>

          <div className="text">
            <h4>Revisión de factibilidad</h4>
            <Link
              to="/contacto/factibilidad"
              style={{ textDecoration: "none" }}
            >
              <Button variant="contained">
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
