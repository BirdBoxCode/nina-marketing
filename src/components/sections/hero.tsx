"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Instagram, Twitter, Facebook } from "lucide-react"

export function Hero() {
  const handleScrollToTattoos = () => {
    const element = document.getElementById("tattoos")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/80" />
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6">
          Nina
        </h1>
        
        <p className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Tattoo Artist • Visual Artist • Musician
        </p>
        
        <p className="text-base sm:text-lg text-muted-foreground mb-12 max-w-xl mx-auto">
          Exploring the intersection of ink, canvas, and sound. Each piece tells a story, 
          each note carries emotion, each tattoo becomes part of your journey.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Button 
            size="lg" 
            onClick={handleScrollToTattoos}
            className="min-w-[200px]"
          >
            View My Work
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="min-w-[200px]"
          >
            Get in Touch
          </Button>
        </div>
        
        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-16">
          <a 
            href="#" 
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Instagram"
          >
            <Instagram className="h-6 w-6" />
          </a>
          <a 
            href="#" 
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Twitter"
          >
            <Twitter className="h-6 w-6" />
          </a>
          <a 
            href="#" 
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Facebook"
          >
            <Facebook className="h-6 w-6" />
          </a>
        </div>
        
        {/* Scroll Indicator */}
        <div className="animate-bounce">
          <ArrowDown className="h-6 w-6 text-muted-foreground mx-auto" />
        </div>
      </div>
    </section>
  )
}