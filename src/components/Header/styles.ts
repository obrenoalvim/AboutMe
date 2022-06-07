import styled from "styled-components";

export const HeaderNav = styled.div`
  @import url(https://cdn.jsdelivr.net/gh/tonsky/FiraCode@4/distr/fira_code.css);
  * {
    font-family: "Fira Code", monospace;
  }
  body {
    padding: 0;
    margin: 0;
  }
  nav {
    position: fixed;
    z-index: 10;
    left: 0;
    right: 0;
    top: 0;
    font-family: "Montserrat", sans-serif;
    padding: 0 5%;
    height: 100px;
    background-color: var(--brand-color);
  }
  nav .logo {
    float: left;
    width: 40%;
    height: 100%;
    display: flex;
    align-items: center;
    font-size: 24px;
    color: #fff;
  }

  .span-logo span {
    font-size: 30px;
  }
  nav .logo img {
    width: 240px;
  }
  nav .links {
    float: right;
    padding: 0;
    margin: 0;
    width: 60%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  nav .links li {
    list-style: none;
  }
  nav .links a {
    display: block;
    padding: 1em;
    font-size: 16px;
    font-weight: bold;
    color: #f2f2f2;
    text-decoration: none;
  }

  #nav-toggle {
    position: absolute;
    top: -100px;
  }
  nav .icon-burger {
    display: none;
    position: absolute;
    right: 5%;
    top: 50%;
    transform: translateY(-50%);
  }
  nav .icon-burger .line {
    width: 30px;
    height: 5px;
    background-color: #fff;
    margin: 5px;
    border-radius: 3px;
    transition: all 0.3s ease-in-out;
  }

  @media screen and (max-width: 768px) {
    nav .logo {
      float: none;
      width: auto;
      justify-content: center;
    }

    nav .links {
      float: none;
      position: fixed;
      z-index: 9;
      left: 0;
      right: 0;
      top: 100px;
      bottom: 100%;
      width: auto;
      height: auto;
      flex-direction: column;
      justify-content: space-evenly;
      background-color: rgba(0, 0, 0, 0.8);
      overflow: hidden;
      box-sizing: border-box;
      transition: all 0.5s ease-in-out;
    }

    nav .links a {
      font-size: 20px;
    }

    nav :checked ~ .links {
      bottom: 0;
    }

    nav .icon-burger {
      display: block;
    }

    nav :checked ~ .icon-burger .line:nth-child(1) {
      transform: translateY(10px) rotate(225deg);
    }

    nav :checked ~ .icon-burger .line:nth-child(3) {
      transform: translateY(-10px) rotate(-225deg);
    }

    nav :checked ~ .icon-burger .line:nth-child(2) {
      opacity: 0;
    }
  }
`;
