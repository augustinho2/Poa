import '../styles/global.scss'
import styles from '../styles/app.module.scss'

import { Header } from '../components/Header'

import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return(
    <div className={styles.wrapper}>
      <main>
        <Header />
        <Component {...pageProps} />
      </main>
      
    </div>
  )
   
}
