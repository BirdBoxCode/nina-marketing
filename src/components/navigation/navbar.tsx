"use client"

import * as React from "react"
import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"

const navigation = [
  { name: "Home", href: "#home" },
  { name: "Tattoos", href: "#tattoos" },
  { name: "Artwork", href: "#artwork" },
  { name: "Music", href: "#music" },
  { name: "Contact", href: "#contact" },
]

export function Navbar() {
  const [activeSection, setActiveSection] = React.useState("home")

  React.useEffect(() => {
    const handleScroll = () => {
      const sections = navigation.map(item => item.href.substring(1))
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    const element = document.getElementById(href.substring(1))
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <nav className="fixed top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-foreground">
              Nina
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <NavigationMenu>
              <NavigationMenuList className="flex space-x-8">
                {navigation.map((item) => (
                  <NavigationMenuItem key={item.name}>
                    <NavigationMenuLink
                      className={cn(
                        "text-sm font-medium transition-colors hover:text-primary cursor-pointer",
                        activeSection === item.href.substring(1)
                          ? "text-primary"
                          : "text-muted-foreground"
                      )}
                      onClick={() => handleNavClick(item.href)}
                    >
                      {item.name}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <div className="flex flex-col space-y-6 mt-8">
                  <div className="text-lg font-semibold">Nina</div>
                  <nav className="flex flex-col space-y-4">
                    {navigation.map((item) => (
                      <button
                        key={item.name}
                        onClick={() => handleNavClick(item.href)}
                        className={cn(
                          "text-left text-sm font-medium transition-colors hover:text-primary",
                          activeSection === item.href.substring(1)
                            ? "text-primary"
                            : "text-muted-foreground"
                        )}
                      >
                        {item.name}
                      </button>
                    ))}
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}
