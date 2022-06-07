import Meta from "../components/Head/Meta";

import Link from "../components/Head/Link";

import Title from "../components/Head/Title";

import Header from "../components/Header/index";

import { Root } from "./styles";

export default function Home() {
  return (
    <>
      <Meta></Meta>
      <Link />
      <Title name="About Me" />
      <Header name="<Breno.dev/>" />
      <h1></h1>
      <style>
        {`
        body {
          margin: 0;
          padding: 0;
        }
        :root {
          --brand-color: #152d73;
          --dark-color: #0f172a;
          --mid-color: #cbd5e1;
          --light-color: #f8fafc;
        }
        `}
      </style>
    </>
  );
}
