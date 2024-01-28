import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { ThemeProvider } from "@/components/Root/ThemeProvider"
import './globals.css'

const poppins = Poppins({
  weight: ['400', '600', '700', '800'],
  subsets: ['latin-ext'],

})

export const metadata: Metadata = {
  title: 'Qwicsee',
  description: 'Transform your portfolio with Qwicsee! Experience the magic of effortless design, intuitive customization, and powerful analytics. Ideal for creatives and professionals seeking to make a striking online impression. Join Qwicsee and craft visually stunning portfolios that captivate and inspire!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>

      <body className={`${poppins.className} bg-bgray`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
