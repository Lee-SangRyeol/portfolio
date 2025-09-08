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
import GuideMeDetail from "./Guide-MeDetail"; // AfunDetail 모달 import

const GuideMe = () => {
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
        <MainImg $imageUrl="/images/pngs/guideme-Home.png" />
        <TextContainer>
          <Title>Guide Me <br /> Back Office</Title>
        </TextContainer>
        <Body>
          <GrayText>
            가이드미의 백오피스 사이트
            <br />
            대시보드, 사용자 관리, 서포터 관리, 푸시알림 전송, 게시판 관리 등의
            기능을 지원한다. 
          </GrayText>
        </Body>
        <ButtonContainer>
          <Button onClick={openModal}>자세히보기</Button>
          {/* <Button as="a" href="https://.com" target="_blank">
            사이트 바로가기
          </Button> */}
        </ButtonContainer>
      </AllContainer>
      {isModalOpen && <GuideMeDetail onClose={closeModal} />}
    </>
  );
};

export default GuideMe;
