import styled from "styled-components";
import { theme } from "../../global/theme";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  width: 60%;
  height: 60vh;
  max-width: 1200px;
  border-radius: 12px;
  background-color: ${theme.palette.darkBrackground};
  box-shadow: 1px 1px 50px ${theme.palette.blackShadow};

  display: flex;

  @media screen and (max-width: 1200px) {
    width: 90%;
  }

  @media screen and (max-width: 800px) {
    width: 100%;
    height: 100%;
  }
`;

export const BannerContainer = styled.div`
  width: 50%;
  height: 100%;
  padding: 15px;
  box-sizing: border-box;
`;

export const Banner = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 12px;
`;

export const FormContainer = styled.div`
  width: 50%;
  height: 100%;
  padding: 15px 30px;
  box-sizing: border-box;
  display: flex;
  gap: 1rem;
  flex-direction: column;
  justify-content: center;
`;

export const FormTitle = styled.h2`
  color: white;
  font-weight: bold;
  text-align: center;
`;
