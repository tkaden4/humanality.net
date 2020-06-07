import Head from "next/head";

export function Header({ title }) {
  return (
    <Head>
      {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
      <script async src="https://www.googletagmanager.com/gtag/js?id=UA-168784785-1"></script>
      <script>
        {`
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-168784785-1');
`}
      </script>
      <title>{title + " - Humanality"}</title>
      <link rel="icon" href="/logo64.png" />
      <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="keywords" content="personality, test, quiz, introspective" />
      <meta name="description" content="Learn about your 5 factor personality type with a free test." />
      <script
        data-ad-client="ca-pub-8018805392583698"
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
      ></script>
    </Head>
  );
}

export default Header;
