import Image from 'next/image';
import { LayoutProps } from '../types';
import Header from './Head';
import Navbar from './Navbar';

export default function Layout({ title, children, hideLogin }: LayoutProps) {
  return (
    <>
      <Header title={title} />
      <div className="min-h-screen">
        <div className="relative overflow-hidden">
          <Navbar hideLogin={hideLogin} />
          <main>{children}</main>
        </div>
      </div>
    </>
  );
}
