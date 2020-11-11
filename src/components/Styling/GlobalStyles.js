import { createGlobalStyle } from "styled-components";
export const GlobalStyles = createGlobalStyle`
@font-face {
  font-family: 'Helvetica';
  font-weight: normal;

  src: url('/fonts/Helvetica.ttf'); /* IE9 Compat Modes */
  src: local('Helvetica'), local('Helvetica'),
       url('/fonts/Helvetica.ttf') format('truetype');
}

@font-face {
    font-family: 'Helvetica';
    src: url('fonts/Helvetica-Bold.ttf');
    font-weight: bold;
}


  body {
      
    margin: 0;
    padding: 0;
    height:100vh;
    box-sizing: border-box;
    font-family:  Helvetica,"Arimo", sans-serif; 

    scroll-behavior:smooth;
    background-color: white;
    
  }
  body > #root {
  height: 100vh;
}
  `;
