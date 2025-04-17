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
          <a
            style={{
              textDecoration: "none",
            }}
            href="/gps-tracker-dog"
          >
            <Hero_Button>Dog Tracker</Hero_Button>
          </a>
          <a
            style={{
              textDecoration: "none",
            }}
            href="/gps-tracker-cat"
          >
            <Hero_Button>Cat Tracker</Hero_Button>
          </a>
        </Hero_Buttons>
      </LeftSideMainContainer>

      <RightSideMainContainer>
        <img src={catImage} alt="Cats" />
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
  padding: 24px 0px;

  @media (max-width: 1268px) {
    flex-direction: column-reverse;
  }
`;

const LeftSideMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 48px;
  @media (max-width: 1268px) {
    padding: 48px 0px;
  }
  gap: 12px;
`;

const Hero_Content = styled.div`
  height: fit;
  padding-right: 24px;

  @media (max-width: 1268px) {
    padding: 0px 48px;
  }
`;
const Hero_ContentTitle = styled.h1`
  font-size: 2rem;
  line-height: 2.5rem;

  @media (max-width: 1268px) {
    font-size: 1.2rem;
    line-height: 1.7rem;
  }
`;

const Hero_ContentSubTitle = styled.h2`
  font-size: 1rem;
  line-height: 1.5rem;

  @media (max-width: 1268px) {
    font-size: 0.8rem;
    line-height: 1.2rem;
  }
`;

const Hero_Buttons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 24px;
  @media (max-width: 1268px) {
    padding: 0px 48px;
    justify-content: center;
  }
`;

const Hero_Button = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  min-width: 7.5rem;

  height: 2rem;
  padding: 0.75rem 2.5rem;

  @media (max-width: 1268px) {
    min-width: fit-content;
    padding: 0.75rem 1.75rem;
  }

  font-size: 1rem;
  line-height: 1.5rem;
  @media (max-width: 1268px) {
    font-size: 0.8rem;
    line-height: 1.2rem;
  }

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

  img {
    height: 400px;
    border-radius: 16px;
  }

  @media (max-width: 1268px) {
    padding: 24px 0px;
    img {
      height: 200px;
      border-radius: 16px;
    }
  }
`;
