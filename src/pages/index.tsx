import Meta from "../components/Head/Meta";

import Link from "../components/Head/Link";

import Title from "../components/Head/Title";

import Header from "../components/Header/index";

export default function Home() {
  return (
    <>
      <Meta></Meta>
      <Link />
      <Title name="About Me" />
      <Header name="</>" />
      <h1></h1>
      <style>
        {`
        body{
          margin: 0;
          padding: 0;
        }
        :root {
          --brand-color: #152D73;
          --dark-color: #0F172A;
          --mid-color: #CBD5E1;
          --light-color: #F8FAFC;
            }
        `}
      </style>
    </>
  );
}
