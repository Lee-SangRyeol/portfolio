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
import DontStopDetail from "./DontStopDetail";

const DontStop = () => {
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
        <MainImg $imageUrl="/images/pngs/dontstopMain.png" />
        <TextContainer>
          <Title>Don't Stop</Title>
        </TextContainer>
        <Body>
          <GrayText>
            온라인 스터디 웹 사이트
            <br />
            온라인 환경에서 스터디 그룹을 조직하고 효과적인 학습공간을 제공하는
            사이트
          </GrayText>
        </Body>
        <ButtonContainer>
          <Button onClick={openModal}>자세히보기</Button>
          {/* <Button as="a" href="https:/sangryeol.site" target="_blank">
            사이트 바로가기
          </Button> */}
        </ButtonContainer>
      </AllContainer>
      {isModalOpen && <DontStopDetail onClose={closeModal} />}
    </>
  );
};

export default DontStop;
