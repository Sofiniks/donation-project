import React, { useState } from "react";
import FeaturedProjects from "./FeaturedProjects";
import Slider from "./Slider";
import ProjectsButton from "./buttons/ProjectsButton";
import { useMediaQuery } from "react-responsive";

export default function Projects() {
  const isTablet = useMediaQuery({
    query: "(max-width: 768px)",
  });
  const isMobile = useMediaQuery({ query: "(max-width: 360px)" });
  /* Булевые значения лучше называть соотвествующе к примеру isFullProjectList, потому что FullProjectList звучит непонятно, может это просто какой-то массив*/
  const [isFullProjectList, setFullProjectsList] = useState(false);
  /* Тут лучше назвать как-то по-другому, toggleProjects, к примеру, а то непонятно что за клик */
  const handleClick = () => {
    setFullProjectsList(true);
  };

  /* Лучше уровнем выше определить featured */
  const featured = !isFullProjectList ? (isTablet ? 2 : 3) : null;
  return (
    <div>
      {isMobile ? <Slider /> : <FeaturedProjects featured={featured} />}

      <div className="centered">
        {/* Куда кнопка пропадает, ту сама пофикси */}
        {isFullProjectList ? null : (
          <ProjectsButton onClick={handleClick}>
            Смотреть все проекты
          </ProjectsButton>
        )}
      </div>
    </div>
  );
}
