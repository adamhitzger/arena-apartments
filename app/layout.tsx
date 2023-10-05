import './styles/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import  Navbar  from './component/Navbar' 
import Companies from './component/Companies'
import Footer from './component/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Arena Apartments',
  description: 'Arena Apartmens - apartmány v Havlíckově Brodě',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <div className="bg-transparent  w-full overflow-hidden">
        <div className={`sm:px-16 px-6 flex justify-center items-center`}>
          <div className={`xl:max-w-[1280px] w-full`}>
            <Navbar />
          </div>
        </div>
      </div>
      {children}
        <Companies/>
        <Footer/>
        </body>
    </html>
  )
}
