import styled from "styled-components";
import { colors } from "../constants/index";
import Section1 from "../sections/Section1";
import Section2 from "../sections/Section2";
import Section3 from "../sections/Section3";
import Section4 from "../sections/Section4";

interface LabelProps {
  $dataLabel: string;
}

export default function Home() {
  // 스크롤 최상단으로 이동하는 함수
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Container>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <ContactContainer>
        <ScrollButton onClick={scrollToTop} $dataLabel="맨 위로">
          ︿
        </ScrollButton>
      </ContactContainer>
    </Container>
  );
}

const Container = styled.div`
  height: 200vh;
`;

const ContactContainer = styled.div`
  position: fixed;
  bottom: 60px;
  right: 60px;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  flex-direction: column;
  gap: 20px;
  z-index: 100;
`;

const ScrollButton = styled.button<LabelProps>`
  width: 50px;
  height: 50px;
  border-radius: 50px;
  font-size: 30px;
  font-weight: 800;
  padding-bottom: 15px;
  background-color: ${colors.grayscale.$10};
  color: ${colors.secondary.black};
  border: none;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: transform 0.5s ease-in-out;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.2);
  z-index: 100;

  &:hover::before {
    opacity: 1;
  }

  &:hover {
    transform: scale(1.15);
  }
`;
