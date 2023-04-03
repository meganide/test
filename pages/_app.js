import '@/styles/globals.css';

import Footer from '../components/Footer';
import Header from '../components/Header';

export default function App({ Component, pageProps }) {
  return (
    <>
      <main className="page-content">
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}
