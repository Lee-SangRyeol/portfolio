import styled from "styled-components";
import { colors } from "../../constants/index";

const AcademicCreditBank = () => {
  return (
    <>
      <GreyContainer>
        학점은행제ㅁㄴㅇㄹㅁㄴㅇㄹㅁㄴㅇㄹasdfasdfasdfasdfㅁㄴㅇㄹㅁㄴㅇㄹㅁㄴㅇㄹ
      </GreyContainer>
    </>
  );
};

export default AcademicCreditBank;

const GreyContainer = styled.div`
  width: 500px;
  height: 550px;
  background-color: ${colors.grayscale.$02};
  padding: 20px;
  border-radius: 5px;
`;
