import styled from "styled-components";
import { colors } from "../constants/index";

const Career = () => {
  return (
    <AllContainer>
      <DateText>2022.05 - 2023.07</DateText>
      <CompanyBox>
        <CompanyName>{"(주)"}에이락</CompanyName>
        <Position>{"[ 개발팀 - 선임 ]"}</Position>
      </CompanyBox>
      <WorkList>
        회사소개
        <GrayText>
          에이락 월렛 : 블록체인 기반의 핀테크 회사로 핀테크협회 부회장사를
          역임.
          <br />
          지갑 서비스 “에이락월렛”으로 제휴사를 통해 지급되는 리워드를
          가상자산으로 지급 및 관리.
        </GrayText>
        <GrayText>
          마이메타갤러리 : 그림에 NFT를 발행하여 작품에 디지털 자산을 더하는
          서비스. 웹 사생대회를 통해 작품 등록 및 전시를 진행하였으며,
          오프라인으로 국내 작가와의 콜라보를 진행.
        </GrayText>
      </WorkList>
      <WorkList>
        담당업무
        <GrayText>
          백오피스 개발(1인)
          <TextUl>
            <GrayText>
              에이락 월렛과 마이메타갤러리 두 서비스의 백오피스 개발 및 유지보수
            </GrayText>
            <GrayText>
              대시보드, 리워드 지급 관리 기능, 마켓의 상품관리 기능등 권한에
              따른 백오피스 기능 개발 및 유지보수
            </GrayText>
          </TextUl>
        </GrayText>
        <GrayText>
          백엔드 개발 및 유지보수(4인)
          <TextUl>
            <GrayText>내부용 GraphQl쿼리 개발 및 유지보수</GrayText>
            <GrayText>외부용 REST API 개발 및 유지보수</GrayText>
            <GrayText>DB 구조 변경 및 마이그레이션 진행</GrayText>
          </TextUl>
        </GrayText>
        <GrayText>
          제휴사 및 CS 대행업체 관리 및 커뮤니케이션
          <TextUl>
            <GrayText>
              제휴사와 협업시 각종 요구사항 정리 및 문제점 조율
            </GrayText>
            <GrayText>CS대행업체의 관리 및 월렛 서비스 이슈 관리</GrayText>
          </TextUl>
        </GrayText>
      </WorkList>
    </AllContainer>
  );
};

export default Career;

const AllContainer = styled.div`
  width: 500px;
  height: 550px;
  background-color: ${colors.grayscale.$02};
  padding: 20px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;

  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(1.05);
  }
`;

const DateText = styled.div`
  font-size: 14px;
  color: ${colors.grayscale.$07};
`;

const CompanyBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
`;

const CompanyName = styled.div`
  font-size: 24px;
  color: ${colors.secondary.white};
`;

const Position = styled.div`
  font-size: 14px;
  color: ${colors.secondary.white};
`;

const WorkList = styled.ul`
  font-size: 14px;
  color: ${colors.grayscale.$09};
  padding-left: 20px;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const GrayText = styled.li`
  font-size: 14px;
  color: ${colors.grayscale.$07};
  list-style-type: disc;
  line-height: 20px;
`;

const TextUl = styled.ul`
  padding-left: 20px;
  list-style-type: circle;
`;
