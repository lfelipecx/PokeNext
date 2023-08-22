import Head from 'next/head'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'

import './globals.css'
import { Poppins } from 'next/font/google'

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800", "900"] });

export const metadata = {
  title: 'PokedexNext',
  description: 'Pokedex criado em NextJs',
  icons: {
    icon: '/images/favicon.ico'
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
                
        <div className="flex flex-col h-screen">
          <div className="h-[94px]">
              <NavBar />
          </div>

          <div className="flex-1">
             {children}
          </div>


          <Footer /> 

        </div>        

       
      </body>
    </html>
  )
}
