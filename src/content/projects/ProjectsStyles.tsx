import styled from "styled-components";
import { colors, fonts } from "../../constants/index";

interface ImgProps {
  $imageUrl: string;
}

export const AllContainer = styled.div`
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const GreyContainer = styled.div`
  width: 300px;
  height: 400px;
  background-color: ${colors.grayscale.$02};
  padding: 20px;
  border-radius: 5px;
`;

export const MainImg = styled.div<ImgProps>`
  width: 350px;
  height: 200px;
  background-image: url(${(props) => props.$imageUrl});
  background-size: 350px 200px;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 5px;
`;

export const TextContainer = styled.div`
  padding: 20px;
`;

export const Title = styled.div`
  color: ${colors.secondary.white};
  font-size: 24px;
`;
