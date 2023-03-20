import styled from 'styled-components'

export const TypedContainer = styled.section`
  @import url('https://fonts.googleapis.com/css?family=Montserrat');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: 'Montserrat', sans-serif;
    background-color: #000;
    color: #eee;
  }
  .container {
    height: 7vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .container p {
    font-size: 3rem;
    padding: 0.5rem;
    font-weight: bold;
    letter-spacing: 0.1rem;
    text-align: center;
    overflow: hidden;
  }
  .container p span.typed-text {
    font-weight: normal;
    color: #dd7732;
  }
  .container p span.cursor {
    display: inline-block;
    background-color: #ccc;
    margin-left: 0.1rem;
    width: 3px;
    animation: blink 1s infinite;
  }
  .container p span.cursor.typing {
    animation: none;
  }
  @keyframes blink {
    0% {
      background-color: #ccc;
    }
    49% {
      background-color: #ccc;
    }
    50% {
      background-color: transparent;
    }
    99% {
      background-color: transparent;
    }
    100% {
      background-color: #ccc;
    }
  }
`
