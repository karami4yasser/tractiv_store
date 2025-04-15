import React, { useState } from "react";
import styled from "styled-components";

import device1 from "../../../assets/device1.png";
import device2 from "../../../assets/device2.png";
import NotificationsIcon from "@mui/icons-material/Notifications";
type SelectedType = "dog" | "cat";
type SelectedColorType = "black" | "blue" | "gray";
function BuyNowOptions() {
  const [selectedType, setSelectedType] = useState<SelectedType>("dog");

  const [selectedColor, setSelectedColor] =
    useState<SelectedColorType>("black");
  return (
    <Wrapper>
      {" "}
      <div
        style={{
          height: "400px",

          zIndex: -1,
          width: "100%",
        }}
      ></div>
      <Title>
        Designed for comfort. <span>Built for safety.</span>
      </Title>
      <Switcher>
        <SwitcherOption
          onClick={() => {
            setSelectedType("dog");
          }}
          isSelected={selectedType == "dog"}
        >
          Dog
        </SwitcherOption>

        <SwitcherOption
          onClick={() => {
            setSelectedType("cat");
          }}
          isSelected={selectedType == "cat"}
        >
          Cat
        </SwitcherOption>
      </Switcher>
      <DeviceContainer>
        <QualitiesLeft>
          {" "}
          <QualitiesFeature
            style={{
              placeContent: "flex-end",
              paddingRight: 24,
            }}
          >
            <p>Live location</p>
            <QualitiesIcon>
              <NotificationsIcon
                style={{
                  color: "white",
                  width: "20px",
                  height: "20px",
                }}
              />
            </QualitiesIcon>
          </QualitiesFeature>
          <QualitiesFeature
            style={{
              placeContent: "flex-end",
              paddingRight: 24,
            }}
          >
            <p>Live location</p>
            <QualitiesIcon>
              <NotificationsIcon
                style={{
                  color: "white",
                  width: "20px",
                  height: "20px",
                }}
              />
            </QualitiesIcon>
          </QualitiesFeature>
        </QualitiesLeft>
        <ImageContainer>
          <img
            height="280"
            src={selectedType == "dog" ? device1 : device2}
          ></img>
        </ImageContainer>
        <QualitiesRight>
          <QualitiesFeature>
            <QualitiesIcon>
              <NotificationsIcon
                style={{
                  color: "white",
                  width: "20px",
                  height: "20px",
                }}
              />
            </QualitiesIcon>
            <p>Live location</p>
          </QualitiesFeature>
          <QualitiesFeature>
            <QualitiesIcon>
              <NotificationsIcon
                style={{
                  color: "white",
                  width: "20px",
                  height: "20px",
                }}
              />
            </QualitiesIcon>
            <p>Live location</p>
          </QualitiesFeature>
        </QualitiesRight>
      </DeviceContainer>
      <PricingContainer>
        <PricingLeft>
          <PricingLeftContent>
            <h1>Tractive DOG 6</h1>
            <h2>£59</h2>
          </PricingLeftContent>
        </PricingLeft>
        <PricingRight>
          <PricingRightContent>
            {(["black", "gray", "blue"] as SelectedColorType[]).map((color) => (
              <div
                style={{
                  flexDirection: "column",
                  display: "flex",
                  alignItems: "center",
                  width: "32px",
                }}
              >
                <ColorOptionWrapper
                  onClick={() => {
                    setSelectedColor(color);
                  }}
                  color={color}
                >
                  <ColorOption color={color} />
                </ColorOptionWrapper>
                <p
                  style={{
                    fontSize: "0.875rem",
                    color: "#5c606e",
                    display: selectedColor == color ? "block" : "none",
                  }}
                >
                  {color}
                </p>
              </div>
            ))}
          </PricingRightContent>
        </PricingRight>
      </PricingContainer>
      <BuyButtons>
        <ButtonLearnMore>Learn More</ButtonLearnMore>
        <ButtonBuy>Buy Now</ButtonBuy>
      </BuyButtons>
    </Wrapper>
  );
}

