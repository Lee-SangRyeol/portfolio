import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { colors } from "../constants/index";
import Career from "../content/Career";
import Project from "../content/Project";
import Education from "../content/Education";

const Section3 = () => {
  const [activeSection, setActiveSection] = useState<string>("");

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      // if (sectionId !== "career") {
      const offset = section.getBoundingClientRect().top + window.scrollY;
      const headerOffset = 100;
      const offsetPosition = offset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      // }
    }
  };

  useEffect(() => {
    const sections = ["career", "project", "education"];
    const options = {
      root: null,
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []);

  return (
    <Container>
      <Sidebar>
        <SidebarItem
          onClick={() => scrollToSection("career")}
          $active={activeSection === "career"}
        >
          Career
        </SidebarItem>
        <SidebarItem
          onClick={() => scrollToSection("project")}
          $active={activeSection === "project"}
        >
          Project
        </SidebarItem>
        <SidebarItem
          onClick={() => scrollToSection("education")}
          $active={activeSection === "education"}
        >
          Education
        </SidebarItem>
      </Sidebar>
      <Content>
        <Section
          id="career"
          className={activeSection === "career" ? "fade-in" : "fade-out"}
        >
          <Career />
        </Section>
        <Section
          id="project"
          className={activeSection === "project" ? "fade-in" : "fade-out"}
        >
          <Project />
        </Section>
        <Section
          id="education"
          className={activeSection === "education" ? "fade-in" : "fade-out"}
        >
          <Education />
        </Section>
      </Content>
    </Container>
  );
};

export default Section3;

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-80px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 522vh;
  display: flex;
  background-color: ${colors.grayscale.$01};
`;

const Sidebar = styled.div`
  width: 360px;
  height: 100vh;
  position: sticky;
  top: 35px;
  display: flex;
  flex-direction: column;
  padding-left: 40px;
  background-color: ${colors.grayscale.$01};
`;

const SidebarItem = styled.div<{ $active: boolean }>`
  color: ${(props) =>
    props.$active ? colors.secondary.white : colors.grayscale.$02};
  font-size: 60px;
  font-weight: 700;
  margin-bottom: 30px;
  cursor: pointer;

  &:hover {
    color: ${(props) =>
      props.$active ? colors.secondary.white : colors.grayscale.$03};
  }
`;

const Content = styled.div`
  flex-grow: 1;
  width: calc(100vw-360px);
`;

const Section = styled.div`
  width: 1500px;
  /* height: 100vh; */
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  transition: opacity 1s ease-in-out, transform 1s ease-in-out;

  &.fade-in {
    animation: ${fadeIn} 0.5s ease-in forwards;
  }

  &.fade-out {
    animation: ${fadeOut} 0.5s ease-out forwards;
  }
  @media screen and (max-width: 1800px) {
    width: 1300px;
  }

  @media screen and (max-width: 1600px) {
    width: 1000px;
  }
  @media screen and (max-width: 1300px) {
    width: 800px;
  }
`;
