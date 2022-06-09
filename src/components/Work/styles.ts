import styled from 'styled-components'

export const WorkContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  min-height: 88.3vh;
  background-color: var(--brand-color);
  padding-top: 10vh;

  .title {
    font-size: 2.5rem;
    color: var(--light-color);
    font-family: 'Inter', sans-serif;
    font-weight: bold;
  }

  .underline {
    width: 100%;
    height: 6px;
    background-color: var(--green-color);
  }

  .hr {
    width: 100%;
    height: 6px;
    background-color: #00000000;
  }

  .projects {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
    height: 100%;
  }

  .projects .card {
    width: 80%;
    height: 450px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #282833;
    border-radius: 15px;
    gap: 15px;
  }

  .card .image {
    width: 47%;
    height: 85%;
    border: 1px solid red;
    border-radius: 10px;
  }

  .card .span {
    width: 47%;
    height: 85%;
    border: 1px solid red;
  }

  .card .span .title {
    border: 1px solid red;
    font-size: 1.7rem;
    padding-left: 10px;
  }
`
