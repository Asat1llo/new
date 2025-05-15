import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {  ChevronDown } from 'lucide-react'


const PlantsMenu = () => {

  return (
    <div className='hidden md:flex '>
    <DropdownMenu>
  <DropdownMenuTrigger className='hover:border-none uppercase flex items-center'>plants type <ChevronDown width={20} height={20} className='hover:rotate-180 transition-transform delay-75 ease-linear'/></DropdownMenuTrigger>
  <DropdownMenuContent className='uppercase '>
    <DropdownMenuLabel>types</DropdownMenuLabel>
    <DropdownMenuSeparator/>
    <DropdownMenuItem>calathea plant</DropdownMenuItem>
    <DropdownMenuItem>desk plant</DropdownMenuItem>
    <DropdownMenuItem>cal 874 plant</DropdownMenuItem>
    <DropdownMenuItem>show plant</DropdownMenuItem>
    <DropdownMenuItem>calat O2 plant</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
    </div>
  )
}

export default PlantsMenu