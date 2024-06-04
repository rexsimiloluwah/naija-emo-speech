import React from 'react'
import Logo from './Logo'
import Link from 'next/link'
import { Button, buttonVariants } from './ui/button'

const Navbar = () => {
  enum NavLinkType {
    DEFAULT = "default",
    SECONDARY = "secondary"
  }

  const navLinks = [
    {
      title: "Home",
      link: "/",
      type: NavLinkType.DEFAULT
    },
    {
      title: "About",
      link: "/about",
      type: NavLinkType.DEFAULT
    },
    {
      title: "FAQ",
      link: "/faq",
      type: NavLinkType.DEFAULT
    },
    {
      title: "Contribute",
      link: "/dashboard",
      type: NavLinkType.SECONDARY
    }
  ]

  return (
    <div className="bg-primary flex h-20 fixed top-0 shadow-md justify-between w-full items-center px-6 text-white z-50">
        <Logo />
        <ul className="flex flex-row gap-4">
          {navLinks.map((navLink, i) => (
            <li key={i}>{navLink.type == NavLinkType.DEFAULT ? <Button variant={"ghost"}>{navLink.title}</Button> : <Link className={buttonVariants({variant: "secondary"})} href={navLink.link}>{navLink.title}</Link>}</li>
          ))}
        </ul>
    </div>
  )
}

export default Navbar