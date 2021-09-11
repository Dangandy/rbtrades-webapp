import Image from 'next/image';
import { useUser } from '@auth0/nextjs-auth0';
import Layout from '../components/Layout';

export default function Home() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  if (user) {
    const message = `Welcome ${user.name}!`;
    return (
      <div>
        {message}
        <a href="/api/auth/logout">Logout</a>
      </div>
    );
  }

  return (
    <Layout title="Roses & Bee Trades">
      <main>
        <div className="pt-10 bg-primary sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden">
          <div className="mx-auto max-w-7xl lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-8">
              <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
                <div className="lg:py-24">
                  <h1 className="mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
                    <span className="block">Roses & Bee Trades</span>
                    <span className="block text-yellow-450">
                      Professionals at losing money
                    </span>
                  </h1>
                  <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                    Trust us! We have over 10 years of experiencing margin
                    calls.
                  </p>
                  <div className="mt-10 sm:mt-12">
                    <form action="#" className="sm:max-w-xl sm:mx-auto lg:mx-0">
                      <div className="sm:flex">
                        <div className="min-w-0 flex-1">
                          <label htmlFor="email" className="sr-only">
                            Email address
                          </label>
                          <input
                            id="email"
                            type="email"
                            placeholder="Enter your email"
                            className="block w-full px-4 py-3 rounded-md border-0 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300 focus:ring-offset-gray-900"
                          />
                        </div>
                        <div className="mt-3 sm:mt-0 sm:ml-3">
                          <button
                            type="submit"
                            className="block w-full py-3 px-4 rounded-md shadow bg-secondary text-white font-medium hover:bg-yellow-450 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-300 focus:ring-offset-yellow-900"
                          >
                            Notify Me!
                          </button>
                        </div>
                      </div>
                      <p className="mt-3 text-sm text-gray-300 sm:mt-4">
                        {`providing your email, you agree to RBTrades `}
                        <a href="/" className="font-medium text-white">
                          terms or service
                        </a>
                        .
                      </p>
                    </form>
                  </div>
                </div>
              </div>
              <div className="mt-12 -mb-16 sm:-mb-48 lg:m-0 lg:relative">
                <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
                  <Image
                    width={625}
                    height={625}
                    layout="fixed"
                    className="lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                    src="/hero.svg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* More main page content here... */}
      </main>
    </Layout>
  );
}
