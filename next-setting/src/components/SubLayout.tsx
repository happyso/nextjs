import Link from 'next/link';
import { ReactNode } from 'react';

export default function SubLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <h1>
        <Link href="/">Home 으로</Link>
      </h1>
      {children}
    </>
  );
}
