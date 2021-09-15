import { UserProfile } from '@auth0/nextjs-auth0';
import React from 'react';

export interface HeaderProps {
  title: string;
}

export interface NavbarProps {
  hideLogin?: Boolean;
  user?: UserProfile;
}

export interface LoadingProps {
  isLoading?: Boolean;
}

export interface LayoutProps extends HeaderProps, NavbarProps, LoadingProps {
  children: React.ReactNode;
}

export interface svgProps {
  className?: string;
}
