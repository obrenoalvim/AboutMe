import styled from 'styled-components'

export const FooterContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  min-height: 30vh;
  height: 100%;
  background-color: var(--brand-color);

  .hr {
    width: 100%;
    height: 1px;
    background-color: #00000000;
  }

  .title {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
    height: 100%;
  }

  .title span {
    font-size: 2.5rem;
    color: var(--light-color);
    font-family: 'Inter', sans-serif;
    font-weight: bold;
    margin: 0 auto;
    margin-top: 15px;
  }

  .underline {
    width: 100%;
    height: 6px;
    background-color: var(--green-color);
  }

  .span {
    display: flex;
    justify-content: center;
    align-self: center;
    width: 100%;
    height: 100%;
    color: var(--light-color);
    font-size: 1.2rem;
    font-family: 'Inter', sans-serif;
  }

  .button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    padding-top: 15px;
    padding-bottom: 15px;
  }

  .button a button {
    width: 200px;
    height: 50px;
    background-color: var(--green-color);
    color: var(--dark-color);
    font-size: 1.2rem;
    font-weight: bold;
    border-radius: 10px;
    transition: 0.5s all;
    border: none;
  }

  .button a button:hover {
    transition: 0.5s all;
    background-color: var(--brand-color);
    color: #5ae4a8;
    box-shadow: 0px 0px 10px #5ae4a8;
  }

  @media (max-width: 768px) {
    .span {
      text-align: center;
    }
  }
`
