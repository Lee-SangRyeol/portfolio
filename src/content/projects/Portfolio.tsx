import React, { useState } from "react";
import {
  AllContainer,
  MainImg,
  TextContainer,
  Title,
  Body,
  GrayText,
  ButtonContainer,
  Button,
} from "./ProjectsStyles";
import PortfolioDetail from "./PortfolioDetail";

const Portfolio = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <AllContainer>
        <MainImg $imageUrl="/images/pngs/portfolio5.png" />
        <TextContainer>
          <Title>포트폴리오</Title>
        </TextContainer>
        <Body>
          <GrayText>
            '이상렬'의 포트폴리오 사이트
            <br />
            나만의 포트폴리오를 위해 개발.
          </GrayText>
        </Body>
        <ButtonContainer>
          <Button onClick={openModal}>자세히보기</Button>
          <Button as="a" href="https:/sangryeol.site" target="_blank">
            사이트 바로가기
          </Button>
        </ButtonContainer>
      </AllContainer>
      {isModalOpen && <PortfolioDetail onClose={closeModal} />}
    </>
  );
};

export default Portfolio;
