import styled from 'styled-components'

export const AboutmeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  min-height: 88.3vh;
  gap: 15px;
  background-color: var(--brand-color);
  padding-top: 11.3vh;

  .underline {
    width: 100%;
    height: 6px;
    background-color: var(--green-color);
  }

  .span,
  .avatar {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 49%;
    min-width: 375px;
    height: 100%;
    flex-wrap: wrap;
  }

  .span {
    display: flex;
    justify-content: start;
    align-items: center;
    flex-wrap: wrap;
  }

  .span .title {
    font-size: 2.5rem;
    color: var(--light-color);
    font-family: 'Inter', sans-serif;
    padding-left: 250px;
    font-weight: bold;
  }

  .span p {
    font-size: 1.5rem;
    color: var(--light-color);
    font-family: 'Inter', sans-serif;
    text-align: justify;
    padding-left: 250px;
  }

  .span button {
    background-color: #5ae4a8;
    border: 0px;
    border-radius: 5px;
    color: var(--brand-color);
    font-weight: bold;
    width: 110px;
    height: 40px;
    font-size: large;
    transition: 0.5s all;
    margin-left: 250px;
  }

  .span button:hover {
    transition: 0.5s all;
    background-color: var(--brand-color);
    color: #5ae4a8;
    box-shadow: 0px 0px 10px #5ae4a8;
  }
  .avatar img {
    width: 370px;
    height: 370px;
    border-radius: 50%;
    -webkit-box-shadow: 17px 17px 40px 0px rgba(90, 228, 168, 0.7);
    box-shadow: 17px 17px 40px 0px rgba(90, 228, 168, 0.7);
  }

  @media (max-width: 1300px) {
    .span p,
    .span .title,
    .span a button {
      padding-left: 100px;
    }

    .span a button {
      padding-left: 0px;
    }
  }

  @media (max-width: 768px) {
    .span {
      margin-bottom: 5px;
    }

    .span p {
      font-size: 1rem;
    }
    .span p,
    .span .title,
    .span a button {
      padding-left: 20px;
    }

    .span a {
      margin: 0 auto;
    }

    .span a button {
      padding-left: 0px;
      margin: 0;
    }

    .avatar img {
      width: 250px;
      height: 250px;
    }
  }
`
