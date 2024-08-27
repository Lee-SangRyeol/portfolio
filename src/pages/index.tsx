import styled from "styled-components";
import { colors } from "../constants/index";
import Section1 from "../sections/Section1";
import Section2 from "../sections/Section2";
import Section3 from "../sections/Section3";

export default function Home() {
  return (
    <Container>
      <Section1 />
      <Section2 />
      <Section3 />
    </Container>
  );
}

const Container = styled.div`
  height: 200vh;
`;
