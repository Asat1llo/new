import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarSeparator, MenubarShortcut, MenubarTrigger } from '@/components/ui/menubar'
import { inter } from '@/public/fonts/font'
import { Logs } from 'lucide-react'

import React from 'react'


const MenuBar = () => {
  return (
 <Menubar className='bg-transparent border-0 '>
  <MenubarMenu >
    <MenubarTrigger className='hover:bg-transparent' >
        <Logs width={20} height={20} color='#C5C7C5'/>
    </MenubarTrigger>
    <MenubarContent className={`${inter.className} uppercase text-[#C5C7C5] cursor-pointer hover:text-white`}>
      <MenubarItem>
       sign in
      </MenubarItem>
      <MenubarSeparator/>
      <MenubarItem>sign up</MenubarItem>
      <MenubarSeparator className='md:hidden' />
      <MenubarItem className='md:hidden'>more</MenubarItem>
      <MenubarSeparator className='md:hidden' />
      <MenubarItem className='md:hidden'>contact</MenubarItem>
    </MenubarContent>
  </MenubarMenu>
</Menubar>

  )
}

export default MenuBar