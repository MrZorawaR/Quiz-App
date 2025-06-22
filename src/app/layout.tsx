// app/layout.tsx
'use client';
import Link from 'next/link';
import './globals.css';
import { RecoilRoot } from 'recoil';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Quiz Application</title>
      </head>
      <body className='bg-gradient-to-br from-indigo-100 via-white to-pink-100'>
        <nav className="w-full flex items-center justify-between px-8 py-4 ">
        <div className="flex items-center space-x-2">
          {/* <Image src="/logo.svg" alt="Logo" width={40} height={40} /> */}
          <Link href={`/`}>
          <span className="text-xl font-bold text-indigo-800">QuizMaster</span>
          </Link>
        </div>
        {/* <Button>Login</Button> */}
      </nav>
        <RecoilRoot>{children}</RecoilRoot>
      </body>
    </html>
  );
}
