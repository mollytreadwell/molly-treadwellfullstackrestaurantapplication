import '@/styles/globals.css'
import Head from 'next/head';
import Layout from '@/components/layout';
import { Toaster } from 'react-hot-toast';
import { SnipcartProvider } from 'use-snipcart/useSnipcart';

export default function App({ Component, pageProps }) {
  return (<>
  <SnipcartProvider>
    <Head>
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
        integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
        crossOrigin="anonymous"
      />
    </Head>

      <Layout>
        <Toaster position='bottom-center'/>
          <Component {...pageProps} />
      </Layout>
  </SnipcartProvider>
  </>)
}
