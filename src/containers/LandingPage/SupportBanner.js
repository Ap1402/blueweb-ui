import { Slide } from "react-reveal";
import styled from "styled-components";
import { Button } from "@material-ui/core";
import Link from '@material-ui/core/Link';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding-top: 20px;
  padding-bottom: 10px;
  position: relative;
  color: white;
  flex-wrap: wrap;
  justify-content: space-around;
  background-color: #2058ab;

  .divider-block {
    display: flex;
    flex-direction: row;
    .text{
      margin-top:0;
    }
    h4 {
      
      font-size: 20px;
    }
    i {
      font-size: 50px;
      margin-right: 20px;
    }
    p {
      font-size: 20px;
      margin-left:10px;
    }

    @media (min-width:720px){
    h1{
      font-size:30px;
    }

    h4 {
      font-size: 25px;
    }
    i {
      font-size: 60px;
    }
    p {
      font-size: 20px;
    }
  }
  }
  h1 {
    font-size: 25px;
    font-weight: 600;
    position: relative;
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
            <Link to="/contacto/factibilidad" style={{textDecoration:'none'}}>
              <Button  variant="contained" style={{width:'100%'}} >
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
