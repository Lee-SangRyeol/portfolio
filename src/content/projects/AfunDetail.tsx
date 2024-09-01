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

interface AfunDetailProps {
  onClose: () => void;
}

const AfunDetail: React.FC<AfunDetailProps> = ({ onClose }) => {
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
            <Title>에이락 월렛 백오피스</Title>
            <CloseButton onClick={onClose}>&times;</CloseButton>
          </Header>
          <ContentArea>
            <TopContent>
              에이락 월렛의 백오피스 사이트 입니다.
              <br />
              정보 조회용 페이지에서 다양한 기능을 제공하는 백오피스 사이트로
              리뉴얼 작업을 하였습니다.
            </TopContent>
            <ContentBody>
              <ContentBox>
                <ContentBoxTitle>📍 주요 기능 및 특징</ContentBoxTitle>
                <Ul>
                  <UlText onClick={() => toggleList(0)}>✔ 권한분리</UlText>
                  <Li isVisible={openIndexes.includes(0)}>
                    Master : 모든 권한
                  </Li>
                  <Li isVisible={openIndexes.includes(0)}>
                    Manager : 회원탈퇴와 제휴사 추가, 삭제를 제외한 모든 권한
                  </Li>
                  <Li isVisible={openIndexes.includes(0)}>
                    Staff : 리워드 지급과 모든 데이터 조회 권한
                  </Li>
                  <Li isVisible={openIndexes.includes(0)}>
                    Service : CS대행업체를 위한 권한. 고객문의 기능만 사용가능.
                  </Li>
                  <Li isVisible={openIndexes.includes(0)}>
                    Customer : 제휴사관련 정보 조회 권한.
                  </Li>
                </Ul>
                <Ul>
                  <UlText onClick={() => toggleList(1)}>✔ 정보조회</UlText>
                  <Li isVisible={openIndexes.includes(1)}>
                    회원정보 및 제휴사정보, 리워드 지급내역 등 권한에 따라 조회
                    기능 제공
                  </Li>
                </Ul>
                <Ul>
                  <UlText onClick={() => toggleList(2)}>✔ 리워드 지급</UlText>
                  <Li isVisible={openIndexes.includes(2)}>
                    리워드 출금을 신청한 유저의 출금 승락 기능.
                  </Li>
                </Ul>
                <Ul>
                  <UlText onClick={() => toggleList(3)}>
                    ✔ 에이락 몰 상품관리
                  </UlText>
                  <Li isVisible={openIndexes.includes(3)}>
                    상품의 추가 및 삭제 기능
                  </Li>
                  <Li isVisible={openIndexes.includes(3)}>
                    가격 변경 및 할인율 변경 기능
                  </Li>
                  <Li isVisible={openIndexes.includes(3)}>
                    테마 상품과 굿딜 상품 추가 및 삭제 기능
                  </Li>
                </Ul>
                <Ul>
                  <UlText onClick={() => toggleList(4)}>✔ 고객문의</UlText>
                  <Li isVisible={openIndexes.includes(4)}>
                    CS대행업체에서 사용하는 기능
                  </Li>
                  <Li isVisible={openIndexes.includes(4)}>
                    유저의 지갑 정보, 리워드 지급 및 수급 내역, 리워드 출금 거부
                    사유등을 조회 가능
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
                      $imageUrl="/images/pngs/afun1.png"
                      onClick={() => openImageModal("/images/pngs/afun1.png")}
                    />
                    <ImgText>ㄴ 대시보드</ImgText>
                  </ImgBox>
                  <ImgBox>
                    <WorkImg
                      $imageUrl="/images/pngs/afun2.png"
                      onClick={() => openImageModal("/images/pngs/afun2.png")}
                    />
                    <ImgText>ㄴ 에이락 몰 상품 관리</ImgText>
                  </ImgBox>
                  <ImgBox>
                    <WorkImg
                      $imageUrl="/images/pngs/afun3.png"
                      onClick={() => openImageModal("/images/pngs/afun3.png")}
                    />
                    <ImgText>ㄴ 회원관리</ImgText>
                  </ImgBox>
                </ImgContainer>
              </ContentBox>
              <ContentBox>
                <ContentBoxTitle>🏷 회고</ContentBoxTitle>
                <GrayText>
                  처음에는 단순히 정보조회 기능만 있었던 사이트였습니다. <br />
                  하지만, 백오피스 사이트의 목적에 맞게 업무를 지원하는 페이지로
                  고도화에 성공하였습니다.
                  <br />
                  백오피스 담당 개발자로 근무하며 기능적으로 이슈가 있던 [리워드
                  지급 승락 기능 리팩토링], [고객문의를 위한 데이터 조회],
                  [에이락 몰의 상품 관리]등을 개발하였으며, 대시보드와 함께
                  [백오피스 전체 디자인을 리뉴얼] 또한 진행하며 풀스택 업무
                  경험을 쌓을 수 있었습니다. 업무 특성상 기획자, 디자이너와 같은
                  타 직군의 직원들과 직접 소통 할 일이 많았고, 이를 통해 타
                  직군과의 협업을 많이 배우게 되었습니다. 책임감을 가지고 일을
                  할 수 있었고, '백오피스는 상렬님이 알아서 잘 하시잖아요'와
                  같은 말을 들을 때 마다 큰 보람을 느끼게 되었고, 이 성취를
                  원동력 삼아 오너십을 가지고 업무를 수행 할 수 있었던것
                  같습니다.
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

export default AfunDetail;
