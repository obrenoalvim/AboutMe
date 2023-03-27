import { HeaderNav } from './styles'
import Link from 'next/link'

interface HeaderProps {
  language: string
}

export default function Header(props: HeaderProps) {
  if (props.language === 'Br') {
    return (
      <HeaderNav>
        <header>
          <nav>
            <label htmlFor="nav-toggle"></label>
            <input id="nav-toggle" type="checkbox" />
            <div className="logo span-logo">
              <a href="#Home" title="Ir para o início do site">
                <span>
                  {`<`}breno.<strong>dev</strong>
                  {`/>`}
                </span>
              </a>
            </div>
            <ul className="links">
              <li>
                <Link href="#Home" title="Ir para o início do site">
                  Início
                </Link>
              </li>
              <li>
                <Link href="#About" title="Ir para a sessão Sobre">
                  Sobre
                </Link>
              </li>
              <li>
                <Link href="#Skills" title="Ir para a sessão habilidades">
                  Habilidades
                </Link>
              </li>
              <li>
                <Link href="#Work" title="Ir para a sessão trabalho">
                  Trabalho
                </Link>
              </li>
              <li>
                <Link href="#Footer" title="Ir para a sessão contatos">
                  Contatos
                </Link>
              </li>
              <li>
                <Link href="/" title="English version">
                  <img
                    src="icon/eua.png"
                    alt="Bandeira do país referente a linguagem do site"
                  />
                </Link>
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
            <label htmlFor="nav-toggle"></label>
            <input id="nav-toggle" type="checkbox" />
            <div className="logo span-logo">
              <a href="#Home" title="Go to homepage">
                <span>
                  {`<`}breno.<strong>dev</strong>
                  {`/>`}
                </span>
              </a>
            </div>
            <ul className="links">
              <li>
                <Link href="#Home" title="Go to homepage">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#About" title="Go to about session">
                  About
                </Link>
              </li>
              <li>
                <Link href="#Skills" title="Go to skills session">
                  Skills
                </Link>
              </li>
              <li>
                <Link href="#Work" title="Go to work session">
                  Work
                </Link>
              </li>
              <li>
                <Link href="#Footer" title="Go to contact session">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/Br" title="Versão em português">
                  <img src="icon/br.png" alt="Country language" />
                </Link>
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
