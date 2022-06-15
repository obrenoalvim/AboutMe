import { SkillsContainer } from './styles'

interface SkillsProps {
  name: string
  language: string
}

export default function Skills(props: SkillsProps) {
  if (props.language === 'Br') {
    return (
      <SkillsContainer>
        <div className="title">
          <span>
            Minhas Habilidades
            <div className="underline"></div>
          </span>
        </div>
        <div className="svg">
          <ol>
            <li>
              <img
                src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/javascript-colored.svg"
                title="JavaScript"
                alt="Logo JavaScript"
              />
              <span className="title">JavaScript</span>
            </li>
            <li>
              <img
                src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/typescript-colored.svg"
                title="TypeScript"
                alt="Logo TypeScript"
              />
              <span className="title">TypeScript</span>
            </li>
            <li>
              <img
                src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/html5-colored.svg"
                title="HTML5"
                alt="Logo HTML5"
              />
              <span className="title">HTML5</span>
            </li>
            <li>
              <img
                src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/css3-colored.svg"
                title="CSS3"
                alt="Logo CSS3"
              />
              <span className="title">CSS3</span>
            </li>
            <li>
              <img
                src="https://seeklogo.com/images/N/next-js-logo-8FCFF51DD2-seeklogo.com.png"
                title="NextJS"
                alt="Logo NextJS"
              />
              <span className="title">Next</span>
            </li>
            <li>
              <img
                src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg"
                title="ReactJS"
                alt="Logo ReactJS"
              />
              <span className="title">React</span>
            </li>
            <li>
              <img
                src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/vuejs-colored.svg"
                title="VueJS"
                alt="Logo VueJS"
              />
              <span className="title">Vue</span>
            </li>
            <li>
              <img
                src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/sass-colored.svg"
                title="SASS"
                alt="Logo SASS"
              />
              <span className="title">SASS</span>
            </li>
            <li>
              <img
                src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/tailwindcss-colored.svg"
                title="TailwindCSS"
                alt="Logo TailwindCSS"
              />
              <span className="title">Tailwind</span>
            </li>
            <li>
              <img
                src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/bootstrap-colored.svg"
                title="BootStrap"
                alt="Logo BootStrap"
              />
              <span className="title">BootStrap</span>
            </li>
            {/* <li>
            <img
              src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/php-colored.svg"
              title="PHP"
              alt="Logo PHP"
            />
            <span className="title">PHP</span>
          </li> */}
            <li>
              <img
                src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nodejs-colored.svg"
                title="NodeJS"
                alt="Logo NodeJS"
              />
              <span className="title">Node</span>
            </li>
            <li>
              <img
                src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/python-colored.svg"
                title="Python"
                alt="Logo Python"
              />
              <span className="title">Python</span>
            </li>
            <li>
              <img
                src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/laravel-colored.svg"
                title="Laravel"
                alt="Logo Laravel"
              />
              <span className="title">Laravel</span>
            </li>
            <li>
              <img
                src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/mysql-colored.svg"
                title="MySql"
                alt="Logo MySql"
              />
              <span className="title">MySql</span>
            </li>
            {/* <li>
            <img
              src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/postgresql-colored.svg"
              title="PostgreSQL"
              alt="Logo PostgreSQL"
            />
            <span className="title">PostgreSQL</span>
          </li> */}
            <li>
              <img
                src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/firebase-colored.svg"
                title="Firebase"
                alt="Logo Firebase"
              />
              <span className="title">Firebase</span>
            </li>
            {/* <li>
            <img
              src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/mongodb-colored.svg"
              title="MongoDB"
              alt="Logo MongoDB"
            />
            <span className="title">MongoDB</span>
          </li> */}
            {/* <li>
            <img
              src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/heroku-colored.svg"
              title="Heroku"
              alt="Logo Heroku"
            />
            <span className="title">Heroku</span>
          </li> */}
            <li>
              <img
                src="https://seeklogo.com/images/A/adobe-photoshop-logo-7B88D7B5AA-seeklogo.com.png"
                title="Adobe Photoshop"
                alt="Logo Adobe Photoshop"
              />
              <span className="title">Photoshop</span>
            </li>
            {/* <li>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Adobe_Illustrator_CC_icon.svg/640px-Adobe_Illustrator_CC_icon.svg.png"
              title="Adobe Illustrator"
              alt="Logo Adobe Illustrator"
            />
            <span className="title">Illustrator</span>
          </li> */}
            <li>
              <img
                src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/figma-colored.svg"
                title="Figma"
                alt="Logo Figma"
              />
              <span className="title">Figma</span>
            </li>
          </ol>
        </div>
        <div className="button">
          <a href="#Work">
            <button>Trabalho</button>
          </a>
        </div>
      </SkillsContainer>
    )
  } else {
    return (
      <SkillsContainer>
        <div className="title">
          <span>
            My Skills
            <div className="underline"></div>
          </span>
        </div>
        <div className="svg">
          <ol>
            <li>
              <img
                src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/javascript-colored.svg"
                title="JavaScript"
                alt="Logo JavaScript"
              />
              <span className="title">JavaScript</span>
            </li>
            <li>
              <img
                src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/typescript-colored.svg"
                title="TypeScript"
                alt="Logo TypeScript"
              />
              <span className="title">TypeScript</span>
            </li>
            <li>
              <img
                src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/html5-colored.svg"
                title="HTML5"
                alt="Logo HTML5"
              />
              <span className="title">HTML5</span>
            </li>
            <li>
              <img
                src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/css3-colored.svg"
                title="CSS3"
                alt="Logo CSS3"
              />
              <span className="title">CSS3</span>
            </li>
            <li>
              <img
                src="https://seeklogo.com/images/N/next-js-logo-8FCFF51DD2-seeklogo.com.png"
                title="NextJS"
                alt="Logo NextJS"
              />
              <span className="title">Next</span>
            </li>
            <li>
              <img
                src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg"
                title="ReactJS"
                alt="Logo ReactJS"
              />
              <span className="title">React</span>
            </li>
            <li>
              <img
                src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/vuejs-colored.svg"
                title="VueJS"
                alt="Logo VueJS"
              />
              <span className="title">Vue</span>
            </li>
            <li>
              <img
                src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/sass-colored.svg"
                title="SASS"
                alt="Logo SASS"
              />
              <span className="title">SASS</span>
            </li>
            <li>
              <img
                src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/tailwindcss-colored.svg"
                title="TailwindCSS"
                alt="Logo TailwindCSS"
              />
              <span className="title">Tailwind</span>
            </li>
            <li>
              <img
                src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/bootstrap-colored.svg"
                title="BootStrap"
                alt="Logo BootStrap"
              />
              <span className="title">BootStrap</span>
            </li>
            {/* <li>
              <img
                src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/php-colored.svg"
                title="PHP"
                alt="Logo PHP"
              />
              <span className="title">PHP</span>
            </li> */}
            <li>
              <img
                src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nodejs-colored.svg"
                title="NodeJS"
                alt="Logo NodeJS"
              />
              <span className="title">Node</span>
            </li>
            <li>
              <img
                src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/python-colored.svg"
                title="Python"
                alt="Logo Python"
              />
              <span className="title">Python</span>
            </li>
            <li>
              <img
                src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/laravel-colored.svg"
                title="Laravel"
                alt="Logo Laravel"
              />
              <span className="title">Laravel</span>
            </li>
            <li>
              <img
                src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/mysql-colored.svg"
                title="MySql"
                alt="Logo MySql"
              />
              <span className="title">MySql</span>
            </li>
            {/* <li>
              <img
                src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/postgresql-colored.svg"
                title="PostgreSQL"
                alt="Logo PostgreSQL"
              />
              <span className="title">PostgreSQL</span>
            </li> */}
            <li>
              <img
                src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/firebase-colored.svg"
                title="Firebase"
                alt="Logo Firebase"
              />
              <span className="title">Firebase</span>
            </li>
            {/* <li>
              <img
                src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/mongodb-colored.svg"
                title="MongoDB"
                alt="Logo MongoDB"
              />
              <span className="title">MongoDB</span>
            </li> */}
            {/* <li>
              <img
                src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/heroku-colored.svg"
                title="Heroku"
                alt="Logo Heroku"
              />
              <span className="title">Heroku</span>
            </li> */}
            <li>
              <img
                src="https://seeklogo.com/images/A/adobe-photoshop-logo-7B88D7B5AA-seeklogo.com.png"
                title="Adobe Photoshop"
                alt="Logo Adobe Photoshop"
              />
              <span className="title">Photoshop</span>
            </li>
            {/* <li>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Adobe_Illustrator_CC_icon.svg/640px-Adobe_Illustrator_CC_icon.svg.png"
                title="Adobe Illustrator"
                alt="Logo Adobe Illustrator"
              />
              <span className="title">Illustrator</span>
            </li> */}
            <li>
              <img
                src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/figma-colored.svg"
                title="Figma"
                alt="Logo Figma"
              />
              <span className="title">Figma</span>
            </li>
          </ol>
        </div>
        <div className="button">
          <a href="#Work">
            <button>My Work</button>
          </a>
        </div>
      </SkillsContainer>
    )
  }
}
