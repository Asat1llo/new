import {ShoppingBag } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { MenuBar, PlantsMenu, SearchBar } from '@/components/share/layout';
import { inter } from '@/public/fonts/font';


const Header = () => {
  return ( 
    <header className='flex justify-between items-center pt-7 px-7'>
     <div >
      <Link href={'/'}>
      <span className={`${inter.className} font-black uppercase text-2xl text-[#C5C7C5]`}>planto</span>
      </Link>
      </div>
     <ul className={`hidden md:flex ${inter.className}  justify-between items-center gap-7 uppercase text-[#C5C7C5] text-lg`}>
        <Link href={'/'}><li>home</li></Link>
        <PlantsMenu/>
        <Link href={'/'}><li>more</li></Link>
        <Link href={'/'}><li>contact</li></Link>
     </ul>
     <div className='flex justify-between  items-center gap-4 cursor-pointer'>
        <SearchBar/>
        <ShoppingBag width={20} height={20} color='#C5C7C5'/>
        <MenuBar/>
     </div>
    </header>
  )
}

export default Header