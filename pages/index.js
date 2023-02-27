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
            Navigate to <code>/api/auth/users/me</code> to check session validity and get user session info.
          </p>
          <p className="description">
            Navigate to <code>/api/auth/users/password-reset</code> send a password reset request.
          </p>
          <p className="description">
            Navigate to <code>/api/auth/login</code> to login. Returns no data.
          </p>
          <p className="description">
            Navigate to <code>/api/auth/pulse</code> to maintain session validity.
          </p>
          <p className="description">
            Navigate to <code>/api/docket/95508</code> for the docket page data.
          </p>
          <p className="description">
            Navigate to <code>/api/documents/application/(number)</code> for the associated document data found for each docket entry.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  )
}
