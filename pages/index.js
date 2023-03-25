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
          <p>
            Navigate to <code>/api/auth/users/me</code> to check session validity and get user session info.
          </p>
          <p>
            Navigate to <code>/api/auth/users/password-reset</code> send a password reset request.
          </p>
          <p>
            Navigate to <code>/api/auth/login</code> to login. Returns no data.
          </p>
          <p>
            Navigate to <code>/api/auth/logout</code> to log out. Returns no data.
          </p>
          <p>
            Navigate to <code>/api/auth/pulse</code> to maintain session validity.
          </p>
          <p>
            Navigate to <code>/api/docket</code> for the docket page data.
          </p>
          <p>
            Navigate to <code>/api/documents/application/(number)</code> for the associated document data found for each docket entry.
            The chosen sample application number is "16807146"
            This route supports the "document_type" query parameter.
            To retrieve claims, specify <code>?document_type=claims</code>
            To retrieve responses, specify <code>?document_type=responses</code>
          </p>
          <p>
            Navigate to <code>/api/patents/application/(number)</code> for the associated patent data found for each record retrieved from docket.
            The chosen sample application number is the same as above: "16807146"
          </p>
          <p>
            Navigate to <code>/api/documents/file/(file-key)</code> for the PDFs associated with the patent application documents retrieved from the above API.
            The above API has a response object with a field called <code>file_location</code>
          </p>
          <p>Use "16807146" as the sample application number. So routes should be <code>/api/documents/file/(file_location.key)</code>. Example would be <code>/api/documents/file/16807146/K7BD722FRXEAPX5.PDF</code> for the spec</p>
        </div>
      </main>

      <Footer />
    </div>
  )
}
