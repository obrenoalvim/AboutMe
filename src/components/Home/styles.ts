import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(135deg, #12134b 0%, #003a45 100%);
`;

export const Main = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: left;
  margin: 0 auto;

  .AboutMe {
    width: 56.5%;
    text-align: left;
    color: #5ae4a8;
    font-size: 2.25rem;
    font-style: normal;
    font-weight: 200;
    line-height: normal;
  }

  span {
    width: 57%;
    text-align: left;
    color: #f2f2f2;
    font-size: 8rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  h1 {
    color: #f2f2f2;
    font-size: 15.625rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-top: -60px;
  }

  .icons {
    width: 57.8%;
    text-align: right;
    color: #5ae4a8;
    font-size: 2.25rem;
    font-style: normal;
    font-weight: 200;
    line-height: normal;
    display: flex;
    justify-content: right;
    align-items: center;
    gap: 15px;
    color: #5ae4a8;
  }
`;
