import CareerProvider from '@/context/CareerContext'
import UserProvider from '@/context/UserContext'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <UserProvider>
      <CareerProvider>
        <Component {...pageProps} />
      </CareerProvider>
    </UserProvider>
  )
}
