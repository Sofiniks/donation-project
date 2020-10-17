import React from "react";
import { useMediaQuery } from "react-responsive";
import Donations from "./components/Donations";
import Heading from "./components/Heading";
import Projects from "./components/Projects";

function App() {
  const isMobile = useMediaQuery({ query: "(max-width: 360px)" });
  return (
    <>
      <section className='project-section'>
        {isMobile ? (
          <Heading black>Те, кому сейчас необходимо помочь</Heading>
        ) : (
          <Heading black>Проекты, которым необходимо помочь</Heading>
        )}
        <Projects />
      </section>
      <section className='donation-section'>
        <Heading>О пожертвованиях</Heading>
        <Donations />
      </section>
    </>
  );
}

export default App;
