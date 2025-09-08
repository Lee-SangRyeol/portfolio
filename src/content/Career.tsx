import styled from 'styled-components';
import { careerData } from './career/CareerData';
import CareerItem from './career/CareerItem';
import { useRef, useEffect } from 'react';

interface CareerProps {
  onHeightChange?: (height: number) => void;
}

const Career = ({ onHeightChange }: CareerProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateHeight = () => {
      if (containerRef.current && onHeightChange) {
        const height = containerRef.current.scrollHeight;
        onHeightChange(height);
      }
    };

    // 초기 높이 설정
    updateHeight();

    // ResizeObserver를 사용하여 높이 변화 감지
    const resizeObserver = new ResizeObserver(updateHeight);
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    return () => {
      resizeObserver.disconnect();
    };
  }, [onHeightChange]);

  return (
    <CareerContainer ref={containerRef}>
      {careerData.map(career => (
        <CareerItem key={career.id} career={career} />
      ))}
    </CareerContainer>
  );
};

export default Career;

const CareerContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
  margin-bottom: 60px;
`;
