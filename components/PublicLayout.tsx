import { LayoutProps } from '../types';
import Header from './Head';
import Loading from './Loading';
import Navbar from './Navbar';

export default function Layout({
  title,
  children,
  hideLogin,
  isLoading,
  user,
}: LayoutProps) {
  return (
    <>
      <Header title={title} />
      <div className="min-h-screen">
        <div className="relative overflow-hidden">
          <Navbar hideLogin={hideLogin} user={user} />
          <main>
            <Loading isLoading={isLoading} />
            {children}
          </main>
        </div>
      </div>
    </>
  );
}
