import {
  AllContainer,
  GreyContainer,
  DateText,
  Line,
  TitleBox,
  Title,
  Detail,
  GrayText,
  TextUl,
  IconBackGround,
  Icon,
} from "./EducationsStyles";
import styled from "styled-components";
import { colors, fonts } from "../../constants/index";
const InhaTC = () => {
  return (
    <AllContainer>
      <GreyContainer>
        <DateText>2016.03 - 2018.02</DateText>
        <TitleBox>
          <Title>인하공업전문대학교</Title>
          <Detail>{" [ 컴퓨터시스템과 ] "}</Detail>
          <Line />
        </TitleBox>
        <TextUl>
          <GrayText>기본적인 Computer Science 학습</GrayText>
        </TextUl>
        <TextUl>
          <GrayText>Embedded system을 위한 강의 및 프로젝트 진행</GrayText>
        </TextUl>
        <TextUl>
          <GrayText>3학년 1학기 중퇴</GrayText>
        </TextUl>
      </GreyContainer>
      <IconBackGround>
        <Icon imageUrl="/images/icon/inhatc.png" />
      </IconBackGround>
    </AllContainer>
  );
};

export default InhaTC;
