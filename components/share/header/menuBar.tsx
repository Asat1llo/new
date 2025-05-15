import React from 'react'
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarSeparator, MenubarSub, MenubarSubContent, MenubarSubTrigger, MenubarTrigger } from '@/components/ui/menubar'
import { inter } from '@/public/fonts/font'
import { Logs } from 'lucide-react'



const MenuBar = () => {
  return (
 <Menubar className='bg-transparent border-0 '>
  <MenubarMenu >
    <MenubarTrigger className='hover:bg-transparent' >
        <Logs width={20} height={20} color='#C5C7C5'/>
    </MenubarTrigger>
    <MenubarContent className={`${inter.className} uppercase  cursor-pointer `}>
      <MenubarItem>
       sign in
      </MenubarItem>
      <MenubarSeparator/>
      <MenubarItem>sign up</MenubarItem>
      <MenubarSeparator className='md:hidden' />
      <MenubarItem className='md:hidden'>more</MenubarItem>
      <MenubarSeparator className='md:hidden' />
      <MenubarItem className='md:hidden'>contact</MenubarItem>
      <MenubarSeparator className='md:hidden'/>
      <div className='md:hidden'>
       <MenubarSub >
        <MenubarSubTrigger className='uppercase'>plants types</MenubarSubTrigger>
        <MenubarSubContent className='px-3'>
          <MenubarItem>types</MenubarItem>
          <MenubarSeparator/>
            <MenubarItem>calathea plant</MenubarItem>
            <MenubarItem>desk plant</MenubarItem>
            <MenubarItem>cal 874 plant</MenubarItem>
            <MenubarItem>show plant</MenubarItem>
            <MenubarItem>calat O2 plant</MenubarItem>
        </MenubarSubContent>
       </MenubarSub>
      </div>
    </MenubarContent>
  </MenubarMenu>
</Menubar>

  )
}

export default MenuBar