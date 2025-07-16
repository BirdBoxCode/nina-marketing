"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Mock data - replace with actual tattoo images
const tattooData = [
  {
    id: 1,
    src: "/IMG_0042.jpg",
    alt: "Traditional rose tattoo",
    category: "traditional",
    title: "Traditional Rose",
    description: "Classic American traditional rose with bold lines and vibrant colors."
  },
  {
    id: 2,
    src: "/IMG_0042.jpg",
    alt: "Geometric wolf tattoo",
    category: "geometric",
    title: "Geometric Wolf",
    description: "Modern geometric interpretation of a wolf in black and gray."
  },
  {
    id: 3,
    src: "/IMG_0042.jpg",
    alt: "Watercolor butterfly tattoo",
    category: "watercolor",
    title: "Watercolor Butterfly",
    description: "Delicate watercolor butterfly with soft color transitions."
  },
  {
    id: 4,
    src: "/IMG_0042.jpg",
    alt: "Realistic portrait tattoo",
    category: "realistic",
    title: "Portrait",
    description: "Hyperrealistic portrait tattoo with incredible detail."
  },
  {
    id: 5,
    src: "/IMG_0042.jpg",
    alt: "Japanese dragon tattoo",
    category: "traditional",
    title: "Japanese Dragon",
    description: "Traditional Japanese dragon with flowing clouds and waves."
  },
  {
    id: 6,
    src: "/IMG_0042.jpg",
    alt: "Mandala tattoo",
    category: "geometric",
    title: "Sacred Mandala",
    description: "Intricate mandala design with spiritual symbolism."
  }
]

const categories = [
  { id: "all", label: "All Work" },
  { id: "traditional", label: "Traditional" },
  { id: "geometric", label: "Geometric" },
  { id: "watercolor", label: "Watercolor" },
  { id: "realistic", label: "Realistic" }
]

export function Tattoos() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  
  const filteredTattoos = selectedCategory === "all" 
    ? tattooData 
    : tattooData.filter(tattoo => tattoo.category === selectedCategory)

  return (
    <section id="tattoos" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Tattoo Portfolio
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Each tattoo is a unique piece of art, carefully crafted to tell your story. 
            Browse through my work and find inspiration for your next piece.
          </p>
        </div>

        <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
          <TabsList className="grid w-full grid-cols-5 mb-8">
            {categories.map((category) => (
              <TabsTrigger key={category.id} value={category.id} className="text-xs sm:text-sm">
                {category.label}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value={selectedCategory} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTattoos.map((tattoo) => (
                <Dialog key={tattoo.id}>
                  <DialogTrigger asChild>
                    <Card className="cursor-pointer overflow-hidden group hover:shadow-lg transition-all duration-300">
                      <CardContent className="p-0">
                        <div className="relative aspect-[3/4] overflow-hidden">
                          <Image
                            src={tattoo.src}
                            alt={tattoo.alt}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                          <div className="absolute top-4 right-4">
                            <Badge variant="secondary" className="capitalize">
                              {tattoo.category}
                            </Badge>
                          </div>
                        </div>
                        <div className="p-4">
                          <h3 className="font-semibold text-foreground mb-2">{tattoo.title}</h3>
                          <p className="text-sm text-muted-foreground line-clamp-2">
                            {tattoo.description}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </DialogTrigger>
                  
                  <DialogContent className="max-w-2xl">
                    <div className="space-y-4">
                      <div className="relative aspect-[3/4] overflow-hidden rounded-lg">
                        <Image
                          src={tattoo.src}
                          alt={tattoo.alt}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <h3 className="text-xl font-semibold text-foreground">{tattoo.title}</h3>
                          <Badge variant="outline" className="capitalize">
                            {tattoo.category}
                          </Badge>
                        </div>
                        <p className="text-muted-foreground">{tattoo.description}</p>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}