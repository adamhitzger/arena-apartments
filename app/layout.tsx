import './styles/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Credit from './component/Credit' 
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Arena Apartments - levné ubytování na Vysočině',
  description: 'Arena Apartmens - apartmány v Havlíckově Brodě. Levné ubytování. Dále je zde možnost wellnessu a fitness centra. Jsme v Havlíčkově Brodě na Vysočině, 23 km severně od Jihlavy u řeky Sázavy. V areálu jsou ubytovací prostory pro 40 osob, učebna, jídelna, kuchyňka, šatny a odpočinková zóna s PlayStationem. Dále poskytujeme moderní posilovnu a Wellness zónu s saunou, parními lázněmi a vířivkami. Parkování a WI-FI jsou zdarma. Recepce 10:00 – 20:00, platební karty akceptovány. Nové pokoje s vlastním sociálním zařízením, minibarem, lednicí, Smart TV a možností přistýlek. Snídaně formou TAKE AWAY nebo švédské stoly pro větší skupiny. Možnost obědů a večeří v restauraci na Ostrově. Bezdrátové internetové připojení je dostupné ve společných prostorách zdarma. Každý pokoj je vybaven vlastním socialním zařízením a ručníky, Smart TV, šatní skříní, minibarem, psacím stolem a židlí. Pro skupiny od 15 osob máme specilální nabídku 600Kč osoba/noc. Možnost zajištění snídaně, obědů i večeří. Pokud máte zájem o stolní tenis, nabízíme individuální trénink s profesionálními trenéry. Wellness není v ceně. Po dohodě možnost využití fit centra.',
  icons: {
    icon: "/img/short-logo.png"
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
   
    <html lang="cs">
      <body className={inter.className}>
      
      {children}
      
      <Credit/>
      <SpeedInsights/>
        </body>
    </html>
  )
}
