import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { colors } from '../constants/index';
import Career from '../content/Career';
import Project from '../content/Project';
import Education from '../content/Education';

const Section3 = () => {
  const [activeSection, setActiveSection] = useState<string>('');
  const [sectionHeights, setSectionHeights] = useState({
    career: 0,
    project: 0,
    education: 0
  });

  const updateSectionHeight = (section: string, height: number) => {
    setSectionHeights(prev => ({
      ...prev,
      [section]: height
    }));
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      const offset = section.getBoundingClientRect().top + window.scrollY;
      const headerOffset = 30;
      const offsetPosition = offset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    const sections = ['career', 'project', 'education'];
    const options = {
      root: null,
      threshold: 0.5,
    };

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    sections.forEach(section => {
      const element = document.getElementById(section);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []);

  // 전체 높이 계산 (각 섹션 높이 + 여백)
  const totalHeight = Math.max(
    sectionHeights.career + sectionHeights.project + sectionHeights.education + 200, // 200px 여백
    100 * 16 // 최소 높이 (100vh)
  );

  return (
    <Container $height={totalHeight}>
      <Sidebar>
        <SidebarItem onClick={() => scrollToSection('career')} $active={activeSection === 'career'}>
          Career
        </SidebarItem>
        <SidebarItem
          onClick={() => scrollToSection('project')}
          $active={activeSection === 'project'}
        >
          Project
        </SidebarItem>
        <SidebarItem
          onClick={() => scrollToSection('education')}
          $active={activeSection === 'education'}
        >
          Education
        </SidebarItem>
      </Sidebar>
      <Content>
        <Section id="career">
          <Career onHeightChange={(height) => updateSectionHeight('career', height)} />
        </Section>
        <Section id="project">
          <Project onHeightChange={(height) => updateSectionHeight('project', height)} />
        </Section>
        <Section id="education">
          <Education onHeightChange={(height) => updateSectionHeight('education', height)} />
        </Section>
      </Content>
    </Container>
  );
};

export default Section3;

interface ContainerProps {
  $height: number;
}

const Container = styled.div<ContainerProps>`
  width: 100%;
  height: ${props => props.$height}px;
  display: flex;
  background-color: ${colors.grayscale.$01};
  z-index: 30;
  transition: height 0.3s ease-in-out;
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
  z-index: 30;
`;

const SidebarItem = styled.div<{ $active: boolean }>`
  color: ${props => (props.$active ? colors.secondary.white : colors.grayscale.$02)};
  font-size: 60px;
  font-weight: 700;
  margin-bottom: 30px;
  cursor: pointer;

  &:hover {
    color: ${props => (props.$active ? colors.secondary.white : colors.grayscale.$03)};
  }
`;

const Content = styled.div`
  flex-grow: 1;
  width: calc(100vw-360px);
`;

const Section = styled.div`
  width: 1500px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;

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
