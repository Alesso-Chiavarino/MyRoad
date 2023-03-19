import CareerProvider from '@/context/CareerContext'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <CareerProvider>
      <Component {...pageProps} />
    </CareerProvider>
  )
}
