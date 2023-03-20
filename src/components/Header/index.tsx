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
              <a href="#Home" title='Ir para o início do site'>
                <span>
                  {`<`}breno.<strong>dev</strong>
                  {`/>`}
                </span>
              </a>
            </div>
            <ul className="links">
              <li>
                <a href="#Home" title='Ir para o início do site'>Início</a>
              </li>
              <li>
                <a href="#About" title='Ir para a sessão Sobre'>Sobre</a>
              </li>
              <li>
                <a href="#Skills" title='Ir para a sessão habilidades'>Habilidades</a>
              </li>
              <li>
                <a href="#Work" title='Ir para a sessão trabalho'>Trabalho</a>
              </li>
              <li>
                <a href="#Footer" title='Ir para a sessão contatos'>Contatos</a>
              </li>
              <li>
                <a href="/" title='English version'>
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
              <a href="#Home" title='Go to homepage'>
                <span>
                  {`<`}breno.<strong>dev</strong>
                  {`/>`}
                </span>
              </a>
            </div>
            <ul className="links">
              <li>
                <a href="#Home" title='Go to homepage'>Home</a>
              </li>
              <li>
                <a href="#About" title='Go to about session'>About</a>
              </li>
              <li>
                <a href="#Skills" title='Go to skills session'>Skills</a>
              </li>
              <li>
                <a href="#Work" title='Go to work session'>Work</a>
              </li>
              <li>
                <a href="#Footer" title='Go to contact session'>Contact</a>
              </li>
              <li>
                <a href="/Br" title='Versão em português'>
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
