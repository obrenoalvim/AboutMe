import { FooterContainer } from './styles'

interface FooterProps {
  language: string
}

export default function Aboutme(props: FooterProps) {
  if (props.language === 'Br') {
    return (
      <FooterContainer>
        <div className="title">
          <span>
            Contato
            <div className="underline"></div>
          </span>
        </div>
        <div className="span">
          <span>
            Agora que você sabe sobre mim, meu trabalho e minhas habilidades, o
            que posso fazer por você hoje?
          </span>
        </div>
        <div className="hr"></div>
        <div className="button">
          <a href="mailto:brenoalvim.dev@gmail.com">
            <button>Contrate-me</button>
          </a>
        </div>
      </FooterContainer>
    )
  } else {
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
}
