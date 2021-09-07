import React from 'react';
import Head from 'next/head';
import { HeaderProps } from '../types';

export default function Header({ title }: HeaderProps) {
  return (
    <Head>
      <title>{title}</title>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta
        name="description"
        content="Professionals at losing money, with more than 10 years of experience getting margin called"
      />
      <meta
        name="keywords"
        content="Martingale, Investing, Algorithm, Saas, Tom Denmark, Oscillators, Divergence, TEMA, MetaTrader5"
      />
      <meta name="author" content="RBTrades" />
      <link rel="shortcut icon" href="/favicon.svg" />
    </Head>
  );
}
