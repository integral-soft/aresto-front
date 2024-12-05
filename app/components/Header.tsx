"use client"

import Image from 'next/image'
import logo from '../../public/images/logo.png'
import type { CustomFlowbiteTheme } from "flowbite-react";
import { Button, Flowbite, Navbar } from "flowbite-react";

const navbarTheme: CustomFlowbiteTheme = {
  navbar: {
    root: {
      base: "text-white flex flex-nowrap items-center justify-between mt-9 tablet:flex-nowrap px-2 py-2.5 sm:px-4",
    },
    link: {
      base: "font-bold hover:text-green",
      active: {
        on: "text-green",
        off: ""
      }
    }
  },
  button: {
    base: "ml-3 h-54 px-5 rounded-full font-bold uppercase",
    color: {
      green: "bg-green rounded-lg-full"
    }
  }
};

export default function Header() {

  return (
    <Flowbite  theme={{theme: navbarTheme}}>
      <Navbar fluid>
        <Navbar.Brand href="/">
          <Image
            alt="Logo"
            src={logo}
            width={218} 
            height={54}
          />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Link href="#" active>Home</Navbar.Link>
          <Navbar.Link href="#">About</Navbar.Link>
          <Navbar.Link href="#">Services</Navbar.Link>
          <Navbar.Link href="#">Portfolio</Navbar.Link>
          <Navbar.Link href="#">Activites</Navbar.Link>
          <Navbar.Link href="#">Programs</Navbar.Link>
          <Navbar.Link href="#">Consult Us</Navbar.Link>
          <Navbar.Link href="#">Articles</Navbar.Link>
          <Navbar.Link href="#">Shop</Navbar.Link>
        </Navbar.Collapse>
        <Button color="green">Contact US</Button>
      </Navbar>
    </Flowbite>
  )
}
