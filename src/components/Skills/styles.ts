import styled from 'styled-components'

export const SkillsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background-color: var(--brand-color);

  .underline {
    width: 100%;
    height: 6px;
    background-color: var(--green-color);
  }

  .title {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
    height: 100%;
    padding-top: 10vh;
  }

  .title span {
    color: var(--light-color);
    font-size: 2.5rem;
    font-family: 'Inter', sans-serif;
    font-weight: bold;
  }

  .svg {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    flex-wrap: wrap;
    width: 80%;
    min-width: 370px;
    height: 100%;
  }

  .svg ol {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 35px;
    list-style: none;
  }

  .svg ol li img {
    /* filter: grayscale(1); */
    fill: var(--grey-color);
    width: 90px;
    height: 90px;
  }

  .svg ol li .title {
    color: var(--light-color);
    font-size: 1rem;
    font-family: 'Inter', sans-serif;
    font-weight: bold;
    padding-top: 15px;
  }
`
