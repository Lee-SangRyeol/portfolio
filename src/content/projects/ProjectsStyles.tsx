import styled from "styled-components";
import { colors } from "../../constants";

interface ImgProps {
  $imageUrl: string;
}

export const AllContainer = styled.div`
  width: 300px;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
  &:hover {
    justify-content: center;
    align-items: center;
  }
`;

export const DefaultContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const GreyContainer = styled.div`
  width: 300px;
  height: 400px;
  background-color: ${colors.grayscale.$02};
  padding: 20px;
  border-radius: 5px;
`;

export const MainImg = styled.div<ImgProps>`
  width: 300px;
  height: 170px;
  background-image: url(${(props) => props.$imageUrl});
  background-size: 300px 170px;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 5px;

  ${AllContainer}:hover & {
    display: none;
  }
`;

export const TextContainer = styled.div`
  padding: 20px;

  ${AllContainer}:hover & {
    margin-bottom: 30px;
  }
`;

export const Title = styled.div`
  color: ${colors.secondary.white};
  font-size: 24px;
`;

export const Body = styled.div`
  padding: 0px 20px;
`;

export const GrayText = styled.div`
  font-size: 14px;
  color: ${colors.grayscale.$07};
  list-style-type: disc;
  line-height: 30px;

  ${AllContainer}:hover & {
    display: none;
  }
`;

export const ButtonContainer = styled.div`
  display: none;
  flex-direction: column;
  gap: 10px;

  ${AllContainer}:hover & {
    display: flex;
  }
`;

export const Button = styled.button`
  width: 200px;
  height: 50px;
  padding: 10px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.grayscale.$02};
  color: ${colors.secondary.white};
  border: 2px solid white;
  border-radius: 10px;
  font-size: 16px;
  cursor: pointer;
  text-align: center;
  text-decoration: none;

  &:hover {
    background-color: ${colors.secondary.white};
    color: ${colors.secondary.black};
  }
`;
