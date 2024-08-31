import {
  AllContainer,
  GreyContainer,
  DateText,
  TitleBox,
  Title,
  Detail,
  Line,
  GrayText,
  TextUl,
  IconBackGround,
  Icon,
} from "./EducationsStyles";

const Codestates = () => {
  return (
    <AllContainer>
      <GreyContainer>
        <DateText>2021.03 - 2021.07</DateText>
        <TitleBox>
          <Title>코드스테이츠</Title>
          <Detail>{" [ Full Immersive 28기 ] "}</Detail>
          <Line />
        </TitleBox>
        <TextUl>
          <GrayText>20주 동안 진행되는 풀스택 부트캠프 과정</GrayText>
        </TextUl>
        <TextUl>
          <GrayText>
            매일 주어진 과제수행과 페어 프로그래밍을 통한 코드리뷰
          </GrayText>
        </TextUl>
        <TextUl>
          <GrayText>솔로 프로젝트 1회, 협업 프로젝트 2회 진행</GrayText>
        </TextUl>
      </GreyContainer>
      <IconBackGround>
        <Icon $imageUrl="/images/icon/co.png" />
      </IconBackGround>
    </AllContainer>
  );
};

export default Codestates;
