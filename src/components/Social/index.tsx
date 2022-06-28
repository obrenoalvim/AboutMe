import { Social } from './styles'

export default function Homepage() {
  return (
    <Social>
      <nav className="social">
        <ul>
          <li>
            <a href="mailto:brenoalvim.dev@gmail.com" target={`_blank`}>
              Email
              <img src="svg/square-envelope-solid.svg" alt="" />
            </a>
          </li>
          <li>
            <a href="https://github.com/brenoalvim" target={`_blank`}>
              Github
              <img src="svg/github-brands.svg" alt="" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/brenoalvim" target={`_blank`}>
              Linkedin <img src="svg/linkedin-brands.svg" alt="" />
            </a>
          </li>
          <li>
            <a
              href="https://drive.google.com/file/d/1yaxIFWiEy4ES-06WaCcMWWF3CqDD2cBZ/view?usp=sharing"
              target={`_blank`}
            >
              CV <img src="svg/paperclip-solid.svg" alt="" />
            </a>
          </li>
        </ul>
      </nav>
    </Social>
  )
}
