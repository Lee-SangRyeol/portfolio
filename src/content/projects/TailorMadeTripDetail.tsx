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

interface TailorMadeTripDetailProps {
  onClose: () => void;
}

const TailorMadeTripDetail: React.FC<TailorMadeTripDetailProps> = ({
  onClose,
}) => {
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
            <Title>TailorMadeTrip</Title>
            <CloseButton onClick={onClose}>&times;</CloseButton>
          </Header>
          <ContentArea>
            <TopContent>
              국내 여행지 추천 사이트 입니다.
              <br />
              국내 다양한 여행지의 정보제공을 기본으로 하고, 서비스 이용자들의
              다양한 여행 계획을 참고하여 본인만의 여행 계획을 세울 수 있도록
              도와줍니다.
            </TopContent>
            <ContentBody>
              <ContentBox>
                <ContentBoxTitle>📍 주요 기능 및 특징</ContentBoxTitle>
                <Ul>
                  <UlText onClick={() => toggleList(0)}>✔ 여행지 등록</UlText>
                  <Li isVisible={openIndexes.includes(0)}>
                    본인의 여행 루트를 기록하고 메모해서 서비스에 저장할 수 있는
                    기능을 제공.
                  </Li>
                  <Li isVisible={openIndexes.includes(0)}>
                    마이페이지에서 스케줄러를 통해 달력과 함께 여행 다이어리
                    기능 제공.
                  </Li>
                </Ul>
                <Ul>
                  <UlText onClick={() => toggleList(1)}>✔ 여행지 검색</UlText>
                  <Li isVisible={openIndexes.includes(1)}>
                    전국 관광지 api를 통해 추합한 데이터를 기반으로 카테고리
                    별로 정제한 데이터 사용.
                  </Li>
                  <Li isVisible={openIndexes.includes(1)}>
                    기본 데이터에 유저들이 찾고 추천한 숨은 명소도 등록.
                  </Li>
                  <Li isVisible={openIndexes.includes(1)}>
                    카테고리에 맞게 구분된 여행지를 필터 및 검색기능 제공
                  </Li>
                </Ul>
                <Ul>
                  <UlText onClick={() => toggleList(2)}>
                    ✔ 여행지 추천 알고리즘
                  </UlText>
                  <Li isVisible={openIndexes.includes(2)}>
                    유저 데이터를 기반으로 알고리즘 구현.
                  </Li>
                </Ul>
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
                    2명이서 Api 기능을 나눠서 개발.
                  </Li>
                  <Li isVisible={openIndexes.includes(4)}>
                    여행지 추천 알고리즘 구현.
                  </Li>
                </Ul>
                <Ul>
                  <UlText onClick={() => toggleList(5)}>
                    ✔ DB설계 및 구축
                  </UlText>
                  <Li isVisible={openIndexes.includes(5)}>
                    비관계형 데이터베이스 설계
                  </Li>
                  <Li isVisible={openIndexes.includes(5)}>
                    mongoDB를 사용한 데이터베이스 구축.
                  </Li>
                </Ul>
              </ContentBox>
              <ContentBox>
                <ContentBoxTitle>🛠️ 사용 기술 및 언어</ContentBoxTitle>
                <Text>TypeScript</Text>
                <Text>React</Text>
                <Text>node.js</Text>
                <Text>mongose</Text>
                <Text>mongoDB</Text>
              </ContentBox>
              <ContentBox>
                <ContentBoxTitle>💻 작업 화면</ContentBoxTitle>
                <ImgText>*클릭하면 확대 되어 보입니다.</ImgText>
                <ImgContainer>
                  <ImgBox>
                    <WorkImg
                      $imageUrl="/images/pngs/tmt1.png"
                      onClick={() => openImageModal("/images/pngs/tmt1.png")}
                    />
                    <ImgText>ㄴ 전국 숨은 명소</ImgText>
                  </ImgBox>
                  <ImgBox>
                    <WorkImg
                      $imageUrl="/images/pngs/tmt2.png"
                      onClick={() => openImageModal("/images/pngs/tmt2.png")}
                    />
                    <ImgText>ㄴ 여행일정 등록 및 검색</ImgText>
                  </ImgBox>
                  <ImgBox>
                    <WorkImg
                      $imageUrl="/images/pngs/tmt3.png"
                      onClick={() => openImageModal("/images/pngs/tmt3.png")}
                    />
                    <ImgText>ㄴ 여행 스케줄러</ImgText>
                  </ImgBox>
                </ImgContainer>
              </ContentBox>
              <ContentBox>
                <ContentBoxTitle>🏷 회고</ContentBoxTitle>
                <GrayText>
                  프로젝트 기획 시에 주된 목표는 새로운 기술 스택을 경험하고
                  공부하는 것이었습니다. 프론트엔드뿐 아니라 백엔드에서도
                  타입스크립트를 사용하면 코드의 높은 안정성을 가질 수 있다고
                  해서 사용해 보고 싶었고, 비관계형 DB인 MongoDB를 사용해 DB의
                  구조를 정의하지 않고 유연하게 사용해 보고 싶었습니다. 배워보지
                  않은 타입스크립트와 MongoDB를 사용해 프로젝트를 진행하는
                  것이라 어려움이 있었지만, 덕분에 많은 것을 배워볼 수 있는
                  기회였습니다. 타입스크립트의 사용으로 타입들을 하나하나
                  지정하다 보니 타입 에러와 같은 에러에 대한 방어가 가능했지만,
                  솔직히 높은 안정성과 같은 경험은 하지 못한 것 같아 더
                  공부해야겠다는 생각이 들었습니다. MongoDB를 통해 선택한
                  여행지를 개수 제한 없이 DB 내 해당 사용자의 정보에 저장하는
                  기능을 구현하였는데 이 덕분에 비관계형DB의 장점을 확실히 배운
                  것 같습니다.
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

export default TailorMadeTripDetail;
