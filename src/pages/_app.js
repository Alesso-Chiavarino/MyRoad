import CareerProvider from '@/context/CareerContext';
import UserProvider from '@/context/UserContext';
import '@/styles/globals.css';
import NextNProgress from 'nextjs-progressbar';

export default function App({ Component, pageProps }) {
  return (
    <UserProvider>
      <CareerProvider>
        <NextNProgress color="#7148FC" />
        <Component {...pageProps} />
      </CareerProvider>
    </UserProvider>
  );
}
