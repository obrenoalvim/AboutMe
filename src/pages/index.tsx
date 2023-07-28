import Header from '@/components/Header/page'
import HomePage from '@/components/Home/page'
import { Inter, Roboto } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

const roboto = Roboto({ weight: ['400', '100'], subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`${roboto.className}`}
    >
   <HomePage
   />
    </main>
  )
}
