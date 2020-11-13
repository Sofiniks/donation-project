import React from "react";
import { useMediaQuery } from "react-responsive";
import Donations from "./components/Donations";
import Heading from "./components/Heading";
import Projects from "./components/Projects";

function App() {
  const isMobile = useMediaQuery({ query: "(max-width: 660px)" });
  return (
    <>
      <section className='project-section'>
        <Heading black>{`${isMobile
          ? "Те, кому сейчас необходимо помочь"
          : "Проекты, которым необходимо помочь"
          }`}</Heading>
        <Projects />
      </section>
      <section className='donation-section'>
        <Donations />
      </section>
    </>
  );
}

export default App;
