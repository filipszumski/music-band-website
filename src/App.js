import React, { useState } from "react";
import { Header } from "./components/Header";
import { Nav } from "./components/Nav";
import { Section } from "./components/Section";
import { About } from "./components/About";
import { Videos } from "./components/Videos";
import { Main } from "./components/Main";
import { HeaderContainer } from "./components/HeaderContainer";
import { GlobalStyle } from "./GlobalStyle";
import { useIsScrolledDown } from "./useIsScrolledDown";
import { MainContainer } from "./components/MainContainer";
import { Form } from "./components/Form";

function App() {
  const isScrolledDown = useIsScrolledDown();
  const [isFormActive, setIsFormActive] = useState(false);

  return (
    <>
      <GlobalStyle />

      <HeaderContainer isScrolled={isScrolledDown}>
        <Header />
        <Nav
          setIsFormActive={setIsFormActive}
        />
      </HeaderContainer>
      <MainContainer isScrolled={isScrolledDown}>
        <Main>
          <Section
            id="about-us"
            title="O nas"
            body={<About />}
          />
          <Section
            id="videos"
            title="Muzyka"
            body={<Videos />}
          />
        </Main>
      </MainContainer>
      <Form
        isFormActive={isFormActive}
        setIsFormActive={setIsFormActive}
      />
    </>
  );
}

export default App;
