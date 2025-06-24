import type { Metadata } from "next"
import "@/app/globals.css"
import { Inter } from 'next/font/google'
import { ThemeProvider } from "@/app/providers/theme-provider"
import { Toaster } from 'sonner'
import Header from '@/components/header'
import Footer from '@/components/footer'
import SupportAssistant from "@/components/support-assistant"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: "BITZ-itc - Innovative Tech Solutions",
  description: "Transforming businesses through innovative technology solutions.",
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <body className="font-inter">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
          <Footer />
          <Toaster position="top-center" />
          <SupportAssistant />
        </ThemeProvider>
      </body>
    </html>
  )
}