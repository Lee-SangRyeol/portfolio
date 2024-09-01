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

interface MetagalleryDetailProps {
  onClose: () => void;
}

const MetagalleryDetail: React.FC<MetagalleryDetailProps> = ({ onClose }) => {
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
            <Title>마이메타갤러리의 백오피스</Title>
            <CloseButton onClick={onClose}>&times;</CloseButton>
          </Header>
          <ContentArea>
            <TopContent>
              마이메타갤러리의 백오피스 사이트 입니다.
              <br />
              프로젝트 설계 단계부터 개발 및 유지보수까지 A to Z로 업무를
              수행하였습니다.
              <br />
              데이터의 신뢰성과 가시성에 중점을 두었고, 출품작을 심사 및
              관리하는 기능을 제공합니다.
            </TopContent>
            <ContentBody>
              <ContentBox>
                <ContentBoxTitle>📍 주요 기능 및 특징</ContentBoxTitle>
                <Ul>
                  <UlText onClick={() => toggleList(0)}>✔ 대시보드</UlText>
                  <Li isVisible={openIndexes.includes(0)}>
                    cron job을 통해 통계를 위한 테이블을 설계하여, 회원탈퇴와
                    같은 상황에도 데이터의 신뢰성을 확보하기 위해 노력했습니다.
                  </Li>
                  <Li isVisible={openIndexes.includes(0)}>
                    당일 데이터와 총 누적 데이터는 실시간으로 반영될 수 있게
                    통계 테이블이 아닌 각각의 테이블에서 데이터를
                    수집하였습니다.
                  </Li>
                  <Li isVisible={openIndexes.includes(0)}>
                    최근 작품의 등록 데이터와 총 등록된 작품을 한눈에 파악할 수
                    있게 그래프를 사용하여 테이터를 시각화해서 구현하였습니다.
                  </Li>
                </Ul>
                <Ul>
                  <UlText onClick={() => toggleList(1)}>✔ 출품작 관리</UlText>
                  <Li isVisible={openIndexes.includes(1)}>
                    작품 등록을 통해 등록된 작품은 심사상태로 등록이 되고,
                    백오피스에서 심사를 진행합니다.
                  </Li>
                  <Li isVisible={openIndexes.includes(1)}>
                    심사 상태(심사기 및 심사 완료), 이름, 기간으로 검색 및
                    필터링 하는 기능을 제공합니다.
                  </Li>
                </Ul>
                <Ul>
                  <UlText onClick={() => toggleList(2)}>✔ 일간 리포트</UlText>
                  <Li isVisible={openIndexes.includes(2)}>
                    리워드 출금을 신청한 유저의 출금 승락 기능.
                  </Li>
                  <Li isVisible={openIndexes.includes(2)}>
                    날짜를 통한 특정 일 리포트 조회 가능.
                  </Li>
                  <Li isVisible={openIndexes.includes(2)}>
                    useRef를 통해 페이지가 다시 렌더되지 않고, 데이터의 전환이
                    가능하게 구현.
                  </Li>
                </Ul>
              </ContentBox>
              <ContentBox>
                <ContentBoxTitle>🛠️ 사용 기술 및 언어</ContentBoxTitle>
                <Text>TypeScript</Text>
                <Text>React</Text>
                <Text>Next.js</Text>
                <Text>Styled Components</Text>
                <Text>GraphQL</Text>
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
                  설계부터 개발 및 유지보수까지 A to Z로 업무를 수행한
                  프로젝트입니다. <br />
                  백오피스 담당 개발자로 근무하며, 에이락 월렛과는 다른
                  마이메타갤러리의 백오피스 페이지를 개발 하게 되었고, 설계
                  단계부터 데이터의 신뢰성과 가시성을 포커싱하며 진행
                  하였습니다. 첫 화면인 대시보드에서 모든 데이터를 보여주는것이
                  아닌 한눈에 바로 볼 수 있고, 봐야하는 데이터가 무엇인지
                  구분하였고, 그중에서도 그래프를 통해 추이를 직관적으로
                  이해해야하는 데이터를 선택하였습니다. 자세한 데이터는 일별로
                  조회하여 데이터를 볼 수 있게 일간리포트 텝으로 구분하였고,
                  프로젝트를 진행하며, 기획자 및 디자이너와 긴밀한 협업을 통해
                  완성도를 높이도록 노력하였습니다.
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

export default MetagalleryDetail;
