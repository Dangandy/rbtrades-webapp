import { useUser } from '@auth0/nextjs-auth0';

import Layout from '../components/PublicLayout';
import Hero from '../components/Hero';
import About from '../components/About';
import Pricing from '../components/Pricing';
import Footer from '../components/Footer';
import PrivateLayout from '../components/PrivateLayout';

export default function Home() {
  const { user, error, isLoading } = useUser();

  if (error) console.error(error);

  if (!user && !isLoading) {
    return (
      <Layout title="Roses & Bee Trades" isLoading={isLoading} user={user}>
        <Hero />
        <About />
        <Pricing />
        <Footer />
      </Layout>
    );
  }
  return <PrivateLayout />;
}
