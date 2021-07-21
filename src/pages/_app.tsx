import React, { Component } from 'react'
import { AppProps } from 'next/app'

import '../styles/globals.scss'
import '../styles/app.scss'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />
}

export default MyApp
