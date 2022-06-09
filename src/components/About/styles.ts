import styled from 'styled-components'

export const AboutmeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  min-height: 88.3vh;
  gap: 15px;
  background-color: var(--brand-color);

  .span,
  .avatar {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 49%;
    height: 100%;
    flex-wrap: wrap;
    /* border: 1px solid red; */
    padding-left: 150px;
  }

  .avatar img {
    width: 370px;
    height: 370px;
    border-radius: 50%;
    -webkit-box-shadow: 17px 17px 40px 0px rgba(90, 228, 168, 0.7);
    box-shadow: 17px 17px 40px 0px rgba(90, 228, 168, 0.7);
  }
`
