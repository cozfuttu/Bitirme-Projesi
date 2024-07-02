import { Bona_Nova, Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  weight: '400',
});

const bona_nova = Bona_Nova({
  subsets: ['latin'],
  display: 'swap',
  weight: '400',
})


export const fontClasses = [
  inter.className,
  bona_nova.className,  
]