import React from "react";
import { Header } from "./components/Header";
import { Nav } from "./components/Nav";
import { Section } from "./components/Section";
import { About } from "./components/About";
import { Videos } from "./components/Videos";

function App() {
  return (
    <>
      <div>
        <Header />
        <Nav />
      </div>
      <main>
        <Section
          title="O nas"
          body={<About />}
        />
        <Section
          title="Videos"
          body={<Videos />}
        />
      </main>
    </>
  );
}

export default App;
