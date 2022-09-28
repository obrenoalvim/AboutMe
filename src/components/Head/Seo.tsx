import Head from 'next/head'

interface SEOProps {
  title: any
  description: any
  url_image: any
  url_site: any
}

export default function Meta(props: SEOProps) {
  return (
    <>
      <Head>
        <meta name="twitter:title" content={props.title} />

        <meta name="twitter:site" content="@obrenoalvim" />

        <meta name="twitter:image" content={props.url_image} />

        <meta name="twitter:card" content="summary" />

        <meta name="twitter:description" content={props.description} />

        <meta name="twitter:creator" content="@nickbilton" />

        <meta property="og:url" content={props.url_site} />
      </Head>
    </>
  )
}
