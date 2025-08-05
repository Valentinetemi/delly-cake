"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Heart, Phone } from "lucide-react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Cakes", href: "/cakes" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-pink-100 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Heart className="w-8 h-8 text-pink-400" />
            <span className="text-2xl font-bold text-gray-800">Delly Cakes</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-600 hover:text-pink-500 transition-colors duration-200 font-medium"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="outline"
              size="sm"
              className="border-pink-400 text-pink-600 hover:bg-pink-50 bg-transparent"
            >
              <Link
              href="/contact" className=" items-center flex space-x-4 border-pink-400 text-pink-600 hover:bg-pink-50 bg-transparent">
              <Phone className="w-4 h-4 mr-2" />
              Call Us
              </Link>
            </Button>

            <Button size="sm" className="bg-pink-400 hover:bg-pink-500 text-white">
            <Link
            href="/contact" >
              Order Now
              </Link>
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="sm">
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>   
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col  space-y-4 mt-8">
                <Link href="/" className="flex items-center space-x-2 mb-8">  
                  <Heart className="w-6 h-6 text-pink-400" />
                  <span className="text-xl font-bold text-gray-800">Delly Cakes</span>
                </Link>

                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-lg text-gray-600 hover:text-pink-500 transition-colors duration-200 py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}

                <div className="pt-4 space-y-3">
                  <Button
                    variant="outline"
                    className="w-full border-pink-400 text-pink-600 hover:bg-pink-50 bg-transparent"
                  >
                  <Link
              href="/contact" className=" items-center flex space-x-4 border-pink-400 text-pink-600 hover:bg-pink-50 bg-transparent">
              <Phone className="w-2 h-2 mr-2" />
              Call Us
              </Link>
                  </Button>
                  <Button className="w-full bg-pink-400 hover:bg-pink-500 text-white">
                    <Link
                href="/contact" >
              Order Now
              </Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}
