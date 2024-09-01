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
import MetagalleryDetail from "./MetagalleryDetail";

const Metagallery = () => {
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
        <MainImg $imageUrl="/images/pngs/metaMain.png" />
        <TextContainer>
          <Title>마이메타갤러리 백오피스</Title>
        </TextContainer>
        <Body>
          <GrayText>
            마이매타갤러리의 백오피스 사이트
            <br />
            대시보드, 회원관리, 작품관리등의 기능을 지원한다.
          </GrayText>
        </Body>
        <ButtonContainer>
          <Button onClick={openModal}>자세히보기</Button>
          {/* <Button as="a" href="https://.com" target="_blank">
            사이트 바로가기
          </Button> */}
        </ButtonContainer>
      </AllContainer>
      {isModalOpen && <MetagalleryDetail onClose={closeModal} />}
    </>
  );
};

export default Metagallery;
