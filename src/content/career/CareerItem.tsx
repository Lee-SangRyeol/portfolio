import styled from 'styled-components';
import { colors } from '../../constants/index';
import { CareerItem as CareerItemType } from './CareerData';
import { useState } from 'react';

interface CareerItemProps {
  career: CareerItemType;
}

const CareerItem = ({ career }: CareerItemProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = (name: string) => {
    setIsOpen(!isOpen);
  };

  return (
    <AllContainer>
      <ContentArea>
        <TopContent>
          <DateText>{career.date}</DateText>
          <CompanyContainer>
            <Icon $imageUrl={career.iconPath} />
            <CompanyBox>
              <CompanyName>{career.companyName}</CompanyName>
              <Position>{career.position}</Position>
            </CompanyBox>
          </CompanyContainer>
        </TopContent>

        <BottomContent $isOpen={isOpen}>
          <WorkList>
            회사 및 서비스 소개
            {career.companyIntro.map((intro, index) => (
              <GrayText key={index}>{intro}</GrayText>
            ))}
          </WorkList>

          <WorkList>
            담당업무
            {career.responsibilities.map((responsibility, index) => (
              <div key={index}>
                <GrayText>
                  {responsibility.title}
                  <TextUl>
                    {responsibility.items.map((item, itemIndex) => (
                      <GrayText key={itemIndex}>{item}</GrayText>
                    ))}
                  </TextUl>
                </GrayText>
              </div>
            ))}
          </WorkList>
        </BottomContent>
      </ContentArea>

      <DetailButton onClick={() => handleClick(career.companyName)}>
        <DetailButtonText>{isOpen ? '간단히보기' : '자세히보기'}</DetailButtonText>
      </DetailButton>
    </AllContainer>
  );
};

export default CareerItem;

interface IconProps {
  $imageUrl: string;
}

const AllContainer = styled.div`
  width: 500px;
  height: auto;
  min-height: 250px;
  background-color: ${colors.grayscale.$02};
  padding: 20px;
  border-radius: 5px;
  display: grid;
  grid-template-rows: 1fr auto;
  align-items: center;

  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(1.02);
  }
`;

const ContentArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const TopContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-bottom: 20px;
`;

const DateText = styled.div`
  font-size: 14px;
  color: ${colors.grayscale.$07};
`;

const CompanyContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const Icon = styled.div<IconProps>`
  width: 50px;
  height: 50px;
  background-image: url(${props => props.$imageUrl});
  background-size: 50px 50px;
  background-position: center;
  background-repeat: no-repeat;
  margin-right: 10px;
  margin-left: -60px;
`;

const CompanyBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 7px;
`;

const CompanyName = styled.div`
  font-size: 24px;
  color: ${colors.secondary.white};
`;

const Position = styled.div`
  font-size: 14px;
  color: ${colors.secondary.white};
`;

const DetailButton = styled.div`
  align-self: center;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const DetailButtonText = styled.div`
  font-size: 14px;
  color: ${colors.grayscale.$07};
  cursor: pointer;
`;

const BottomContent = styled.div<{ $isOpen: boolean }>`
  display: flex;
  flex-direction: column;
  max-height: ${props => (props.$isOpen ? '1000px' : '0')};
  overflow: hidden;
  transition: max-height 0.3s ease-in-out;
  opacity: ${props => (props.$isOpen ? '1' : '0')};
`;

const WorkList = styled.ul`
  font-size: 14px;
  color: ${colors.grayscale.$09};
  padding-left: 20px;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-bottom: 10px;
`;

const GrayText = styled.li`
  font-size: 14px;
  color: ${colors.grayscale.$07};
  list-style-type: disc;
  line-height: 20px;
`;

const TextUl = styled.ul`
  padding-left: 20px;
  list-style-type: circle;
`;