export default BuyNowOptions;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 0 100px 0;

  align-items: center;
  align-content: center;

  min-height: 600px;
`;

const Title = styled.h1`
  font-size: 2rem;
  line-height: 2.5rem;
  font-size: 600;
  span {
    color: #1a73e8;
  }
`;

const Switcher = styled.div`
  display: flex;
  flex-direction: row;
  width: 200px;
  height: 48px;
  border: 2px solid #e3e4ea;
  border-radius: 9999px;
`;

interface SwitcherOptionProps {
  isSelected: boolean;
}
const SwitcherOption = styled.button<SwitcherOptionProps>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 50%;
  border-radius: 9999px;
  border: none;
  cursor: pointer;

  font-size: 1rem;
  font-weight: 600;
  background-color: ${({ isSelected }) => (isSelected ? "#1a73e8" : "white")};
  color: ${({ isSelected }) => (isSelected ? "white" : "#121623")};

  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: ${({ isSelected }) =>
      isSelected ? "#1664c1" : "#f0f0f0"};
  }
`;

const DeviceContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-top: 48px;
  gap: 24px;
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;

  justify-content: center;
`;

const QualitiesLeft = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;

  justify-content: space-around;
`;

const QualitiesRight = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;

  justify-content: space-around;
`;

const QualitiesIcon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #1a73e8;
  width: 32px;
  height: 32px;
  border-radius: 8px;
`;

const QualitiesFeature = styled.div`
  display: flex;
  flex-direction: row;

  align-items: center;
  gap: 12px;
  width: 100%;
  margin: 0;

  padding: 0;
  height: fit-content;

  p {
    font-weight: 600;
    font-size: 1rem;
    line-height: 1.5rem;
  }
`;

const PricingContainer = styled.div`
  display: flex;
  flex-direction: row;

  align-items: center;
  width: 100%;
`;

const PricingLeft = styled.div`
  display: flex;
  flex-direction: column;

  align-items: flex-end;
  width: 50%;
`;

const PricingLeftContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 120px;

  h1 {
    font-weight: 600;
    font-size: 1.5rem;
  }
  h2 {
    color: #5c606e;
    font-size: 1rem;
    font-weight: 500;
    overflow-wrap: break-word;
  }
`;

const PricingRight = styled.div`
  display: flex;
  flex-direction: row;

  align-items: center;
  justify-content: center;
  width: 50%;
`;

const PricingRightContent = styled.div`
  display: flex;
  flex-direction: row;

  padding-right: 200px;

  gap: 24px;
`;

interface ColorOptionWrapperProps {
  color: string;
}
const ColorOptionWrapper = styled.button<ColorOptionWrapperProps>`
  width: 24px;
  height: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 32px;

  border: ${({ color }) => color && `2px solid ${color}`};
`;

const ColorOption = styled.button<ColorOptionWrapperProps>`
  width: 16px;
  height: 16px;
  border-radius: 16px;
  background: ${({ color }) => color && `${color}`};
  border: none;
`;

const BuyButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 24px;
  margin-top: 50px;
`;

const ButtonBuy = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  min-width: 8.5rem;
  height: 2.5rem;
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

const ButtonLearnMore = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  min-width: 8.5rem;
  height: 2.5rem;
  padding: 0.75rem 2.5rem;
  font-size: 1rem;

  line-height: 1.5rem;
  color: #fff;
  background: #1a73e8;
  border: none;
  border-radius: 9999px;
  transition: background 300ms ease-out, border 300ms ease-out;
  cursor: pointer;

  font-weight: 900;

  color: #121623;
  background: #fff;
  border: 1px solid #5c606e;
  &:hover {
    border: 1px solid #1a73e8;
    background: rgba(26, 115, 232, 0.3);
  }
`;
