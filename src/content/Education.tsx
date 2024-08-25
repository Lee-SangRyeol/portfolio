import React, { useState } from "react";
import styled from "styled-components";
import { colors } from "../constants/index";
import InhaTC from "./educations/InhaTC";
import Codestates from "./educations/Codestates";
import AcademicCreditBank from "./educations/AcademicCreditBank";

const Education = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, 2));
  };

  const renderContent = () => {
    const components = [<InhaTC />, <Codestates />, <AcademicCreditBank />];

    return components.map((component, index) => (
      <ChildContainer
        key={index}
        isActive={index === currentIndex}
        isAdjacent={index === currentIndex - 1 || index === currentIndex + 1}
      >
        {component}
      </ChildContainer>
    ));
  };

  return (
    <AllContainer>
      <ContainerWrapper currentIndex={currentIndex}>
        {renderContent()}
      </ContainerWrapper>
      <ButtonContainer>
        {currentIndex !== 0 && (
          <Button onClick={handlePrevious}>&#9664;</Button>
        )}
        {currentIndex !== 2 && <Button onClick={handleNext}>&#9654;</Button>}
      </ButtonContainer>
    </AllContainer>
  );
};

export default Education;

const AllContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
  width: calc(100vw - 200px);
  height: 600px;
`;

interface ContainerWrapperProps {
  currentIndex: number;
}

const ContainerWrapper = styled.div<ContainerWrapperProps>`
  display: flex;
  flex-direction: row;
  gap: 10px;
  transition: transform 0.5s ease;
  transform: translateX(${(props) => -props.currentIndex * 520}px);
`;

const ChildContainer = styled.div<{ isActive: boolean; isAdjacent: boolean }>`
  width: 500px;
  height: 550px;
  margin: 0 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.grayscale.$02};
  border-radius: 5px;
  transition: opacity 0.5s ease, transform 0.5s ease;
  opacity: ${(props) => (props.isActive ? 1 : 0.5)};
  transform: scale(${(props) => (props.isActive ? 1 : 0.9)});
  filter: ${(props) => (props.isActive ? "none" : "blur(1px)")};
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 120px;
  margin-top: 20px;
`;

const Button = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
`;
