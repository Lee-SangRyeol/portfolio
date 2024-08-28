import styled from "styled-components";
import { colors, fonts } from "../../constants/index";

interface IconProps {
  imageUrl: string;
}

export const AllContainer = styled.div`
  display: flex;
  align-items: flex-start;
`;

export const GreyContainer = styled.div`
  width: 400px;
  height: 250px;
  background-color: ${colors.grayscale.$02};
  padding: 20px 0 20px 20px;
  border-radius: 5px;
`;

export const DateText = styled.div`
  font-size: 14px;
  color: ${colors.grayscale.$07};
  margin-bottom: 15px;
`;

export const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-bottom: 10px;
`;

export const Title = styled.div`
  font-size: 24px;
  color: ${colors.secondary.white};
`;

export const Detail = styled.div`
  font-size: 14px;
  color: ${colors.secondary.white};
  margin-bottom: 10px;
`;

export const Line = styled.div`
  width: 100%;
  height: 2px;
  background-color: ${colors.secondary.black};
`;

export const BodyList = styled.ul`
  font-size: 14px;
  color: ${colors.grayscale.$09};
  padding-left: 20px;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const GrayText = styled.li`
  font-size: 14px;
  color: ${colors.grayscale.$07};
  list-style-type: disc;
  line-height: 30px;
`;

export const TextUl = styled.ul`
  padding-left: 20px;
  list-style-type: circle;
`;

export const IconBackGround = styled.div`
  background-color: ${colors.secondary.black};
  width: 150px;
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 118px);
  border-radius: 0px 5px 5px 0px;
  padding-top: 20px;
`;

export const Icon = styled.div<IconProps>`
  width: 100px;
  height: 100px;
  padding: 10px;
  background-image: url(${(props) => props.imageUrl});
  background-size: 80px 80px;
  background-position: center;
  background-repeat: no-repeat;
`;
