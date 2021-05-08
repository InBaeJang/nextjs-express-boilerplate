import type { AppProps /*, AppContext */ } from 'next/app'

function NextExpress({ Component, pageProps }: AppProps) {
  return (
    <Component {...pageProps} />
  )
}

export default NextExpress