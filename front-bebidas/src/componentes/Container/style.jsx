import styled from "styled-components";

export const ContentContainer = styled.div`
  min-width: 95vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px auto;
  padding: 20px;
  border: 2px solid #FF0000;
  border-radius: 50px;
  width: 1000px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  h1 {
    text-align: center;
    text-decoration: underline;
    text-underline-offset: 10px;
    font-size: 40px;
    padding: 12px;
  }

  h2 {
    margin: 16px 0;
    font-size: 28px;
    padding: 10px;
    align-self: flex-start;   
  }

  p {
    font-size: 18px;
    padding: 10px;
    line-height: 1.6;
  }

  @media (max-width: 1200px) {
    width: 90vw;
    padding: 15px;

    h1 {
      font-size: 36px;
      padding: 10px;
    }

    h2 {
      font-size: 24px;
      padding: 8px;
    }

    p {
      font-size: 16px;
      padding: 8px;
    }
  }

  @media (max-width: 600px) {
    width: 85vw;
    padding: 10px;

    h1 {
      font-size: 32px;
    }

    h2 {
      font-size: 22px;
    }

    p {
      font-size: 14px;
    }
  }

  @media (max-width: 400px) {
    width: 80vw;

    h1 {
      font-size: 28px;
    }

    h2 {
      font-size: 20px;
    }

    p {
      font-size: 12px;
    }
  }
`;

export const LogoImage = styled.img`
    width: 50px;
    height: 50px;
    border: 4px solid;
    border-radius: 50%;

    @media (max-width: 600px) {
        width: 45px;
        height: 45px;
    }

    @media (max-width: 400px) {
        width: 40px;
        height: 40px;
    }

    @media (max-width: 300px) {
        width: 35px;
        height: 35px;
    }
`;
