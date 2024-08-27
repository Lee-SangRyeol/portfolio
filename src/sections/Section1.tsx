import styled from "styled-components";
import { colors } from "../constants/index";

const Section1 = () => {
  return (
    <Container>
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
