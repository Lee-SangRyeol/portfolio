import React, { useState } from "react";
import styled from "styled-components";
import { colors } from "../constants/index";
import InhaTC from "./educations/InhaTC";
import Codestates from "./educations/Codestates";
import AcademicCreditBank from "./educations/AcademicCreditBank";

const Education = () => {
  const renderContent = () => {
    const components = [<InhaTC />, <Codestates />, <AcademicCreditBank />];
    return components.map((component, index) => (
      <ChildContainer key={index}>{component}</ChildContainer>
    ));
  };

  return (
    <AllContainer>
      <ContainerWrapper>{renderContent()}</ContainerWrapper>
    </AllContainer>
  );
};

export default Education;

const AllContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 800px;
  position: relative;
`;

const ContainerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 30px;
`;

const ChildContainer = styled.div`
  width: 700px;
  height: 250px;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.grayscale.$02};
  border-radius: 5px;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;
