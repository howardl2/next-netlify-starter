import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Sensus Sample Data</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <div>
          <p className="description">
            Navigate to <code>/api/docket/95508</code> for the docket page data.
          </p>
          <p>
            Navigate to <code>/api/patents/(application|patent|publication)/(number)</code> for the associated patents found in the docket data.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  )
}
