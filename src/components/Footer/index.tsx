import { FooterContainer } from './styles'

export default function Aboutme() {
  return (
    <FooterContainer>
      <div className="span">
        <span>What can i do for you today?</span>
      </div>
      <div className="hr"></div>
      <div className="button">
        <a href="mailto:brenoalvim.dev@gmail.com">
          <button>Contact me</button>
        </a>
      </div>
    </FooterContainer>
  )
}
