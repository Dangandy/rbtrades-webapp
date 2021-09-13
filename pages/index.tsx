import { useUser } from '@auth0/nextjs-auth0';

import Layout from '../components/Layout';
import Hero from '../components/Hero';
import About from '../components/About';

export default function Home() {
  const { user, error, isLoading } = useUser();

  if (error) console.error(error);

  return (
    <Layout title="Roses & Bee Trades" isLoading={isLoading} user={user}>
      <Hero />
      <About />
    </Layout>
  );
}
