import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/ui/Navbar'
import Footer from '@/components/ui/Footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
    title: 'Micro-Business Tech Stacks Affiliate Hub',
    description: 'Compare and find the best software for your micro-business.',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Navbar />
                <main className="min-h-screen bg-gray-50 text-gray-900">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    )
}
