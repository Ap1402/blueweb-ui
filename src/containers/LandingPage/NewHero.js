import React from "react";
import styled from "styled-components";
const Section = styled.section`
  background-image: radial-gradient(
    circle,
    #276ef1,
    #2b6feb,
    #2f6fe5,
    #3470df,
    #3870d9,
    #386fd3,
    #386fcc,
    #396ec6,
    #366cbe,
    #346ab5,
    #3367ad,
    #3365a4
  );
    margin-top:-100px;
  width: 100%;
  height: 1000px;
  display: flex;
  align-items: center;
  .logo-name {
      margin-left:50px;
      font-weight:800;
    h1 {
        color:white;
        font-weight:800;

      font-size: 70px;
    }
    h2{
        color:white;
        font-weight:800;
        font-size: 40px;

    }
    
    button{
        background-color: white;
        padding: 30px;
        border: 0;
    }
  }
`;

const NewHero = () => {
  return (
    <Section>
      <div className="logo-name">
        <h1>BLUEWEB</h1>
        <h2>Da un paso al futuro con nuestra conexión</h2>
        <button>Contactar ya</button>
      </div>
    </Section>
  );
};

export default NewHero;
