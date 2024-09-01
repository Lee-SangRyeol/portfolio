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
import TailorMadeTripDetail from "./TailorMadeTripDetail";

const TailorMadeTrip = () => {
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
        <MainImg $imageUrl="/images/pngs/tmtMain.png" />
        <TextContainer>
          <Title>TailorMadeTrip</Title>
        </TextContainer>
        <Body>
          <GrayText>
            여행지 추천 사이트 사이트
            <br />
            여행 일정을 등록하고, 다양한 여행지를 추천해주는 기능을 제공하는
            서비스 개발.
          </GrayText>
        </Body>
        <ButtonContainer>
          <Button onClick={openModal}>자세히보기</Button>
        </ButtonContainer>
      </AllContainer>
      {isModalOpen && <TailorMadeTripDetail onClose={closeModal} />}
    </>
  );
};

export default TailorMadeTrip;
