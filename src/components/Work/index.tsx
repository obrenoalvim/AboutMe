import { WorkContainer } from './styles'

interface WorkProps {
  name: string
}

export default function Work(props: WorkProps) {
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
            {/* <img src={`https://www.danielcranney.com/_next/image?url=%2Fprojects%2Freportr.png&w=1920&q=75`} alt="" /> */}
          </div>
          <div className="span">
            <div className="title">
              <span>My Stats</span>
            </div>
            <div className="status">
              <span>Production</span>
            </div>
            <div className="tech">
              <span>React, Bootstrap</span>
            </div>
            <div className="link">
              <a href="">Github</a>
            </div>
            <div className="repo">
              <a href="">Repo</a>
            </div>
          </div>
        </div>
      </div>
    </WorkContainer>
  )
}
