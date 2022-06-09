import { SkillsContainer } from './styles'

interface SkillsProps {
  name: string
}

export default function Skills(props: SkillsProps) {
  return (
    <SkillsContainer>
      <div className="title">
        <span>
          Skills
          <div className="underline"></div>
        </span>
      </div>
      <div className="svg">
        <ol>
          <li>
            <img
              src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/javascript-colored.svg"
              alt=""
            />
            <span className="title">JavaScript</span>
          </li>
          <li>
            <img
              src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/typescript-colored.svg"
              alt=""
            />
            <span className="title">TypeScript</span>
          </li>
          <li>
            <img
              src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/html5-colored.svg"
              alt=""
            />
            <span className="title">HTML5</span>
          </li>
          <li>
            <img
              src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/css3-colored.svg"
              alt=""
            />
            <span className="title">CSS3</span>
          </li>
          <li>
            <img
              src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nextjs-colored-dark.svg"
              alt=""
            />
            <span className="title">Next</span>
          </li>
          <li>
            <img
              src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg"
              alt=""
            />
            <span className="title">React</span>
          </li>
          <li>
            <img
              src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/vuejs-colored.svg"
              alt=""
            />
            <span className="title">Vue</span>
          </li>
          <li>
            <img
              src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/sass-colored.svg"
              alt=""
            />
            <span className="title">SASS</span>
          </li>
          <li>
            <img
              src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/tailwindcss-colored.svg"
              alt=""
            />
            <span className="title">Tailwind</span>
          </li>
          <li>
            <img
              src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/bootstrap-colored.svg"
              alt=""
            />
            <span className="title">BootStrap</span>
          </li>
          <li>
            <img
              src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/php-colored.svg"
              alt=""
            />
            <span className="title">PHP</span>
          </li>
          <li>
            <img
              src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/laravel-colored.svg"
              alt=""
            />
            <span className="title">Laravel</span>
          </li>
          <li>
            <img
              src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/mysql-colored.svg"
              alt=""
            />
            <span className="title">MySql</span>
          </li>
          <li>
            <img
              src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/mongodb-colored.svg"
              alt=""
            />
            <span className="title">MongoDB</span>
          </li>
          <li>
            <img
              src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/python-colored.svg"
              alt=""
            />
            <span className="title">Python</span>
          </li>
          <li>
            <img
              src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nodejs-colored.svg"
              alt=""
            />
            <span className="title">Node</span>
          </li>
          <li>
            <img
              src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/photoshop-colored-dark.svg"
              alt=""
            />
            <span className="title">Photoshop</span>
          </li>
          <li>
            <img
              src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/illustrator-colored-dark.svg"
              alt=""
            />
            <span className="title">Illustrator</span>
          </li>
          <li>
            <img
              src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/figma-colored.svg"
              alt=""
            />
            <span className="title">Figma</span>
          </li>
        </ol>
      </div>
      {/* <div className="button">
        <button>My Work</button>
      </div> */}
    </SkillsContainer>
  )
}
