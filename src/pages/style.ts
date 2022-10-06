import styled from 'styled-components'

export const Div = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@600;700&display=swap');

  * {
    box-sizing: border-box;
  }

  .page-contain {
    display: flex;
    min-height: 100vh;
    width: 100vw;
    align-items: center;
    justify-content: center;
    background: #e7f3f1;
    border: 0.75em solid white;
    padding: 2em;
    font-family: 'Open Sans', sans-serif;
  }

  .data-card {
    display: flex;
    flex-direction: column;
    max-width: 20.75em;
    min-height: 20.75em;
    overflow: hidden;
    border-radius: 0.5em;
    text-decoration: none;
    background: white;
    margin: 1em;
    padding: 2.75em 2.5em;
    box-shadow: 0 1.5em 2.5em -0.5em rgba(#000000, 0.1);
    transition: transform 0.45s ease, background 0.45s ease;

    h3 {
      color: #2e3c40;
      font-size: 3.5em;
      font-weight: 600;
      line-height: 1;
      padding-bottom: 0.5em;
      margin: 0 0 0.142857143em;
      border-bottom: 2px solid #753bbd;
      transition: color 0.45s ease, border 0.45s ease;
    }

    h4 {
      color: #627084;
      text-transform: uppercase;
      font-size: 1.125em;
      font-weight: 700;
      line-height: 1;
      letter-spacing: 0.1em;
      margin: 0 0 1.777777778em;
      transition: color 0.45s ease;
    }

    p {
      opacity: 0;
      color: #ffffff;
      font-weight: 600;
      line-height: 1.8;
      margin: 0 0 1.25em;
      transform: translateY(-1em);
      transition: opacity 0.45s ease, transform 0.5s ease;
    }

    .link-text {
      display: block;
      color: #753bbd;
      font-size: 1.125em;
      font-weight: 600;
      line-height: 1.2;
      margin: auto 0 0;
      transition: color 0.45s ease;

      svg {
        margin-left: 0.5em;
        transition: transform 0.6s ease;

        path {
          transition: fill 0.45s ease;
        }
      }
    }

    &:hover {
      background: #753bbd;
      transform: scale(1.02);

      h3 {
        color: #ffffff;
        border-bottom-color: #a754c4;
      }

      h4 {
        color: #ffffff;
      }

      p {
        opacity: 1;
        transform: none;
      }

      .link-text {
        color: #ffffff;

        svg {
          animation: point 1.25s infinite alternate;

          path {
            fill: #ffffff;
          }
        }
      }
    }
  }

  @keyframes point {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(0.125em);
    }
  }
`
