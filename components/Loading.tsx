import React from 'react';
import { LoadingProps } from '../types';

export default function Loading({ isLoading }: LoadingProps) {
  if (!isLoading) return null;
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 flex flex-col items-center justify-center ">
      <div className="w-40 h-40 border-t-4 border-b-4 border-yellow-450 rounded-full animate-spin" />
    </div>
  );
}
