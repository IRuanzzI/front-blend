import React from "react";
import { GlobalStyle } from "./global";
import { LogoImage, ContentContainer } from "./componentes/Container/style";
import BeverageList from "./componentes/Lista/index.js";
import LogoSrc from "./componentes/LogoSrc.jpg"; 
import Footer from "./componentes/footer/index.js";
function App() {
  return (
    <>
      <GlobalStyle />
      <ContentContainer>
        <LogoImage src = {LogoSrc}/>
        <div>
          <h1>Gerenciamento de Bebidas</h1>
          <h2>Aqui estão as bebidas de hoje:</h2>
          <BeverageList />
        </div>
      </ContentContainer>
      <Footer/>
    </>
  );
}

export default App;
