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
import AfunDetail from "./AfunDetail"; // AfunDetail 모달 import

const Afun = () => {
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
        <MainImg $imageUrl="/images/pngs/afunMain.png" />
        <TextContainer>
          <Title>에이락 월렛 백오피스</Title>
        </TextContainer>
        <Body>
          <GrayText>
            에이락 월렛의 백오피스 사이트
            <br />
            대시보드, 회원관리, 리워드 지급, 에이락몰 상품관리, 고객문의 등의
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
      {isModalOpen && <AfunDetail onClose={closeModal} />}
    </>
  );
};

export default Afun;
