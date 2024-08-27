import styled from "styled-components";
import { colors } from "../../constants/index";

const Codestates = () => {
  return (
    <>
      <GreyContainer>
        코드스테이츠ㅁㄴㅇㄹㅁㄴㅇㄹㅁㄴㅇㄹasdfasdfasdfasdfㅁㄴㅇㄹㅁㄴㅇㄹㅁㄴㅇㄹ
      </GreyContainer>
    </>
  );
};

export default Codestates;

const GreyContainer = styled.div`
  width: 700px;
  height: 250px;
  background-color: ${colors.grayscale.$02};
  padding: 20px;
  border-radius: 5px;
`;
