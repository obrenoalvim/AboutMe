import Meta from '../components/Head/Meta'

import Link from '../components/Head/Link'

import Title from '../components/Head/Title'

import Header from '../components/Header/index'

import Homepage from '../components/Home/index'

import About from '../components/About/index'

import Skills from '../components/Skills/index'

import Work from '../components/Work/index'

import Footer from '../components/Footer/index'

import GlobalStyle from './global'

import Seo from '../components/Head/Seo'

export default function Home() {
  return (
    <>
      <Meta />
      <Link />
      <Seo
        title="Breno Alvim • Web Developer"
        description="Full-Stack Developer"
        url_image="https://avatars.githubusercontent.com/u/39434668?v=4"
      />
      <GlobalStyle />
      <Title name="Breno Alvim" language="EUA" />
      <Header language="EUA" />
      <div className="hr" id="Home" />
      <Homepage name="Home" path_img="img/login.png" language="EUA" />
      <div className="hr" id="About" />
      <About name="Breno" language="EUA" />
      <div className="hr" id="Skills" />
      <Skills name="Breno" language="EUA" />
      <div className="hr" id="Work" />
      <Work language="EUA" />
      <div className="hr" id="Footer" />
      <Footer language="EUA" />
    </>
  )
}
