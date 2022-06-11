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
    height: 400px;
    gap: 15px;
  }

  .projects .card {
    width: 800px;
    min-width: 375px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    background-color: #282833;
    border-radius: 15px;
    /* gap: 15px; */
  }

  .card .image {
    width: 375px;
    height: 375px;
    /* border: 1px solid red; */
    border-radius: 10px;
    margin: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    -webkit-box-shadow: 0px 0px 8px -2px #5ae4a8;
    box-shadow: 0px 0px 8px -2px #5ae4a8;
  }

  .card .image img {
    width: 375px;
    height: 375px;
    object-fit: cover;
    border-radius: 10px;
  }

  .card .span {
    width: 375px;
    height: 375px;
    border-radius: 10px;
    /* padding-left: 10px; */
  }

  .card .span .title {
    font-size: 1.7rem;
    padding-left: 10px;
  }

  .card .span .status {
    font-size: 1.1rem;
    padding-left: 10px;
    padding-top: 10px;
    color: var(--green-color);
    font-family: 'Inter', sans-serif;
    font-weight: bold;
  }

  .card .span .tech {
    display: flex;
    justify-content: start;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
    margin-right: 25px;
  }

  .card .span .tech ul {
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
    padding-left: 10px;
  }

  .card .span .tech ul li img {
    font-size: 20px;
  }
`
