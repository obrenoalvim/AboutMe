import { Social } from './styles'

export default function Homepage() {
  return (
    <Social>
      <nav className="social">
        <ul>
          <li>
            <a href="mailto:brenoalvim.dev@gmail.com" target={`_blank`}>
              Email <i className="fas fa-envelope"></i>
            </a>
          </li>
          <li>
            <a href="https://github.com/brenoalvim" target={`_blank`}>
              Github <i className="fa fa-github"></i>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/brenoalvim" target={`_blank`}>
              Linkedin <i className="fa fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a
              href="https://drive.google.com/file/d/1yaxIFWiEy4ES-06WaCcMWWF3CqDD2cBZ/view?usp=sharing"
              target={`_blank`}
            >
              CV <i className="fas fa-paperclip"></i>
            </a>
          </li>
        </ul>
      </nav>
    </Social>
  )
}
