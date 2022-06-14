import { FooterContainer } from './styles'

export default function Aboutme() {
  return (
    <FooterContainer>
      <div className="title">
        <span>
          Contact Me
          <div className="underline"></div>
        </span>
      </div>
      <div className="span">
        <span>
          Now that you know about me, my work and my skills, what can I do for
          you today?
        </span>
      </div>
      <div className="hr"></div>
      <div className="button">
        <a href="mailto:brenoalvim.dev@gmail.com">
          <button>Hire me</button>
        </a>
      </div>
    </FooterContainer>
  )
}
