import { HeaderNav } from './styles'

interface HeaderProps {
  language: string
}

export default function Header(props: HeaderProps) {
  if (props.language === 'Br') {
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
                <a href="#Home">Início</a>
              </li>
              <li>
                <a href="#About">Sobre</a>
              </li>
              <li>
                <a href="#Skills">Habilidades</a>
              </li>
              <li>
                <a href="#Work">Trabalho</a>
              </li>
              <li>
                <a href="#Footer">Contatos</a>
              </li>
              <li>
                <a href="/">
                  <img src="icon/eua.png"  />
                </a>
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
  } else {
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
              <li>
                <a href="/Br">
                  <img src="icon/br.png"  />
                </a>
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
}
