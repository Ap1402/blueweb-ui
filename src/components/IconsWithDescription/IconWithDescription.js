import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  img {
    height: 70px;
  }
  h1 {
    font-size: 1.3rem;
    margin-top: 0.5rem;
    margin-bottom: 0.3rem;
    font-style: bold;
    color: white;
    font-family: "calibri";
  }
  p {
    font-size: 1.1rem;
    margin-top: 0.3rem;
    color: white;
    font-family: "calibri";
  }
  i {
    font-size: 50px;
    color: white;
  }
`;

const IconWithDescription = ({ iconClass, smallSDescription, number }) => {
  return (
    <Wrapper>
      <i className={iconClass}></i>
      <h1>{number}</h1>
      <p>{smallSDescription}</p>
    </Wrapper>
  );
};

export default IconWithDescription;
