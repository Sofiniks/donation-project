import React from "react";
import styled from "styled-components";
import ProjectItem from "./ProjectItem";
import { projects } from "../data";

const List = styled.ul`
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 30px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export default function FeaturedProjects({ featured }) {
  let featuredProjects = [];
  for (let i = 0; i <= featured - 1; i++) {
    featuredProjects.push(projects[i]);
  }
  let list = featuredProjects.map((item) => {
    return <ProjectItem key={item.id} {...item} />;
  });

  return <List>{list}</List>;
}
