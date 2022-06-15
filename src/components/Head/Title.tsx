interface TitleProps {
  name: string,
  language: string
}

import Head from 'next/head'

export default function Title(props: TitleProps) {
  if (props.language === 'Br') {
    return (
      <>
        <Head>
          <title>{props.name}</title>
        </Head>
      </>
    )
  } else {
    return (
      <>
        <Head>
          <title>{props.name}</title>
        </Head>
      </>
    )
  }
}
