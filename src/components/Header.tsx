import { cn } from '@/lib/utils'
import React from 'react'

interface HeaderProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode
}

export const Header: React.FC<HeaderProps> = ({children, className}) => {
  return (
    <div className={cn("text-3xl md:text-5xl font-bold text-gray-800", className)}>{children}</div>
  )
}

export const SubHeader: React.FC<HeaderProps> = ({children, className}) => {
    return (
        <div className={cn("text-xl md:text-2xl text-gray-600", className)}>{children}</div>
    )
}