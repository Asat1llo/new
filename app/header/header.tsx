import { Search, ShoppingBag } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { MenuBar } from '@/components/share/layout';
import { inter } from '@/public/fonts/font';


const Header = () => {
  return ( 
    <header className='flex justify-between items-center pt-7 px-7'>
     <div >
      <span className={`${inter.className} font-black uppercase text-2xl text-[#C5C7C5]`}>planto</span>
      </div>
     <ul className={`hidden md:flex ${inter.className}  justify-between items-center gap-1 uppercase text-[#C5C7C5] text-lg`}>
        <Link href={'/'}><li>home</li></Link>
        <Link href={'/'}><li>more</li></Link>
        <Link href={'/'}><li>contact</li></Link>
     </ul>
     <div className='flex justify-between  items-center gap-7 cursor-pointer'>
        <Search width={20} height={20} color='#C5C7C5'/>
        <ShoppingBag width={20} height={20} color='#C5C7C5'/>
        <MenuBar/>
     </div>
    </header>
  )
}

export default Header