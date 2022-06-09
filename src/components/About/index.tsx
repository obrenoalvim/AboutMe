import { AboutmeContainer } from './styles'

interface AboutmeProps {
  name: string
}

export default function Aboutme(props: AboutmeProps) {
  return (
    <AboutmeContainer>
      <div className="span">
        <div className="title">
          <span>About</span>
        </div>
        <p>
          I am a Full-Stack Web Developer, working professionally in the field
          since March 2021. I enjoy generating new ideas and developing viable
          solutions to widely relevant problems. Throughout my career I went
          through several challenges that made me progress and learn quickly, so
          I always try to pass my knowledge on, teaching as many people as
          possible!
        </p>
        <a href="#Skills">
          <button>My Skills</button>
        </a>
      </div>
      <div className="avatar">
        <img src="https://avatars.githubusercontent.com/u/39434668?v=4" />
      </div>
    </AboutmeContainer>
  )
}
