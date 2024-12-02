import Image from 'next/image'
import React from 'react'

export default function Header() {
  return (
    <header>
      <nav className="navbar">
          <a href="#page-top">
            <Image
              alt="Logo"
              src="images/logo.png"
              width={100} 
              height={100}
            />
          </a>
          <ul className="navbar-nav">
              <li className="nav-item"><a className="nav-link nav-link-active" href="#hero">Home</a></li>
              <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
              <li className="nav-item"><a className="nav-link" href="#services">Services</a></li>
              <li className="nav-item"><a className="nav-link" href="#portfolio">Portfolio</a></li>
              <li className="nav-item"><a className="nav-link" href="#portfolio">Activites</a></li>
              <li className="nav-item"><a className="nav-link" href="#portfolio">Programs</a></li>
              <li className="nav-item"><a className="nav-link" href="#portfolio">Consult Us</a></li>
              <li className="nav-item"><a className="nav-link" href="#portfolio">Articles</a></li>
              <li className="nav-item"><a className="nav-link" href="#portfolio">Shop</a></li>
              <li className="nav-item btn ml-1"><a className="nav-link text-uppercase" href="#contact us">Contact US</a></li>
          </ul>
        </nav>
      </header>
  )
}
