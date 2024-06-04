import { cn } from '@/lib/utils'
import React from 'react'

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode
}

const Container: React.FC<ContainerProps> = ({children, className}) => {
  return (
    <div className={cn("w-[95%] md:w-[80%] m-auto py-8", className)}>
        {children}
    </div>
  )
}

export default Container