import { useState } from "react";
import styled from "styled-components";
import { colors } from "../constants/index";

const Section4 = () => {
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
          <BackgroundText>Thank You</BackgroundText>
          <MainTitleText>봐주셔서 감사합니다 :)</MainTitleText>
          <MainBodyText>
            <Bold900>개인</Bold900>보다 <Bold900>단체</Bold900>가 가진
            <Bold900> 힘</Bold900>을 믿고, 좋은 <Bold900>관계</Bold900>가 좋은{" "}
            <Bold900>결과</Bold900>를 가져온다고 믿는,
          </MainBodyText>
          <MainBodyText>
            <Bold900>함께</Bold900> 일하고 <Bold900>함께</Bold900> 성장하는
            개발자가 되겠습니다.
          </MainBodyText>
        </TextContainer>
      </TopContainer>
    </Container>
  );
};

export default Section4;

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
  padding-top: 70px;
`;

const BackgroundText = styled.div`
  position: absolute;
  font-size: 9rem;
  color: ${colors.grayscale.$02};
  font-weight: 900;
  z-index: 1;
`;

const MainTitleText = styled.div`
  position: relative;
  font-size: 4rem;
  color: ${colors.secondary.black};
  padding-top: 180px;
  font-weight: 600;
  z-index: 2;
`;

const MainBodyText = styled.div`
  font-size: 20px;
  color: ${colors.secondary.black};
`;

const Bold900 = styled.a`
  font-weight: 900;
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
  z-index: 2;

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
