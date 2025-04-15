import React from "react";
import Logo from "./Logo";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import styled from "styled-components";
function Nav() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Banner>
        <BannerText>Spring Sale: 30% off all pet GPS trackers</BannerText>
      </Banner>
      <Header>
        {/* Logo */}
        <HeaderLogo>
          <Logo />
        </HeaderLogo>

        {/* bar */}

        <BarNavigations>
          <ButtonNavigation>Tractive for Dogs</ButtonNavigation>
          <ButtonNavigation>Tractive for Cats</ButtonNavigation>
          <ButtonNavigation>Pricing</ButtonNavigation>
          <ButtonNavigation>Blog</ButtonNavigation>
          <ButtonNavigation>Support</ButtonNavigation>
        </BarNavigations>

        {/* store logo */}
        <div>
          <AddShoppingCartIcon />
        </div>
      </Header>
    </div>
  );
}

export default Nav;
const Banner = styled.div`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  overflow: hidden;
  background: #7c64af;
`;

const BannerText = styled.p`
  color: white;
  font-weight: bold;
  cursor: pointer;
  line-height: calc(1em + 0.5rem);
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  padding: 24px 48px;
`;
const HeaderLogo = styled.div`
  display: flex;
`;

const BarNavigations = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
`;
const ButtonNavigation = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: transparent;
  border: none;
  padding: 8px 24px;
  border-radius: 16px;
  cursor: pointer;
  height: fit;
  transition: background 300ms ease-out;

  &:hover {
    background: rgba(26, 115, 232, 0.2);
  }
  font-weight: 700;
`;
