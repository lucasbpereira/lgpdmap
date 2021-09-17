import React from 'react'
import Head from 'next/head'
import Presentation from '../components/Presentation'
import ContactUs from '../components/ContactUs'

import Footer from '../components/Footer'
import FAQ from '../components/FAQ'
import StepsPage from '../components/StepsPage'
import Plans from '../components/Plans'
import Navbar from '../components/Navbar'

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Lgpdmap - Como Funciona?</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="shortcut icon" href="assets/favicon.ico" />
      </Head>

      <Navbar />
      <Presentation
        title="Pronto para adequar sua empresa à LGPD de forma fácil e intuitiva?"
        paragraph="Conheça o passo a passo da adequação da sua empresa à LGPD. É simples e objetivo!"
        hasButton="false"
      />
      <StepsPage />
      <ContactUs />
      <Plans />
      <FAQ />
      <Footer />
    </div>
  )
}

export default Home
