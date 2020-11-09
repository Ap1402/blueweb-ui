import styled from "styled-components";
import TwoSectionsDivider from "../../components/Dividers/TwoSectionsDivider";

const StyledAboutUs = styled.section`
  color: white;
  padding: 40px;
  text-align: center;
  width: 100%;

  display: flex; 
  flex-direction: column;
  justify-content:center;
  .logo-aboutUs{
    align-self:center;
    height:100px;
    width:500px;
  }

  h2{
    margin-top:50px;
    color: black;
    font-size:40px;
    font-weight: 800;
  }
/*   .left {
    width: 100%;
  }
  .right {
    width: 100%;
    color: black;
    font-size: 25px;
    text-align: left;
    h2 {
      position: relative;
      text-align: center;
      font-size: 30px;
    }
    h2:before {
      content: "";
      position: absolute;
      display: inline-block;
      background: #276ef1;
      bottom: -11px;
      width: 100px;
      height: 4px;
      left: 50%;
      right: auto;
      -webkit-transform: translateX(-50%);
      transform: translateX(-50%);
    }
    ul {
      margin-top: 3rem;
      list-style: none;
      li {
        margin-bottom: 2rem;
      }
    }
  }

  h1,
  h2 {
    position: relative;
  }

  h1:before {
    content: "";
    position: absolute;
    display: inline-block;
    background: #ffff;
    bottom: -11px;
    width: 50px;
    height: 4px;
    left: 50%;
    right: auto;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
  }

  p {
    margin: 5rem;
    font-size: 20px;
  } */
`;

const AboutUs = () => {
  return (
    <StyledAboutUs id="aboutUs">
    
      <img className="logo-aboutUs" src="/images/blue-web.png" alt="AboutUs"></img>
        
        <h2>¿Qué nos caracteriza?</h2>
       
          

    </StyledAboutUs>
  );
};

export default AboutUs;
