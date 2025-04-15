import React from "react";
import styled from "styled-components";
import catImage from "../../../assets/cat_30.png";
function MainContainer() {
  return (
    <Container>
      <LeftSideMainContainer>
        <Hero_Content>
          <Hero_ContentTitle>
            GPS & Health Tracker for Dogs and Cats
          </Hero_ContentTitle>
          <Hero_ContentSubTitle>
            Track live location. Get health alerts. Monitor activity and sleep.
          </Hero_ContentSubTitle>
        </Hero_Content>
        <Hero_Buttons>
          <Hero_Button>Dog Tracker</Hero_Button>

          <Hero_Button>Cat Tracker</Hero_Button>
        </Hero_Buttons>
      </LeftSideMainContainer>

      <RightSideMainContainer>
        <img
          src={catImage}
          sizes="(max-width: 1279px) 5px, 439px"
          height="439"
          alt="Cats"
        />
      </RightSideMainContainer>
    </Container>
  );
}

export default MainContainer;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  padding: 24px 48px;
`;

const LeftSideMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 48px;
  gap: 12px;
`;

const Hero_Content = styled.div`
  height: fit;
  padding-right: 24px;
`;
const Hero_ContentTitle = styled.h1`
  font-size: 2rem;
  line-height: 2.5rem;
`;

const Hero_ContentSubTitle = styled.h2`
  font-size: 1rem;
  line-height: 1.5rem;
`;

const Hero_Buttons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 24px;
`;

const Hero_Button = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  min-width: 7.5rem;
  height: 2rem;
  padding: 0.75rem 2.5rem;
  font-size: 1rem;

  line-height: 1.5rem;
  color: #fff;
  background: #1a73e8;
  border: none;
  border-radius: 9999px;
  transition: background 300ms ease-out, border 300ms ease-out;
  cursor: pointer;
  &:hover {
    background: rgba(26, 115, 232, 0.9);
  }
  font-weight: 900;
`;

const RightSideMainContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  padding: 24px 48px;
  flex: 1;
`;
