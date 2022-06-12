import { WorkContainer } from './styles'

export default function Work() {
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
            <img src={`img/MyStats.png`} alt="" />
          </div>
          <div className="span">
            <div className="title">
              <span>My Stats</span>
            </div>
            <div className="status">
              <span>Production</span>
            </div>
            <div className="tech">
              <ul>
                <li>
                  <img
                    src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg"
                    alt=""
                  />
                </li>
                <li>
                  <img
                    src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/bootstrap-colored.svg"
                    alt=""
                  />
                </li>
                <li>
                  <img
                    src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg"
                    alt=""
                  />
                </li>
              </ul>
            </div>
            <div className="description">
              <span>Teste</span>
            </div>
            <div className="link">
              <a href="">Github</a>
              <a href="">Repo</a>
            </div>
          </div>
        </div>
      </div>
    </WorkContainer>
  )
}
