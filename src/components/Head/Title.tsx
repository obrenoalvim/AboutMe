interface TitleProps {
  name: string
  language: string
}

import Head from 'next/head'

export default function Title(props: TitleProps) {
  return (
    <>
      <Head>
        <title>{props.name}</title>
      </Head>
    </>
  )
}
