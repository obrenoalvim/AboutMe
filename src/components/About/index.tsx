import { AboutmeContainer } from './styles'

interface AboutmeProps {
  name: string
  language: string
}

export default function Aboutme(props: AboutmeProps) {
  
  if (props.language === 'Br') {
    return (
      <AboutmeContainer>
        <div className="span">
          <div className="title">
            <span>
              Sobre Mim
              <div className="underline"></div>
            </span>
          </div>
          <p>
            Sou Desenvolvedor Web Full-Stack, trabalhando profissionalmente na
            área desde Janeiro de 2018. Gosto de gerar novas ideias e
            desenvolver soluções para problemas amplamente relevantes. Ao longo
            da minha carreira passei por vários desafios que me fizeram
            progredir e aprender rapidamente, então sempre procuro passar meu
            conhecimento, ensinando o maior número de pessoas possível!
          </p>
          <a href="#Skills" title='Ir até a sessão de habilidade'>
            <button>Habilidades</button>
          </a>
        </div>
        <div className="avatar">
          <img src="https://avatars.githubusercontent.com/u/39434668?v=4" />
        </div>
      </AboutmeContainer>
    )
  } else {
    return (
      <AboutmeContainer>
        <div className="span">
          <div className="title">
            <span>
              About Me
              <div className="underline"></div>
            </span>
          </div>
          <p>
            I am a Full-Stack Web Developer, working professionally in the field
            since January 2018. I enjoy generating new ideas and developing viable
            solutions to widely relevant problems. Throughout my career I went
            through several challenges that made me progress and learn quickly,
            so I always try to pass my knowledge on, teaching as many people as
            possible!
          </p>
          <a href="#Skills" title='Go to session skills'>
            <button>My Skills</button>
          </a>
        </div>
        <div className="avatar">
          <img src="https://avatars.githubusercontent.com/u/39434668?v=4" />
        </div>
      </AboutmeContainer>
    )
  }
}
