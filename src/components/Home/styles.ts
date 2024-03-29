import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(135deg, #12134b 0%, #003a45 100%);
`;

export const Main = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1920px;
  max-height: 1080px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: left;
  margin: 0 auto;
  box-sizing: content-box;

  main {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    object-fit: contain;
  }

  .AboutMe {
    width: 56.5%;
    text-align: left;
    color: #5ae4a8;
    font-size: 2.25vw;
    font-style: normal;
    font-weight: 200;
    line-height: normal;
  }

  span {
    width: 57%;
    text-align: left;
    color: #f2f2f2;
    font-size: 7vw;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  h1 {
    color: #f2f2f2;
    font-size: 13vw;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-top: -60px;
  }

  .icons {
    width: 57.8%;
    text-align: right;
    color: #5ae4a8;
    font-size: 2vw;
    font-style: normal;
    font-weight: 200;
    line-height: normal;
    display: flex;
    justify-content: right;
    align-items: center;
    gap: 15px;
    color: #5ae4a8;
  }

  @media (min-width: 1920px) {
    .AboutMe,
    .icons {
      font-size: 2.25rem;
    }

    span {
      font-size: 8rem;
    }

    h1 {
      font-size: 15.625rem;
    }
  }

  @media (max-width: 1600px) {
    main {
      gap: 10px;
    }
  }

  @media (max-width: 1400px) {
    h1 {
      padding: 20px;
    }
  }

  @media (max-width: 1100px) {
    h1 {
      font-size: 8.5;
    }
    span {
      font-size: 5rem;
    }
  }

  @media (max-width: 1000px) {
    h1 {
      font-size: 8.5;
    }
    span {
      font-size: 5rem;
    }
    .AboutMe {
      font-size: 1.5rem;
    }
  }

  @media (max-width: 600px) {
    .AboutMe {
      font-size: 1.07rem;
    }

    h1{
      font-size: 3rem;
    }

    span {
      font-size: 2rem;
      padding-bottom: 15px;
    }
  }
`;
