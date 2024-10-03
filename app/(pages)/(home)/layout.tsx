import type { Metadata } from "next"
import localFont from "next/font/local"
import Nav from "@/app/ui/infinity/layout/nav"
import Footer from "@/app/ui/infinity/layout/footer"

const gunday = localFont({
  src: [
    {
      path: '../../../public/fonts/gunday-free/Gunday-Regular.otf',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-gunday-free',
})

export const metadata: Metadata = {
  title: "Infinity Web App",
  description: "Infinity Web App",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <body
      className={`${gunday.className} antialiased`}
    >
      <Nav />
      {children}
      <Footer />
    </body>
  )
}
