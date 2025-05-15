import React from 'react'
import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card"
import Image from 'next/image'
import { inter } from '@/public/fonts/font'
import { Button } from '@/components/ui/button'


const CardPlant = () => {
  return (
<Card className=" w-fit  pb-20 px-16 rounded-2xl  border-none  bg-[#232A20] overflow-visible  backdrop-blur-sm ">
  
  <CardContent className="relative w-full h-[200px]">
    <Image
      src="/plant.png"
      alt="plant.png"
      width={900}
      height={600}
      className="absolute -top-24 left-1/2 -translate-x-1/2 z-20 drop-shadow-xl w-[700px] h-[400px]"
    />
  </CardContent>

  <CardFooter className="flex flex-col">
    <p className={`${inter.className} text-sm text-[#C5C7C5]`}>Trendy House Plant</p>
    <span className={`${inter.className} text-[#C5C7C5] text-xl font-bold`}>Calathea plant</span>
    <Button className="py-3.5 px-6 bg-transparent border-white border-2 hover:bg-transparent">Buy Now</Button>
  </CardFooter>
</Card>

  )
}

export default CardPlant