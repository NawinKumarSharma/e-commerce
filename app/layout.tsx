import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'
import CartProvider from './components/Providers'
import ShoppingCartModal from './components/ShoppingCartModal'
import { Suspense } from 'react'
import Loading from './loading'
import NextTopLoader from 'nextjs-toploader';


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'My E-Commerce',
  description: 'Enjoy shopping cool clothes for men, women or teens',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextTopLoader />
        <Suspense fallback={<Loading />}>
          <CartProvider>
            <Navbar />
            <ShoppingCartModal />
            {children}
          </CartProvider>
        </Suspense>
      </body>
    </html>
  )
}
