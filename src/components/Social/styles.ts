import styled from "styled-components";

export const Social = styled.div`
  nav {
    margin-top: 10vh;
    font-family: 'Fira Code', monospace;
  }
  a {
    color: #0f172a;
    text-decoration: none;
  }
  .me {
    width: 400px;
    margin: 90px auto;
  }
  .me p,
  .me h1 {
    letter-spacing: 3px;
    text-align: center;
  }
  .me p {
    font-weight: 200;
  }
  .me span {
    font-weight: bold;
  }
  .social {
    position: fixed;
    top: 20px;
  }
  .social ul {
    padding: 0px;
    transform: translate(-270px, 0);
  }
  .social ul li {
    display: block;
    margin: 5px;
    background: rgba(0, 0, 0, 0.36);
    width: 300px;
    text-align: right;
    padding: 10px;
    border-radius: 0 30px 30px 0;
    transition: all 1s;
  }
  .social ul li:hover {
    transform: translate(110px, 0);
    background: rgba(255, 255, 255, 0.4);
  }
  .social ul li:hover a {
    color: #000;
  }
  .social ul li:hover i {
    color: #f8fafc;
    background: rgba(0, 0, 0, 0.36);
    transform: rotate(360deg);
    transition: all 1s;
  }
  .social ul li i {
    margin-left: 10px;
    color: #0f172a;
    background: #f8fafc;
    padding: 10px;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    font-size: 20px;
    background: #f8fafc;
    transform: rotate(0deg);
  }

  body {
    background: #4f8b89;
    color: #fff;
    font-family: "Raleway", sans-serif;
  }
`;
