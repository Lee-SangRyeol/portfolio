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
import styled from "styled-components";

const AcademicCreditBank = () => {
  return (
    <AllContainer>
      <GreyContainer>
        <DateText>2019.03 - 2024.11</DateText>
        <TitleBox>
          <Title>학점은행제</Title>
          <Detail>{" [ 컴퓨터공학 학사 ] "}</Detail>
          <Line />
        </TitleBox>
        <TextUl>
          <GrayText>평생교육원을 통한 학점 이수</GrayText>
        </TextUl>
        <TextUl>
          <GrayText>24년 11월 필요학점 충족 예정</GrayText>
        </TextUl>
      </GreyContainer>
      <IconBackGround>
        <Icon imageUrl="/images/icon/acbs.png" />
      </IconBackGround>
    </AllContainer>
  );
};

export default AcademicCreditBank;
