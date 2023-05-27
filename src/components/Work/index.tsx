import { WorkContainer } from './styles'
import Link from 'next/link'

interface WorkProps {
  language: string
}

export default function Work(props: WorkProps) {
  if (props.language === 'Br') {
    return (
      <WorkContainer>
        <div className="title">
          <span>
            Meu Trabalho
            <div className="underline"></div>
          </span>
        </div>
        <div className="hr"></div>
        <div className="projects">
          <div className="card">
            <div className="image">
              <img src={`img/customcard.png`} alt="print do projeto"/>
            </div>
            <div className="span">
              <div className="title">
                <span>Card Customizável</span>
              </div>
              <div className="status">
                <span>Produção</span>
              </div>
              <div className="tech">
                <img
                  src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nextjs-colored-dark.svg"
                  alt='Logo Next'
                  title="Next"
                />
                <img
                  src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg"
                  alt='Logo React'
                  title="React"
                />
                <img
                  src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/typescript-colored.svg"
                  alt='Logo TypeScript'
                  title="TypeScript"
                />
                <img
                  src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/html5-colored.svg"
                  alt='Logo HTML5'
                  title="HTML5"
                />
                <img
                  src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/css3-colored.svg"
                  alt='Logo CSS3'
                  title="CSS3"
                />
                <img
                  src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/figma-colored.svg"
                  alt='Logo Figma'
                  title="Figma"
                />
              </div>
              <div className="description">
                <span>
                  Um card customizável que pode ser usado em qualquer projeto.
                </span>
              </div>
              <div className="link">
                <a
                  href="https://github.com/obrenoalvim/CustomCard"
                  target={`_blank`}
                >
                  <img src="svg/github-brands.svg" alt='image Github'/>
                </a>
                <a href="https://customcardui.vercel.app" target={`_blank`}>
                  <img src="svg/share-solid.svg" alt='image share'/>
                </a>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="image">
              <img src={`img/FrontGit.jpeg`} alt="print do projeto"/>
            </div>
            <div className="span">
              <div className="title">
                <span>GitStats</span>
              </div>
              <div className="status">
                <span>Em Produção</span>
              </div>
              <div className="tech">
                <img
                  src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nextjs-colored-dark.svg"
                  alt='Logo Next'
                  title="Next"
                />
                <img
                  src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg"
                  alt='Logo React'
                  title="React"
                />
                <img
                  src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/typescript-colored.svg"
                  alt='Logo TypeScript'
                  title="TypeScript"
                />
                <img
                  src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/bootstrap-colored.svg"
                  alt='Logo Bootstrap'
                  title="Bootstrap"
                />
                <img
                  src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/html5-colored.svg"
                  alt='Logo HTML5'
                  title="HTML5"
                />
                <img
                  src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/css3-colored.svg"
                  alt='Logo CSS3'
                  title="CSS3"
                />
                <img
                  src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/figma-colored.svg"
                  alt='Logo Figma'
                  title="Figma"
                />
              </div>
              <div className="description">
                <span>
                  Website para desenvolvedores que possuem conta no GitHub verem
                  suas estatísticas.
                </span>
              </div>
              <div className="link">
                <a
                  href="https://github.com/obrenoalvim/GitStats"
                  target={`_blank`}
                >
                  <img src="svg/github-brands.svg" alt='image github'/>
                </a>
                <a href="https://statsgit.vercel.app" target={`_blank`}>
                  <img src="svg/share-solid.svg" alt='image share' />
                </a>
              </div>
            </div>
          </div>

          {/* <div className="more-work pattern">
            <a href="https://github.com/obrenoalvim/AboutMe" title='redirect to Github'>
              <img
                src={`https://github-readme-stats.vercel.app/api/pin?username=obrenoalvim&repo=AboutMe&hide_border=false&theme=react&show_owner=true&cache_seconds=86400&bg_color=#282833`}
                alt="card from github"
              />
            </a>
            <a href="https://github.com/obrenoalvim/ValidCpfGenerator" title='redirect to Github'>
              <img
                src={`https://github-readme-stats.vercel.app/api/pin?username=obrenoalvim&repo=ValidCpfGenerator&hide_border=false&theme=react&show_owner=true&cache_seconds=86400&bg_color=#282833`}
                alt="card from github"
              />
            </a>
            <a href="https://github.com/obrenoalvim/CanteenApp" title='redirect to Github'>
              <img
                src={`https://github-readme-stats.vercel.app/api/pin?username=obrenoalvim&repo=CanteenApp&hide_border=false&theme=react&show_owner=true&cache_seconds=86400&bg_color=#282833`}
                alt="card from github"
              />
            </a>
          </div> */}
        </div>
      </WorkContainer>
    )
  } else {
    return (
      <WorkContainer>
        <div className="title">
          <span>
            My Work
            <div className="underline"></div>
          </span>
        </div>
        <div className="hr"></div>
        <div className="projects">
          <div className="card">
            <div className="image">
              <img src={`img/customcard.png`} alt="print from project"/>
            </div>
            <div className="span">
              <div className="title">
                <span>Custom Card UI</span>
              </div>
              <div className="status">
                <span>Production</span>
              </div>
              <div className="tech">
                <img
                  src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nextjs-colored-dark.svg"
                  alt='logo Next'
                  title="Next"
                />
                <img
                  src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg"
                  alt='logo React'
                  title="React"
                />
                <img
                  src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/typescript-colored.svg"
                  alt='logo TypeScript'
                  title="TypeScript"
                />
                <img
                  src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/html5-colored.svg"
                  alt='logo HTML5'
                  title="HTML5"
                />
                <img
                  src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/css3-colored.svg"
                  alt='logo CSS3'
                  title="CSS3"
                />
                <img
                  src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/figma-colored.svg"
                  alt='logo Figma'
                  title="Figma"
                />
              </div>
              <div className="description">
                <span>
                  Small project for learning the react hook, useState with
                  Next.js
                </span>
              </div>
              <div className="link">
                <a
                  href="https://github.com/obrenoalvim/LearningUseState"
                  target={`_blank`}
                >
                  <img src="svg/github-brands.svg" alt='logo github'/>
                </a>
                <a href="https://customcardui.vercel.app" target={`_blank`}>
                  <img src="svg/share-solid.svg" alt='image share'/>
                </a>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="image">
              <img src={`img/FrontGit.jpeg`} alt="print from project"/>
            </div>
            <div className="span">
              <div className="title">
                <span>GitStats</span>
              </div>
              <div className="status">
                <span>Production</span>
              </div>
              <div className="tech">
                <img
                  src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nextjs-colored-dark.svg"
                  alt='Logo Next'
                  title="Next"
                />
                <img
                  src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg"
                  alt='Logo React'
                  title="React"
                />
                <img
                  src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/typescript-colored.svg"
                  alt='Logo TypeScript'
                  title="TypeScript"
                />
                <img
                  src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/bootstrap-colored.svg"
                  alt='Logo Bootstrap'
                  title="Bootstrap"
                />
                <img
                  src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/html5-colored.svg"
                  alt='Logo HTML5'
                  title="HTML5"
                />
                <img
                  src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/css3-colored.svg"
                  alt='Logo CSS3'
                  title="CSS3"
                />
                <img
                  src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/figma-colored.svg"
                  alt='Logo Figma'
                  title="Figma"
                />
              </div>
              <div className="description">
                <span>
                  Website for developers who have a Github account to see their
                  stats.
                </span>
              </div>
              <div className="link">
                <a
                  href="https://github.com/obrenoalvim/GitStats"
                  target={`_blank`}
                >
                  <img src="svg/github-brands.svg" alt='logo github'/>
                </a>
                <a href="https://statsgit.vercel.app" target={`_blank`}>
                  <img src="svg/share-solid.svg" alt='image share'/>
                </a>
              </div>
            </div>
          </div>
          {/* <div className="more-work pattern">
            <a href="https://github.com/obrenoalvim/AboutMe" title='redirect to Github'>
              <img
                src={`https://github-readme-stats.vercel.app/api/pin?username=obrenoalvim&repo=AboutMe&hide_border=false&theme=react&show_owner=true&cache_seconds=86400&bg_color=#282833`}
                alt="card project from github"
              />
            </a>
            <a href="https://github.com/obrenoalvim/ValidCpfGenerator" title='redirect to Github'>
              <img
                src={`https://github-readme-stats.vercel.app/api/pin?username=obrenoalvim&repo=ValidCpfGenerator&hide_border=false&theme=react&show_owner=true&cache_seconds=86400&bg_color=#282833`}
                alt="card project from github"
              />
            </a>
            <a href="https://github.com/obrenoalvim/CanteenApp" title='redirect to Github'> 
              <img
                src={`https://github-readme-stats.vercel.app/api/pin?username=obrenoalvim&repo=CanteenApp&hide_border=false&theme=react&show_owner=true&cache_seconds=86400&bg_color=#282833`}
                alt="card project from github"
              />
            </a>
          </div> */}
        </div>
      </WorkContainer>
    )
  }
}
