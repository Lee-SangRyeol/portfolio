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

interface PortfolioDetailProps {
  onClose: () => void;
}

const PortfolioDetail: React.FC<PortfolioDetailProps> = ({ onClose }) => {
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
            <Title>포트폴리오</Title>
            <CloseButton onClick={onClose}>&times;</CloseButton>
          </Header>
          <ContentArea>
            <TopContent>
              '이상렬'의 포트폴리오 사이트 입니다.
              <br />
              가지고 있는 프론트엔드 기술을 활용하여 개발부터 배포까지 진행해
              나만의 포트폴리오를 개발하였습니다.
            </TopContent>
            <ContentBody>
              <ContentBox>
                <ContentBoxTitle>📍 주요 기능 및 특징</ContentBoxTitle>
                <Ul>
                  <UlText onClick={() => toggleList(0)}>
                    ✔ SPA(Sing Page Application)
                  </UlText>
                  <Li isVisible={openIndexes.includes(0)}>
                    포트폴리오의 특성상 렌더에 필요한 데이터가 무겁지 않다고
                    판단.
                  </Li>
                  <Li isVisible={openIndexes.includes(0)}>
                    페이지가 다시 렌더 될 때마다 페이지를 다시 그리지 않고,
                    사용자가 보는 화면에 필요한 부분만 그려서 렌더링을 최적화.
                  </Li>
                  <Li isVisible={openIndexes.includes(0)}>
                    설계 단계부터 특정 화면별로 사용될 컴포넌트를 구조화하여
                    최대한 완벽한 SPA를 구현.
                  </Li>
                </Ul>
                <Ul>
                  <UlText onClick={() => toggleList(1)}>✔ Section</UlText>
                  <Li isVisible={openIndexes.includes(1)}>
                    index를 3개의 Section과 각 Section에서 보여지는 데이터를
                    전부 컴포넌트로 구조화 하여 구현하였으며, 스크롤을 통해
                    Section을 전환.
                  </Li>
                  <Li isVisible={openIndexes.includes(1)}>
                    Section1 : 첫 렌더 화면으로 타이틀과 E-Mail, 사진, last
                    update일로 구성
                  </Li>
                  <Li isVisible={openIndexes.includes(1)}>
                    Section2 : About Me와 Interview, Skill & Tools로 구성.
                  </Li>
                  <Li isVisible={openIndexes.includes(1)}>
                    Section3 : Section3는 다시 Career, Project, Education으로
                    구성하며, 각각 안에서 사용되는 컨테이너들 또한 구조화해서
                    필요한 부분만 렌더해서 사용.
                  </Li>
                </Ul>
                <Ul>
                  <UlText onClick={() => toggleList(2)}>✔ 배포</UlText>
                  <Li isVisible={openIndexes.includes(2)}>
                    vercel을 통한 배포.
                  </Li>
                </Ul>
              </ContentBox>
              <ContentBox>
                <ContentBoxTitle>🛠️ 사용 기술 및 언어</ContentBoxTitle>
                <Text>TypeScript</Text>
                <Text>React</Text>
                <Text>Next.js</Text>
                <Text>Styled Components</Text>
              </ContentBox>
              <ContentBox>
                <ContentBoxTitle>💻 작업 화면</ContentBoxTitle>
                <ImgText>*클릭하면 확대 되어 보입니다.</ImgText>
                <ImgContainer>
                  <ImgBox>
                    <WorkImg
                      $imageUrl="/images/pngs/meta1.png"
                      onClick={() => openImageModal("/images/pngs/meta1.png")}
                    />
                    <ImgText>ㄴ 대시보드</ImgText>
                  </ImgBox>
                  <ImgBox>
                    <WorkImg
                      $imageUrl="/images/pngs/meta2.png"
                      onClick={() => openImageModal("/images/pngs/meta2.png")}
                    />
                    <ImgText>ㄴ 출품작 관리</ImgText>
                  </ImgBox>
                  <ImgBox>
                    <WorkImg
                      $imageUrl="/images/pngs/meta3.png"
                      onClick={() => openImageModal("/images/pngs/meta3.png")}
                    />
                    <ImgText>ㄴ 일간 리포트</ImgText>
                  </ImgBox>
                </ImgContainer>
              </ContentBox>
              <ContentBox>
                <ContentBoxTitle>🏷 회고</ContentBoxTitle>
                <GrayText>
                  제가 가진 기술로 저만의 포트폴리오를 만들어 정리하고 싶어서
                  시작한 프로젝트입니다. <br />
                  처음 하는 싱글 사이드 프로젝트이며, 따로 포트폴리오가 없어서
                  자료 수집부터 설계까지 꼼꼼히 진행하였습니다. 혼자 진행하는
                  프로젝트의 장점을 살려 2주 완성을 목표로 진행하였고, 배포까지
                  큰 문제 없이 마무리할 수 있었습니다. 더 많은 기능과 고도화를
                  목표로 하고 있으며, 꾸준히 업데이트해 나아갈 예정입니다.
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

export default PortfolioDetail;
