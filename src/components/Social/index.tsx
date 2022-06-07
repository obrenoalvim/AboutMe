import { Social } from "./styles";

interface HomepageProps {
  name: string;
}

export default function Homepage(props: HomepageProps) {
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
        </ul>
      </nav>
    </Social>
  );
}
