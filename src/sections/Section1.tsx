import { useState } from "react";
import styled from "styled-components";
import { colors } from "../constants/index";

const Section1 = () => {
  const [emailText, setEmailText] = useState("Email");
  // 연락처와 이메일 복사 기능
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    alert(`${text}가 복사 되었습니다.`);
  };

  // 호버 시작 시 텍스트 변경
  const handleMouseEnter = () => {
    setEmailText("tkdfuf7600@gmail.com");
  };

  // 호버 끝날 시 원래 텍스트로 변경
  const handleMouseLeave = () => {
    setEmailText("Email");
  };

  return (
    <Container>
      <EmailBox
        onClick={() => copyToClipboard("tkdfuf7600@gmail.com")}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {emailText}
      </EmailBox>
      <TopContainer>
        <TextContainer>
          <BackgroundText>Web-Developer</BackgroundText>
          <MainTitleText>
            웹 개발자 <Bold900>이상렬</Bold900> 입니다.
          </MainTitleText>
          <MainBodyText>
            <Bold900>개인</Bold900>보다 <Bold900>단체</Bold900>가 가진
            <Bold900> 힘</Bold900>을 믿고
          </MainBodyText>
          <MainBodyText>
            좋은 <Bold900>관계</Bold900>가 좋은 <Bold900>결과</Bold900>를
            가져온다고 믿는
          </MainBodyText>
          <MainBodyText>
            <Bold900>함께</Bold900> 일하고 싶은 개발자입니다.
          </MainBodyText>
        </TextContainer>
      </TopContainer>
      <BottomContainer>
        <Picture />
      </BottomContainer>
      <UpdateText>last update : 24.09.01</UpdateText>
    </Container>
  );
};

export default Section1;

const Container = styled.div`
  background-image: url("/images/pngs/배경.png");
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;
  padding: 40px 40px 0px 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: sticky;
  top: 0px;
`;

const TopContainer = styled.div`
  flex-grow: 1;
`;

const TextContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 95px;
`;

const BackgroundText = styled.div`
  position: absolute;
  top: 0;
  font-size: 6rem;
  color: ${colors.grayscale.$04};
  font-weight: 900;
  z-index: 1;
`;

const MainTitleText = styled.div`
  position: relative;
  font-size: 3rem;
  color: ${colors.secondary.black};
  font-weight: 400;
  z-index: 2;
`;

const MainBodyText = styled.div`
  font-size: 17px;
  color: ${colors.secondary.black};
`;

const Bold900 = styled.a`
  font-weight: 900;
`;

const BottomContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  height: calc(100vh - 251px);
`;

const Picture = styled.div`
  background-image: url("/images/pngs/배경투명흑백.png");
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  /* max-width: 370px;
  max-height: 100%; */
`;

const UpdateText = styled.div`
  position: fixed;
  bottom: 60px;
  left: 60px;
  font-size: 18px;
  color: ${colors.grayscale.$04};
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  flex-direction: column;
`;

const EmailBox = styled.div`
  position: fixed;
  top: 60px;
  left: 60px;
  padding: 10px 20px;
  font-size: 18px;
  color: ${colors.grayscale.$04};
  border-left: 8px solid black;
  cursor: pointer;
  transition: all 1s ease;
  z-index: 10;

  &:hover {
    color: ${colors.grayscale.$04};
  }

  &:hover::before {
    width: 100%;
  }

  &::before {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 0;
    height: 100%;
    background-color: ${colors.secondary.black};
    z-index: -1;
    transition: width 0.3s ease;
  }
`;
