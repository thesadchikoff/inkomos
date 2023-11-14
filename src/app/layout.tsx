import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import config from "@/config/siteConfig";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: config.siteName,
  description: config.metaDescription,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      {children}
      </body>
    </html>
  )
}
