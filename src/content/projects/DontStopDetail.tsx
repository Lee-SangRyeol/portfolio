import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import {
  Background,
  Container,
  Header,
  Title,
  CloseButton,
  ContentArea,
  TopContent,
  ContentBody,
  ContentBox,
  ContentBoxTitle,
  Ul,
  UlText,
  Li,
  Text,
  GrayText,
  ImgText,
  WorkImg,
  ImgContainer,
  ImgBox,
  ImageModal,
  ImageModalContent,
} from "./DetailStyles";
import { useScrollLock } from "./useScrollLock";

interface DontStopDetailProps {
  onClose: () => void;
}

const DontStopDetail: React.FC<DontStopDetailProps> = ({ onClose }) => {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [selectedImageUrl, setSelectedImageUrl] = useState<string | null>(null);

  useScrollLock(!isImageModalOpen);

  // 리스트를 토글하는 함수
  const toggleList = (index: number) => {
    setOpenIndexes(
      (prevIndexes) =>
        prevIndexes.includes(index)
          ? prevIndexes.filter((i) => i !== index) // 이미 열려있으면 닫음
          : [...prevIndexes, index] // 닫혀있으면 염
    );
  };

  const openImageModal = (imageUrl: string) => {
    setSelectedImageUrl(imageUrl);
    setIsImageModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeImageModal = () => {
    setIsImageModalOpen(false);
    setSelectedImageUrl(null);
    document.body.style.overflow = "auto";
  };

  // createPortal을 사용하여 모달을 최상위 DOM에 렌더링
  return ReactDOM.createPortal(
    <>
      <Background onClick={onClose}>
        <Container
          onClick={(e: { stopPropagation: () => void }) => e.stopPropagation()}
        >
          <Header>
            <Title>Don't Stop</Title>
            <CloseButton onClick={onClose}>&times;</CloseButton>
          </Header>
          <ContentArea>
            <TopContent>
              온라인 스터디 그룹 서비스를 제공하는 사이트 입니다.
              <br />
              코로나 바이러스로 인해 오프라인 스터디가 어려워짐에 따라 온라인
              환경을 통한 스터디 그룹의 효과적인 학습공간을 제공하는 것을 목표로
              프로젝트 진행하였습니다. 온라인 스터디와 오프라인 스터디의
              장단점을 비교 분석하여 서비스를 기획하고, 구현하였습니다.
            </TopContent>
            <ContentBody>
              <ContentBox>
                <ContentBoxTitle>📍 주요 기능 및 특징</ContentBoxTitle>
                <Ul>
                  <UlText onClick={() => toggleList(0)}>
                    ✔ 온라인 스터디 그룹
                  </UlText>
                  <Li isVisible={openIndexes.includes(0)}>
                    웹이라는 공간에서 온라인을 통해 스터디 그룹을 만들고 가입해
                    효과적인 학습환경을 제공.
                  </Li>
                </Ul>
                <Ul>
                  <UlText onClick={() => toggleList(1)}>✔ 랭킹 기능</UlText>
                  <Li isVisible={openIndexes.includes(1)}>
                    타이머 기능을 통해 학습량을 비교하여 주간 랭킹을 부여.
                  </Li>
                </Ul>
                <Ul>
                  <UlText onClick={() => toggleList(2)}>✔ 학습 기록</UlText>
                  <Li isVisible={openIndexes.includes(2)}>
                    타이머를 이용해 일일 학습량을 저장.
                  </Li>
                  <Li isVisible={openIndexes.includes(2)}>
                    메모 기능을 통해 학습내용 메모.
                  </Li>
                </Ul>
              </ContentBox>
              <ContentBox>
                <ContentBoxTitle>🛠️ 사용 기술 및 언어</ContentBoxTitle>
                <Text>React</Text>
                <Text>node.js</Text>
                <Text>express</Text>
                <Text>mysql</Text>
              </ContentBox>
              <ContentBox>
                <ContentBoxTitle>✨ 작업 기여</ContentBoxTitle>
                <Ul>
                  <UlText onClick={() => toggleList(3)}>
                    ✔ 프로젝트 기획 및 설계
                  </UlText>
                  <Li isVisible={openIndexes.includes(3)}>
                    아이디어를 도출을 하고, 서비스를 구상을 위해 Figjam을
                    활용하여 flow chart를 만들어 아이디어 구체화
                  </Li>
                </Ul>
                <Ul>
                  <UlText onClick={() => toggleList(4)}>✔ 백엔드</UlText>
                  <Li isVisible={openIndexes.includes(4)}>
                    백엔드 모든 기능을 맡아서 개발.
                  </Li>
                  <Li isVisible={openIndexes.includes(4)}>
                    node.js에서 express를 사용해서 api를 개발.
                  </Li>
                </Ul>
                <Ul>
                  <UlText onClick={() => toggleList(5)}>
                    ✔ DB설계 및 구축
                  </UlText>
                  <Li isVisible={openIndexes.includes(5)}>
                    관계형 데이터베이스 설계
                  </Li>
                  <Li isVisible={openIndexes.includes(5)}>
                    MySql을 사용한 데이터베이스 구축.
                  </Li>
                </Ul>
              </ContentBox>
              <ContentBox>
                <ContentBoxTitle>💻 작업 화면</ContentBoxTitle>
                <ImgText>*클릭하면 확대 되어 보입니다.</ImgText>
                <ImgContainer>
                  <ImgBox>
                    <WorkImg
                      $imageUrl="/images/pngs/dontstopMain.png"
                      onClick={() =>
                        openImageModal("/images/pngs/dontstopMain.png")
                      }
                    />
                    <ImgText>ㄴ 메인화면 및 랭킹</ImgText>
                  </ImgBox>
                  <ImgBox>
                    <WorkImg
                      $imageUrl="/images/pngs/dontstop1.png"
                      onClick={() =>
                        openImageModal("/images/pngs/dontstop1.png")
                      }
                    />
                    <ImgText>ㄴ 스터디 그룹 생성 및 가입</ImgText>
                  </ImgBox>
                  <ImgBox>
                    <WorkImg
                      $imageUrl="/images/pngs/dontstop2.png"
                      onClick={() =>
                        openImageModal("/images/pngs/dontstop2.png")
                      }
                    />
                    <ImgText>ㄴ 일일 학습량 체크 및 기록 </ImgText>
                  </ImgBox>
                </ImgContainer>
              </ContentBox>
              <ContentBox>
                <ContentBoxTitle>🏷 회고</ContentBoxTitle>
                <GrayText>
                  처음 진행하는 프로젝트이면서 혼자 백엔드를 해야 하는 상황이라
                  부담이 있었지만, 그 과정에서 많은 배움이 있었던
                  프로젝트였습니다. 가장 큰 공부는 api의 이해였습니다.
                  데이터베이스에 있는 정보들을 어떻게 사용해야 하는지,
                  프론트엔드에서 필요로 하는 정보들을 어떻게 넘겨줘야 하는지,
                  처음 기획 & 설계와는 다르게 필요 없었던 api들은 없애고,
                  생각하지 못했던 api들을 만들면서 저의 부족함 또한 알아가는
                  시간이 되었습니다. 배포 시에 aws에서 제공해 주는 서비스들(ec2,
                  s3, rds)을 어떻게 사용하면 되는지 배우는 시간이 되었고
                  ‘웹’이라는 것을 이해하는 시간이었습니다.
                </GrayText>
              </ContentBox>
            </ContentBody>
          </ContentArea>
        </Container>
      </Background>
      {isImageModalOpen && selectedImageUrl && (
        <ImageModal>
          <ImageModalContent onClick={closeImageModal}>
            <img src={selectedImageUrl} alt="Enlarged view" />
          </ImageModalContent>
        </ImageModal>
      )}
    </>,
    document.body // 모달을 body에 직접 렌더링
  );
};

export default DontStopDetail;
