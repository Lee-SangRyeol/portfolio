import {
  AllContainer,
  MainImg,
  TextContainer,
  Title,
  Body,
  GrayText,
} from "./ProjectsStyles";

const Portfolio = () => {
  return (
    <AllContainer>
      <MainImg $imageUrl="/images/pngs/wd.png" />
      <TextContainer>
        <Title>포트폴리오</Title>
      </TextContainer>
      <Body>
        <GrayText>나만의 포트폴리오를 위한 사이트</GrayText>
      </Body>
    </AllContainer>
  );
};

export default Portfolio;
