import React from "react";
import { Header } from "./components/Header";
import { Nav } from "./components/Nav";
import { Section } from "./components/Section";
import { About } from "./components/About";
import { Videos } from "./components/Videos";
import { UppersiteContainer } from "./components/UppersiteContainer";
import { Main } from "./components/Main";
import { HeaderContainer } from "./components/HeaderContainer";

function App() {
  return (
    <>
      <UppersiteContainer>
        <HeaderContainer>
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
          title="Videos"
          body={<Videos />}
        />
      </Main>
    </>
  );
}

export default App;
