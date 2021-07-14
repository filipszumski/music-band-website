import React from "react";
import { Header } from "./components/Header";
import { Nav } from "./components/Nav";
import { Section } from "./components/Section";
import { About } from "./components/About";
import { Videos } from "./components/Videos";
import { UppersiteContainer } from "./components/UppersiteContainer";
import { Main } from "./components/Main";
import { HeaderContainer } from "./components/HeaderContainer";
import { GlobalStyle } from "./GlobalStyle";
import { useIsScrolledDown } from "./useIsScrolledDown";

function App() {
  const isScrolledDown = useIsScrolledDown();

  return (
    <>
      <GlobalStyle isScrolled={isScrolledDown} />

      <UppersiteContainer>
        <HeaderContainer isScrolled={isScrolledDown}>
          <Header />
          <Nav />
        </HeaderContainer>
      </UppersiteContainer>
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
    </>
  );
}

export default App;
