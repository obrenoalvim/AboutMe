import { WorkContainer } from './styles'

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
              <img src={`img/FrontGit.jpeg`} />
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
                  href="https://github.com/brenoalvim/GitStats"
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
          <div className="card">
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
                  href="https://github.com/brenoalvim/GrantMe"
                  target={`_blank`}
                >
                  <img src="svg/github-brands.svg" />
                </a>
              </div>
            </div>
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
              <img src={`img/FrontGit.jpeg`} />
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
                  href="https://github.com/brenoalvim/GitStats"
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

          <div className="card">
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
                  href="https://github.com/brenoalvim/GrantMe"
                  target={`_blank`}
                >
                  <img src="svg/github-brands.svg" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </WorkContainer>
    )
  }
}
