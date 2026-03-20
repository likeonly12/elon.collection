import { Analytics } from '@vercel/analytics/react';
import { AuthProvider } from './context/AuthContext';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Catalog from './components/Catalog/Catalog';
import Roadmap from './components/Roadmap/Roadmap';
import Footer from './components/Footer/Footer';

export default function App() {
  return (
    <AuthProvider>
      <Header />
      <main>
        <Hero />
        <Catalog />
        <Roadmap />
      </main>
      <Footer />
      <Analytics />
    </AuthProvider>
  );
}
