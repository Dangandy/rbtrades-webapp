import React from 'react';

export interface HeaderProps {
  title: string;
}

export interface NavbarProps {
  hideLogin?: Boolean;
}

export interface LayoutProps extends HeaderProps, NavbarProps {
  children: React.ReactNode;
}
