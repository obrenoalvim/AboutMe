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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
          fugit eligendi explicabo numquam quidem animi dignissimos cum eum
          dolorum sit voluptas doloribus, ullam similique eaque inventore
          fugiat. Eveniet, facilis quos.
        </p>
        <button>My Skills</button>
      </div>
      <div className="avatar">
        <img src="https://avatars.githubusercontent.com/u/39434668?v=4" />
      </div>
    </AboutmeContainer>
  )
}
