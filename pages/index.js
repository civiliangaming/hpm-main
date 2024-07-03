
jsx
import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome." />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
        {/* Adding the image here */}
        <img src="/example.jpg" alt="Description of image" style={{ width: '300px', height: 'auto' }} />
      </main>

      <Footer />
    </div>
  )
}



