import React from "react";
import styled from "styled-components";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import TestimonialCard from "./TestimonialCard";
import Test1 from "../../../assets/Test1.png";
import Test2 from "../../../assets/Test2.png";
import Test3 from "../../../assets/Test3.png";
import Test4 from "../../../assets/Test4.png";
import device1 from "../../../assets/device1.png";
import device2 from "../../../assets/device2.png";
function Faq() {
  return (
    <Wrapper>
      <div
        style={{
          display: "flex",
          gridTemplateColumns: "column",
          padding: "7.5rem 0",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "0 7.5rem",
          }}
        >
          <Overview style={{}}>Frequently Asked Questions</Overview>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              width: "100%",

              gap: "35%",
            }}
          >
            <Title>What pet parents have to say</Title>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default Faq;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background: #fcf8f3;
`;
const Overview = styled.div`
  justify-self: start;

  width: fit-content;
  margin-bottom: 1.5rem;
  color: #155cba;
  background: #d1e3fa;
  border-radius: 0.75rem;
  padding: 0.5rem 0.75rem;
  border-radius: 0.5rem;
  font-weight: 800;
  font-size: 1rem;
  line-height: 1.5rm;
`;

const Title = styled.div`
  font-size: 3rem;
  line-height: 3.5rm;
  font-weight: 600;
`;

const CarouselControles = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
`;
const CarouselControle = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;
`;

const ScrollWrapper = styled.div`
  display: flex;
  flex-direction: row;
  overflow-x: auto;
  gap: 1rem;

  /* Optional: hide scrollbar */
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE 10+ */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari */
  }

  padding-left: 5rem;
  padding-right: 5rem;

  padding-top: 4rem;
`;
