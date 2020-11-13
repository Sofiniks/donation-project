import React, { useState } from "react";
import FeaturedProjects from "./FeaturedProjects";
import Slider from "./Slider";
import ProjectsButton from "./buttons/ProjectsButton";
import { useMediaQuery } from "react-responsive";

export default function Projects() {
  const isTablet = useMediaQuery({
    query: "(max-width: 1160px)",
  });
  const isMobile = useMediaQuery({ query: "(max-width: 660px)" });
  const [toggleProjects, setToggleProjects] = useState(false);
  const handleClick = () => {
    setToggleProjects(true);
  };
  const featured = !toggleProjects ? (isTablet ? 2 : 3) : null;
  return (
    <>
      {isMobile ? <Slider /> : <FeaturedProjects featured={featured} />}
      <div className='centered'>
        {toggleProjects ? null : (
          <ProjectsButton onClick={handleClick}>
            Смотреть все проекты
          </ProjectsButton>
        )}
      </div>
    </>
  );
}
