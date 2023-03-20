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
                  title="Next"
                />
                <img
                  src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg"
                  title="React"
                />
                <img
                  src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/typescript-colored.svg"
                  title="TypeScript"
                />
                <img
                  src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/html5-colored.svg"
                  title="HTML5"
                />
                <img
                  src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/css3-colored.svg"
                  title="CSS3"
                />
                <img
                  src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/figma-colored.svg"
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
                  <img src="svg/github-brands.svg" />
                </a>
                <a href="https://customcardui.vercel.app" target={`_blank`}>
                  <img src="svg/share-solid.svg" />
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
                  title="Next"
                />
                <img
                  src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg"
                  title="React"
                />
                <img
                  src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/typescript-colored.svg"
                  title="TypeScript"
                />
                <img
                  src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/bootstrap-colored.svg"
                  title="Bootstrap"
                />
                <img
                  src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/html5-colored.svg"
                  title="HTML5"
                />
                <img
                  src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/css3-colored.svg"
                  title="CSS3"
                />
                <img
                  src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/figma-colored.svg"
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
                  <img src="svg/github-brands.svg" />
                </a>
                <a href="https://statsgit.vercel.app" target={`_blank`}>
                  <img src="svg/share-solid.svg" />
                </a>
              </div>
            </div>
          </div>

          {/* <div className="card">
            <div className="image">
              <img src={`img/bestowblood.png`} />
            </div>
            <div className="span">
              <div className="title">
                <span>Grant Me</span>
              </div>
              <div className="status">
                <span>Em Desenvolvimento</span>
              </div>
              <div className="tech">
                <img
                  src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nextjs-colored-dark.svg"
                  title="Next"
                />
                <img
                  src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg"
                  title="React"
                />
                <img
                  src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/typescript-colored.svg"
                  title="TypeScript"
                />
                <img
                  src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/bootstrap-colored.svg"
                  title="Bootstrap"
                />
                <img
                  src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/figma-colored.svg"
                  title="Figma"
                />
              </div>
              <div className="description">
                <span>
                  Sistema para conectar pessoas que precisam de doação de sangue
                  com seus respectivos doadores.
                </span>
              </div>
              <div className="link">
                <a
                  href="https://github.com/obrenoalvim/GrantMe"
                  target={`_blank`}
                >
                  <img src="svg/github-brands.svg" />
                </a>
              </div>
            </div>
          </div> */}

          <div className="more-work pattern">
            <a href="https://github.com/obrenoalvim/AboutMe" title='redirect to Github'>
              <img
                src={`https://github-readme-stats.vercel.app/api/pin?username=obrenoalvim&repo=AboutMe&hide_border=false&theme=react&show_owner=true&cache_seconds=86400&bg_color=#282833`}
                alt=""
              />
            </a>
            <a href="https://github.com/obrenoalvim/ValidCpfGenerator" title='redirect to Github'>
              <img
                src={`https://github-readme-stats.vercel.app/api/pin?username=obrenoalvim&repo=ValidCpfGenerator&hide_border=false&theme=react&show_owner=true&cache_seconds=86400&bg_color=#282833`}
                alt=""
              />
            </a>
            <a href="https://github.com/obrenoalvim/CanteenApp" title='redirect to Github'>
              <img
                src={`https://github-readme-stats.vercel.app/api/pin?username=obrenoalvim&repo=CanteenApp&hide_border=false&theme=react&show_owner=true&cache_seconds=86400&bg_color=#282833`}
                alt=""
              />
            </a>
          </div>
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
                  title="Next"
                />
                <img
                  src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg"
                  title="React"
                />
                <img
                  src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/typescript-colored.svg"
                  title="TypeScript"
                />
                <img
                  src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/html5-colored.svg"
                  title="HTML5"
                />
                <img
                  src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/css3-colored.svg"
                  title="CSS3"
                />
                <img
                  src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/figma-colored.svg"
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
                  <img src="svg/github-brands.svg" />
                </a>
                <a href="https://customcardui.vercel.app" target={`_blank`}>
                  <img src="svg/share-solid.svg" />
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
                  title="Next"
                />
                <img
                  src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg"
                  title="React"
                />
                <img
                  src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/typescript-colored.svg"
                  title="TypeScript"
                />
                <img
                  src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/bootstrap-colored.svg"
                  title="Bootstrap"
                />
                <img
                  src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/html5-colored.svg"
                  title="HTML5"
                />
                <img
                  src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/css3-colored.svg"
                  title="CSS3"
                />
                <img
                  src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/figma-colored.svg"
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
                  <img src="svg/github-brands.svg" />
                </a>
                <a href="https://statsgit.vercel.app" target={`_blank`}>
                  <img src="svg/share-solid.svg" />
                </a>
              </div>
            </div>
          </div>

          {/* <div className="card">
            <div className="image">
              <img src={`img/bestowblood.png`} />
            </div>
            <div className="span">
              <div className="title">
                <span>Grant Me</span>
              </div>
              <div className="status">
                <span>Development</span>
              </div>
              <div className="tech">
                <img
                  src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nextjs-colored-dark.svg"
                  title="Next"
                />
                <img
                  src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg"
                  title="React"
                />
                <img
                  src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/typescript-colored.svg"
                  title="TypeScript"
                />
                <img
                  src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/bootstrap-colored.svg"
                  title="Bootstrap"
                />
                <img
                  src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/figma-colored.svg"
                  title="Figma"
                />
              </div>
              <div className="description">
                <span>
                  System to connect people in need of blood donation with their
                  compatible donors
                </span>
              </div>
              <div className="link">
                <a
                  href="https://github.com/obrenoalvim/GrantMe"
                  target={`_blank`}
                >
                  <img src="svg/github-brands.svg" />
                </a>
              </div>
            </div>
          </div> */}

          <div className="more-work pattern">
            <a href="https://github.com/obrenoalvim/AboutMe" title='redirect to Github'>
              <img
                src={`https://github-readme-stats.vercel.app/api/pin?username=obrenoalvim&repo=AboutMe&hide_border=false&theme=react&show_owner=true&cache_seconds=86400&bg_color=#282833`}
                alt=""
              />
            </a>
            <a href="https://github.com/obrenoalvim/ValidCpfGenerator" title='redirect to Github'>
              <img
                src={`https://github-readme-stats.vercel.app/api/pin?username=obrenoalvim&repo=ValidCpfGenerator&hide_border=false&theme=react&show_owner=true&cache_seconds=86400&bg_color=#282833`}
                alt=""
              />
            </a>
            <a href="https://github.com/obrenoalvim/CanteenApp" title='redirect to Github'> 
              <img
                src={`https://github-readme-stats.vercel.app/api/pin?username=obrenoalvim&repo=CanteenApp&hide_border=false&theme=react&show_owner=true&cache_seconds=86400&bg_color=#282833`}
                alt=""
              />
            </a>
          </div>
        </div>
      </WorkContainer>
    )
  }
}
