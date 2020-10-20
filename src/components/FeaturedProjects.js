import React from "react";
import styled from "styled-components";
import ProjectItem from "./ProjectItem";
import { projects } from "../data";

const List = styled.ul`
  margin: 0 auto;
  display: grid;
  grid-template-columns: 33.3% 33.3% 33.3%;
  gap: 30px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 50% 50%;
  }
`;

export default function FeaturedProjects({ featured }) {
  const list = featured ? projects.slice(0, featured) : projects;
  return (
    <List>
      {list.map((item) => (
        <ProjectItem {...item} key={item.id} />
      ))}
    </List>
  );
}
