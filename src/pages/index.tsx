import Meta from '../components/Head/Meta'

import Link from '../components/Head/Link'

import Title from '../components/Head/Title'

import Header from '../components/Header/index'

import Homepage from '../components/Home/index'

import Social from '../components/Social/index'

import About from '../components/About/index'

import Skills from '../components/Skills/index'

import Work from '../components/Work/index'

import Footer from '../components/Footer/index'

export default function Home() {
  return (
    <>
      <Meta />
      <Link />
      <Title name="Breno Alvim" />
      <Header />
      <div className="hr" id="Home" />
      <Homepage name="Home" path_img="img/login.png" />
      <Social />
      <div className="hr" id="About" />
      <About name="Breno" />
      <div className="hr" id="Skills" />
      <Skills name="Breno" />
      <div className="hr" id="Work" />
      <Work />
      <div className="hr" id="Footer" />
      <Footer />
      <style jsx global>
        {`
          * {
            scroll-behavior: smooth;
          }
          body {
            margin: 0;
            padding: 0;
            background-color: var(--brand-color);
          }
          :root {
            --brand-color: #0f172a;
            --dark-color: #152d73;
            --mid-color: #cbd5e1;
            --light-color: #f8fafc;
            --green-color: #5ae4a8;
            --grey-color: #2c3342;
            --surface-color: #fff;
            --pattern-font: 'Inter', sans-serif;
          }
          body::-webkit-scrollbar {
            width: 12px; /* width of the entire scrollbar */
          }

          body::-webkit-scrollbar-track {
            background: var(--brand-color); /* color of the tracking area */
          }

          body::-webkit-scrollbar-thumb {
            background-color: var(
              --brand-color
            ); /* color of the scroll thumb */
            border-radius: 20px; /* roundness of the scroll thumb */
            border: 3px solid var(--brand-color); /* creates padding around scroll thumb */
          }
        `}
      </style>
    </>
  )
}
