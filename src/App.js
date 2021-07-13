import React from "react";
import { Header } from "./components/Header";
import { Nav } from "./components/Nav";
import { Section } from "./components/Section";
import { About } from "./components/About";
import { Videos } from "./components/Videos";
import { UppersiteContainer } from "./components/UppersiteContainer";
import { Main } from "./components/Main";

function App() {
  return (
    <>
      <UppersiteContainer>
        <Header />
        <Nav />
      </UppersiteContainer>
      <Main>
        <Section
          title="O nas"
          body={<About />}
        />
        <Section
          title="Videos"
          body={<Videos />}
        />
      </Main>
    </>
  );
}

export default App;
