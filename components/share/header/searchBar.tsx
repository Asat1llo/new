"use client"
import React, { useState } from 'react'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Search } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { inter } from '@/public/fonts/font'


const SearchBar = () => {

    const [value , setValue] = useState<string>('') 
  return (
    <Popover>
    <PopoverTrigger>
        <Search width={20} height={20} color='#C7C5C5' />
    </PopoverTrigger>
    <PopoverContent className='border-none'>
        <Input className={`${inter.className} border-none`} value={value} placeholder='Search plants....?' onChange={(e)=>setValue(e.target.value)}/>
    </PopoverContent>
    </Popover>
  )
}

export default SearchBar