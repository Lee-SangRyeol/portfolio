import styled from "styled-components";
import { colors } from "../../constants";

interface ImgProps {
  $imageUrl: string;
}

export const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9998;
`;

export const Container = styled.div`
  width: calc(100% - 300px); /* 양쪽 padding 50px 제외한 전체 */
  height: calc(100% - 80px);

  padding-bottom: 60px;

  background-color: ${colors.grayscale.$10};
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.3);
  overflow-y: auto; /* 컨텐츠가 많을 경우 내부 스크롤 */
`;

export const Header = styled.div`
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background-color: ${colors.grayscale.$02};
  border-bottom: 1px solid ${colors.grayscale.$04};
  padding: 20px;
`;

export const Title = styled.div`
  font-size: 40px;
  color: ${colors.secondary.white};
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  color: ${colors.secondary.white};
  cursor: pointer;
  position: absolute; // 부모 요소 내에서 절대 위치
  top: 20px; // 상단에서 10px 만큼 떨어지게 설정 (필요에 따라 조정)
  right: 30px; // 우측에서 10px 만큼 떨어지게 설정 (필요에 따라 조정)
`;

export const ContentArea = styled.div`
  padding: 20px 200px;
`;

export const TopContent = styled.div`
  font-size: 16px;
  color: ${colors.grayscale.$01};
  text-align: center;
  line-height: 30px;
  padding: 0px 30px 20px 30px;
  border-bottom: 1px solid black;
  margin-bottom: 50px;
`;

export const ContentBody = styled.div``;

export const ContentBox = styled.div`
  margin-bottom: 80px;
`;

export const ContentBoxTitle = styled.div`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 25px;
`;

export const Ul = styled.ul`
  width: 100%;
  height: 100%;
  background-color: ${colors.grayscale.$09};
  margin-bottom: 5px;
`;

export const UlText = styled.ul`
  font-size: 18px;
  font-weight: 400;
  line-height: 40px;
  padding: 5px 20px;
  cursor: pointer;
  &:hover {
    background-color: ${colors.grayscale.$08};
  }
`;

export const Li = styled.li<{ isVisible: boolean }>`
  background-color: ${colors.grayscale.$10};
  font-size: 16px;
  line-height: 25px;
  list-style-type: disc;
  display: ${({ isVisible }) => (isVisible ? "list-item" : "none")};
  list-style-position: inside;
  padding-left: 15px;
`;

export const Text = styled.li`
  font-size: 20px;
  line-height: 30px;
  list-style-type: disc;
  list-style-position: inside;
  padding-left: 15px;
`;

export const GrayText = styled.div`
  font-size: 18px;
  line-height: 30px;
  padding-left: 15px;
  color: ${colors.grayscale.$04};
`;

export const ImgText = styled.div`
  font-size: 16px;
  line-height: 30px;
  padding-left: 15px;
  color: ${colors.grayscale.$07};
`;

export const WorkImg = styled.div<ImgProps>`
  width: 220px;
  height: 150px;
  background-image: url(${(props) => props.$imageUrl});
  background-size: 200px 150px;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 5px;
  cursor: pointer;
`;

export const ImgContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  flex-wrap: wrap;
`;

export const ImgBox = styled.div``;

export const ImageModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

export const ImageModalContent = styled.div`
  width: calc(100% - 300px);
  height: calc(100% - 80px);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  img {
    max-width: 100%;
    max-height: 100%;
    border-radius: 10px;
    cursor: pointer;
  }
`;
