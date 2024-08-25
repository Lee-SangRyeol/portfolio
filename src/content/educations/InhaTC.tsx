import styled from "styled-components";
import { colors } from "../../constants/index";

const InhaTC = () => {
  return (
    <>
      <GreyContainer>
        인하공전ㅁㄴㅇㄹㅁㄴㅇㄹㅁㄴㅇㄹasdfasdfasdfasdfㅁㄴㅇㄹㅁㄴㅇㄹㅁㄴㅇㄹ
      </GreyContainer>
    </>
  );
};

export default InhaTC;

const GreyContainer = styled.div`
  width: 500px;
  height: 550px;
  background-color: ${colors.grayscale.$02};
  padding: 20px;
  border-radius: 5px;
`;
