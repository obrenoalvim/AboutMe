import { HeaderNav } from './styles'

export default function Header() {
  return (
    <HeaderNav>
      <header>
        <nav>
          <input id="nav-toggle" type="checkbox" />
          <div className="logo span-logo">
            <a href="#Home">
              <span>
                {`<`}breno.<strong>dev</strong>
                {`/>`}
              </span>
            </a>
          </div>
          <ul className="links">
            <li>
              <a href="#Home">Home</a>
            </li>
            <li>
              <a href="#About">About</a>
            </li>
            <li>
              <a href="#Skills">Skills</a>
            </li>
            <li>
              <a href="#Work">Work</a>
            </li>
            <li>
              <a href="#Footer">Contact</a>
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
  )
}
