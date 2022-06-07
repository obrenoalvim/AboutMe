import { HeaderNav } from "./styles";

interface HeaderProps {
  name: string;
}

export default function Header(props: HeaderProps) {
  return (
    <HeaderNav>
      <header>
        <nav>
          <input id="nav-toggle" type="checkbox" />
          <div className="logo span-logo">
            <span>
              {props.name}
              </span>
          </div>
          <ul className="links">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Skills</a>
            </li>
            <li>
              <a href="#">Work</a>
            </li>
          </ul>
          <label htmlFor="nav-toggle" className="icon-burger">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </label>
        </nav>
      </header>
    </HeaderNav>
  );
}
