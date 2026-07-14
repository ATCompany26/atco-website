"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const AMAZON =
  "https://www.amazon.in/storefront?me=A4GFZNOXQ0KYK&ref_=ssf_share";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="siteHeader">
      <div className="container navWrap">
        <a className="brand" href="#top" aria-label="ATCo home">
          <img src="/atco-logo.jpg" alt="ATCo Everyday Essentials" />
        </a>

        <button
          className="menuButton"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>

        <nav className={open ? "navLinks open" : "navLinks"}>
          <a href="#collections" onClick={() => setOpen(false)}>Collections</a>
          <a href="#featured" onClick={() => setOpen(false)}>Featured</a>
          <a href="#about" onClick={() => setOpen(false)}>About</a>
          <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
          <a className="navCta" href={AMAZON} target="_blank" rel="noreferrer">
            Shop on Amazon
          </a>
        </nav>
      </div>
    </header>
  );
}
