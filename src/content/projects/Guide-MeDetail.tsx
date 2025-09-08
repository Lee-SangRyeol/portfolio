import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
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
} from './DetailStyles';
import { useScrollLock } from './useScrollLock';

interface GuideMeDetailProps {
  onClose: () => void;
}

const GuideMeDetail: React.FC<GuideMeDetailProps> = ({ onClose }) => {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [selectedImageUrl, setSelectedImageUrl] = useState<string | null>(null);

  useScrollLock(!isImageModalOpen);

  // 리스트를 토글하는 함수
  const toggleList = (index: number) => {
    setOpenIndexes(
      prevIndexes =>
        prevIndexes.includes(index)
          ? prevIndexes.filter(i => i !== index) // 이미 열려있으면 닫음
          : [...prevIndexes, index], // 닫혀있으면 염
    );
  };

  const openImageModal = (imageUrl: string) => {
    setSelectedImageUrl(imageUrl);
    setIsImageModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeImageModal = () => {
    setIsImageModalOpen(false);
    setSelectedImageUrl(null);
    document.body.style.overflow = 'auto';
  };

  // createPortal을 사용하여 모달을 최상위 DOM에 렌더링
  return ReactDOM.createPortal(
    <>
      <Background onClick={onClose}>
        <Container onClick={(e: { stopPropagation: () => void }) => e.stopPropagation()}>
          <Header>
            <Title>가이드미 백오피스</Title>
            <CloseButton onClick={onClose}>&times;</CloseButton>
          </Header>
          <ContentArea>
            <TopContent>
              가이드미의 백오피스 사이트 입니다.
              <br />
              서비스 개발중 백오피스 사이트의 필요로 인해 채용되어 처음부터 설계 및 개발을
              진행하였습니다.
              <br />
              디자인의 완성도 보다는 기능적인 완성도를 우선하여 개발하였습니다.
            </TopContent>
            <ContentBody>
              <ContentBox>
                <ContentBoxTitle>📍 주요 기능 및 특징</ContentBoxTitle>
                <Ul>
                  <UlText onClick={() => toggleList(0)}>✔ 대시보드</UlText>
                  <Li isVisible={openIndexes.includes(0)}>서포터 현황 및 요청 대기 건 확인</Li>
                  <Li isVisible={openIndexes.includes(0)}>미처리 문의 및 신고 건 확인</Li>
                  <Li isVisible={openIndexes.includes(0)}>백오피스 기능을 통한 최근 작업 확인</Li>
                </Ul>
                <Ul>
                  <UlText onClick={() => toggleList(1)}>✔ 사용자 관리</UlText>
                  <Li isVisible={openIndexes.includes(1)}>사용자의 상세 정보 조회 기능 제공</Li>
                  <Li isVisible={openIndexes.includes(1)}>사용자 활동 정지 기능 제공</Li>
                </Ul>
                <Ul>
                  <UlText onClick={() => toggleList(2)}>✔ 서포터 관리</UlText>
                  <Li isVisible={openIndexes.includes(2)}>서포터의 상세 정보 조회 기능 제공</Li>
                  <Li isVisible={openIndexes.includes(2)}>서포터 신청 건에 대한 심사 기능 제공</Li>
                </Ul>
                <Ul>
                  <UlText onClick={() => toggleList(3)}>✔ 푸시알림 전송</UlText>
                  <Li isVisible={openIndexes.includes(3)}>푸시알림 목록 데이터 조회 기능 제공</Li>
                  <Li isVisible={openIndexes.includes(3)}>
                    메시지큐를 통한 비동기 푸시알림 전송 기능 제공
                  </Li>
                  <Li isVisible={openIndexes.includes(3)}>다국어를 위한 번역 기능 제공</Li>
                </Ul>
                <Ul>
                  <UlText onClick={() => toggleList(4)}>✔ 게시판 관리</UlText>
                  <Li isVisible={openIndexes.includes(4)}>
                    문의 내역, 공지사항, QnA, 약관과 같은 게시판 목록 데이터 조회 기능 제공
                  </Li>
                  <Li isVisible={openIndexes.includes(4)}>
                    게시판 상세 정보 조회 및 작성 기능 제공
                  </Li>
                  <Li isVisible={openIndexes.includes(4)}>다국어를 위한 번역 기능 제공</Li>
                </Ul>
              </ContentBox>
              <ContentBox>
                <ContentBoxTitle>🛠️ 사용 기술 및 언어</ContentBoxTitle>
                <Text>TypeScript</Text>
                <Text>React</Text>
                <Text>Tailwind CSS</Text>
                <Text>NestJS</Text>
                <Text>RabbitMQ</Text>
              </ContentBox>
              <ContentBox>
                <ContentBoxTitle>💻 작업 화면</ContentBoxTitle>
                <ImgText>*클릭하면 확대 되어 보입니다.</ImgText>
                <ImgContainer>
                  <ImgBox>
                    <WorkImg
                      $imageUrl="/images/pngs/guideme-Home.png"
                      onClick={() => openImageModal('/images/pngs/guideme-Home.png')}
                    />
                    <ImgText>ㄴ 대시보드</ImgText>
                  </ImgBox>
                  <ImgBox>
                    <WorkImg
                      $imageUrl="/images/pngs/guideme-AuditRequestList.png"
                      onClick={() => openImageModal('/images/pngs/guideme-AuditRequestList.png')}
                    />
                    <ImgText>ㄴ 서포터 심사 요청 목록</ImgText>
                  </ImgBox>
                  <ImgBox>
                    <WorkImg
                      $imageUrl="/images/pngs/guideme-AuditRequestDetail.png"
                      onClick={() => openImageModal('/images/pngs/guideme-AuditRequestDetail.png')}
                    />
                    <ImgText>ㄴ 서포터 심사 상세 화면</ImgText>
                  </ImgBox>
                  <ImgBox>
                    <WorkImg
                      $imageUrl="/images/pngs/guideme-PushList.png"
                      onClick={() => openImageModal('/images/pngs/guideme-PushList.png')}
                    />
                    <ImgText>ㄴ 푸시알림 목록</ImgText>
                  </ImgBox>
                  <ImgBox>
                    <WorkImg
                      $imageUrl="/images/pngs/guideme-PushPost.png"
                      onClick={() => openImageModal('/images/pngs/guideme-PushPost.png')}
                    />
                    <ImgText>ㄴ 푸시알림 상세 화면</ImgText>
                  </ImgBox>
                </ImgContainer>
              </ContentBox>
              <ContentBox>
                <ContentBoxTitle>🏷 회고</ContentBoxTitle>
                <GrayText>
                  3개월이라는 짧은 기간 동안 백오피스 사이트를 개발하며 많은 것을 배울 수
                  있었습니다.
                  <br />
                  기획안이 존재하지 않았고, 디자인 시안조차 기대할 수 없는 환경에서 기능 구현에
                  집중하여 프로젝트를 진행했습니다.
                  <br />
                  특히 백오피스를 고려하지 않고 설계된 기존 데이터베이스 구조 위에서 다양한 관리
                  기능을 구현해야 했으며, 데이터베이스 스키마의 수정을 최소화하면서 개발을
                  진행했습니다.
                  <br />
                  이러한 제약 속에서도 유연한 조회 기능을 구현하기 위해 복잡한 조건 검색,
                  페이지네이션, 필터링 등의 기능을 적극적으로 적용하였고, 실사용자가 원하는 데이터를
                  효율적으로 확인할 수 있도록 했습니다.
                  <br />
                  또한, 푸시 알림 전송 기능에서는 메시지 큐를 활용하여 비동기 방식의 푸시 시스템을
                  구축했으며, 다국어 번역 지원과 웹 에디터를 통한 콘텐츠 작성 기능도 함께
                  개발했습니다.
                  <br />
                  프로젝트가 중단되어 정산 기능 및 데이터 시각화 기능을 끝까지 구현하지 못한 점은
                  아쉽지만, 짧은 시간 안에 다양한 기술적 도전과 문제 해결 경험을 할 수 있었던 소중한
                  프로젝트였습니다.
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
    document.body, // 모달을 body에 직접 렌더링
  );
};

export default GuideMeDetail;
