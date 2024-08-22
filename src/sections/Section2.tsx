import styled from "styled-components";
import { colors } from "../constants/index";

const Section2 = () => {
  return (
    <Container>
      <Section2TopTitle>About Me</Section2TopTitle>
      <IntroduceContainer>
        <Memoticon />
        <IntroduceTextBox>
          <IntroduceText>
            ✔ <Highlight>인내심</Highlight>이 많고
            <Highlight> 통찰력</Highlight>과 <Highlight>직관력</Highlight>이
            뛰어나며,
            <Highlight> 화합</Highlight>을 추구합니다.
          </IntroduceText>
          <IntroduceText>
            ✔ 내가 <Highlight>지금</Highlight> 무엇을
            <Highlight> 해야하는지</Highlight> 알고, 맡은 일에
            <Highlight> 책임감</Highlight>을 가지고 마무리합니다.
          </IntroduceText>
          <IntroduceText>
            ✔ 수용가능한 <Highlight>일정산출</Highlight> 능력으로 협업시 장점이
            드러납니다.
          </IntroduceText>
          <IntroduceText>
            ✔ <Highlight>의사소통</Highlight>능력이 뛰어나 다른 직군과의
            <Highlight> 다리</Highlight> 역할 또한 잘 수행합니다.
          </IntroduceText>
        </IntroduceTextBox>
      </IntroduceContainer>
      <InterviewContainer>
        <SectionTitle>Interview</SectionTitle>
        <InterviewBox>
          <InterviewQuestion>
            Q. 본인을 웹 개발자라고 소개하는 이유는?
          </InterviewQuestion>
          <InterviewAnswer>
            중요한 건 '직무'라고 생각합니다. <br />
            이전 회사에 근무하기 전에는 '백엔드 개발자'라고 저를 소개했습니다.
            하지만 '풀스택 개발자'로 취업을 하게 되었고, '어드민 페이지'를
            맡아서 개발하게 되었습니다. '어드민 페이지 개발자'라고 불리면서
            책임감을 갖게 되었고, 프론트엔드와 백엔드에 얽매이지 않고 성장할 수
            있었습니다. 저는 하나의 웹 서비스를 개발하는 개발자로써 저를
            "--회사의 --개발자"입니다.라고 소개하고 싶습니다.
          </InterviewAnswer>
        </InterviewBox>
        <InterviewBox>
          <InterviewQuestion>
            Q. 일을하며 중요하다고 생각하는 것들은?
          </InterviewQuestion>
          <InterviewAnswer>
            '시간'과 '책임감' 그리고 '존중'을 기반으로 한 '오너십'이라고
            생각합니다.
            <br /> 일을 할 때 주체로써 책임감을 가지고 일해야한다고 생각합니다.
            정해진 기한 내에 각자 맡은 일을 소화해 내야하는 회사의 업무 특성상
            개개인에게 주어진 시간과 책임감을 가지고 일해야하며, 서로 존중하는
            태도는 다른 무엇보다 중요하다고 생각합니다.
          </InterviewAnswer>
        </InterviewBox>
      </InterviewContainer>
      <SkillToolsContainer>
        <SectionTitle>Skill {"&"} Tools</SectionTitle>
      </SkillToolsContainer>
    </Container>
  );
};

export default Section2;

// Styled Components
const Container = styled.div`
  background-color: ${colors.grayscale.$01};
  width: 100%;
  padding: 40px 40px 0px 40px;
  position: relative;
  height: 200vh;
`;

const Section2TopTitle = styled.div`
  color: ${colors.secondary.white};
  font-size: 58px;
  font-weight: 900;
`;

const IntroduceContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const Memoticon = styled.div`
  background-image: url("/images/pngs/미모티콘.png");
  background-size: contain;
  background-position: center;
  width: 400px;
  height: 400px;
`;

const IntroduceTextBox = styled.div`
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const IntroduceText = styled.div`
  color: ${colors.secondary.white};
  font-size: 22px;
  padding-bottom: 15px;
`;

const Highlight = styled.span`
  font-weight: 900;
  color: #00d5ff;
`;

const SectionTitle = styled.div`
  color: ${colors.secondary.white};
  font-size: 40px;
  font-weight: 900;
  margin-bottom: 40px;
`;

const InterviewContainer = styled.div`
  padding-left: 40px;
`;

const InterviewBox = styled.div`
  background-color: ${colors.grayscale.$03};
  padding: 30px;
  border-radius: 20px;
  margin-bottom: 40px;
`;

const InterviewQuestion = styled.div`
  color: ${colors.secondary.white};
  font-size: 24px;
  font-weight: 400;
  margin-bottom: 20px;
`;

const InterviewAnswer = styled.div`
  color: ${colors.secondary.white};
  font-size: 17px;
  line-height: 28px;
`;

const SkillToolsContainer = styled.div`
  padding-left: 40px;
`;
