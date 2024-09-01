import React, { useState } from "react";
import styled from "styled-components";
import { colors } from "../constants/index";
import Afun from "./projects/Afun";
import DontStop from "./projects/DontStop";
import Metagallery from "./projects/Metagallery";
import Portfolio from "./projects/Portfolio";
import TailorMadeTrip from "./projects/TailorMadeTrip";

const Project = () => {
  const [filter, setFilter] = useState("All");

  const renderContent = () => {
    const components = [
      { component: <Afun />, type: "Company" },
      { component: <Metagallery />, type: "Company" },
      { component: <Portfolio />, type: "Side" },
      { component: <DontStop />, type: "Side" },
      { component: <TailorMadeTrip />, type: "Side" },
    ];

    return components
      .filter((item) => filter === "All" || item.type === filter)
      .map((item, index) => (
        <ChildContainer key={index}>{item.component}</ChildContainer>
      ));
  };

  const handleFilterChange = (newFilter: string) => {
    setFilter(newFilter);
  };

  return (
    <AllContainer>
      <FilterContainer>
        <FilterButton
          onClick={() => handleFilterChange("All")}
          $active={filter === "All"}
        >
          All
        </FilterButton>
        <FilterButton
          onClick={() => handleFilterChange("Company")}
          $active={filter === "Company"}
        >
          Company
        </FilterButton>
        <FilterButton
          onClick={() => handleFilterChange("Side")}
          $active={filter === "Side"}
        >
          Side
        </FilterButton>
      </FilterContainer>
      <ContainerWrapper>{renderContent()}</ContainerWrapper>
    </AllContainer>
  );
};

export default Project;

interface FilterButtonProps {
  $active: boolean;
}

const AllContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  height: 800px;
  position: relative;
`;

const FilterContainer = styled.div`
  background-color: ${colors.grayscale.$02};
  padding: 15px 20px;
  border-radius: 50px;
  display: flex;
  gap: 10px;
  margin-bottom: 30px;
`;

const FilterButton = styled.button<FilterButtonProps>`
  padding: 10px 20px;
  border: none;
  border-radius: 50px;
  background-color: ${({ $active }) =>
    $active ? colors.grayscale.$10 : colors.grayscale.$02};
  color: ${({ $active }) =>
    $active ? colors.secondary.black : colors.secondary.white};
  cursor: pointer;
  transition: background-color 0.3s;
  font-size: 14px;
  font-weight: 700;

  &:hover {
    background-color: ${colors.grayscale.$11};
    color: ${colors.secondary.black};
  }
`;

const ContainerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  padding-left: 40px;
`;

const ChildContainer = styled.div`
  width: 300px;
  height: 400px;
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
