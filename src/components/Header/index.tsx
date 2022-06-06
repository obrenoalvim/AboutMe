import { HeaderNav } from "./styles";

interface HeaderProps {
  name: string;
}

export default function Header(props: HeaderProps) {
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");

  hamburger.addEventListener("click", mobileMenu);

  function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  }

  return (
    <HeaderNav>
      <header className="header">
        <nav className="navbar">
          <a href="#" className="nav-logo">
            {props.name}
          </a>
          <ul className="nav-menu">
            <li className="nav-item">
              <a href="#" className="nav-link">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                Work
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                CV
              </a>
            </li>
          </ul>
          <div className="hamburger">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </nav>
      </header>
    </HeaderNav>
  );
}
