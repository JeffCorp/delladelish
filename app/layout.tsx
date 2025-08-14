import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import type { Metadata } from 'next'
import { Montserrat } from "next/font/google"
import './globals.css'

const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat" })

export const metadata: Metadata = {
  title: 'Dela Delish - Fresh & Healthy Food Delivery',
  description: 'Fresh, healthy meals crafted by expert chefs and delivered to your door in 30 minutes or less.',
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    images: '/images/cravings.jpg',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dela Delish - Fresh & Healthy Food Delivery',
    description: 'Fresh, healthy meals crafted by expert chefs and delivered to your door in 30 minutes or less.',
    images: '/images/cravings.jpg',
  },
  metadataBase: new URL('https://deladelish.ng'),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />

      </head>
      <body className={`${montserrat.variable} font-montserrat bg-white min-h-screen`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
