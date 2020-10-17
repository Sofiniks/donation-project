import React, { useState } from "react";
import FeaturedProjects from "./FeaturedProjects";
import ProjectList from "./ProjectList";
import Slider from "./Slider";
import ProjectsButton from "./buttons/ProjectsButton";
import { useMediaQuery } from "react-responsive";

export default function Projects() {
  const isTablet = useMediaQuery({
    query: "(max-width: 768px)",
  });
  const isMobile = useMediaQuery({ query: "(max-width: 360px)" });
  const [fullProjectsList, setFullProjectsList] = useState(false);
  const handleClick = () => {
    setFullProjectsList(true);
  };
  return (
    <div>
      {fullProjectsList ? (
        <ProjectList />
      ) : isMobile ? (
        <Slider />
      ) : isTablet ? (
        <FeaturedProjects featured={2} />
      ) : (
        <FeaturedProjects featured={3} />
      )}
      <div className='centered'>
        {fullProjectsList ? null : (
          <ProjectsButton onClick={handleClick}>
            Смотреть все проекты
          </ProjectsButton>
        )}
      </div>
    </div>
  );
}
