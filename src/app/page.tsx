import { Navbar } from "@/components/navigation/navbar"
import { Hero } from "@/components/sections/hero"
import { Tattoos } from "@/components/sections/tattoos"
import { Artwork } from "@/components/sections/artwork"
import { Music } from "@/components/sections/music"
import { Contact } from "@/components/sections/contact"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Tattoos />
        <Artwork />
        <Music />
        <Contact />
      </main>
    </div>
  )
}
