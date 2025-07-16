"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Mock data - replace with actual artwork images
const artworkData = [
  {
    id: 1,
    src: "/IMG_0042.jpg",
    alt: "Oil painting landscape",
    category: "painting",
    title: "Mountain Serenity",
    description: "Oil on canvas depicting a peaceful mountain landscape at sunset.",
    medium: "Oil on Canvas",
    size: "24\" x 36\""
  },
  {
    id: 2,
    src: "/IMG_0042.jpg",
    alt: "Digital art portrait",
    category: "digital",
    title: "Digital Dreams",
    description: "Digital artwork exploring the intersection of technology and humanity.",
    medium: "Digital",
    size: "3000 x 4000px"
  },
  {
    id: 3,
    src: "/IMG_0042.jpg",
    alt: "Charcoal sketch",
    category: "drawing",
    title: "Urban Sketches",
    description: "Charcoal drawing capturing the essence of city life.",
    medium: "Charcoal on Paper",
    size: "18\" x 24\""
  },
  {
    id: 4,
    src: "/IMG_0042.jpg",
    alt: "Mixed media artwork",
    category: "mixed",
    title: "Textured Emotions",
    description: "Mixed media piece exploring texture and emotional depth.",
    medium: "Mixed Media",
    size: "20\" x 30\""
  },
  {
    id: 5,
    src: "/IMG_0042.jpg",
    alt: "Watercolor flowers",
    category: "painting",
    title: "Botanical Study",
    description: "Delicate watercolor study of wildflowers in their natural habitat.",
    medium: "Watercolor",
    size: "12\" x 16\""
  },
  {
    id: 6,
    src: "/IMG_0042.jpg",
    alt: "Pencil portrait",
    category: "drawing",
    title: "Human Connection",
    description: "Detailed pencil portrait exploring human emotion and connection.",
    medium: "Graphite on Paper",
    size: "16\" x 20\""
  }
]

const categories = [
  { id: "all", label: "All Artwork" },
  { id: "painting", label: "Paintings" },
  { id: "drawing", label: "Drawings" },
  { id: "digital", label: "Digital" },
  { id: "mixed", label: "Mixed Media" }
]

export function Artwork() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  
  const filteredArtwork = selectedCategory === "all" 
    ? artworkData 
    : artworkData.filter(artwork => artwork.category === selectedCategory)

  return (
    <section id="artwork" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Artwork Portfolio
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
            Beyond skin and ink, I explore various mediums to express creativity and emotion. 
            Each piece represents a journey of artistic discovery and personal expression.
          </p>
          <blockquote className="text-base text-muted-foreground italic max-w-xl mx-auto">
            "Art is not what you see, but what you make others see." - Edgar Degas
          </blockquote>
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
              {filteredArtwork.map((artwork) => (
                <Dialog key={artwork.id}>
                  <DialogTrigger asChild>
                    <Card className="cursor-pointer overflow-hidden group hover:shadow-lg transition-all duration-300">
                      <CardContent className="p-0">
                        <div className="relative aspect-[4/5] overflow-hidden">
                          <Image
                            src={artwork.src}
                            alt={artwork.alt}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                          <div className="absolute top-4 right-4">
                            <Badge variant="secondary" className="capitalize">
                              {artwork.category}
                            </Badge>
                          </div>
                        </div>
                        <div className="p-4">
                          <h3 className="font-semibold text-foreground mb-2">{artwork.title}</h3>
                          <p className="text-sm text-muted-foreground mb-2 line-clamp-2">
                            {artwork.description}
                          </p>
                          <div className="flex flex-col text-xs text-muted-foreground">
                            <span>{artwork.medium}</span>
                            <span>{artwork.size}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </DialogTrigger>
                  
                  <DialogContent className="max-w-3xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="relative aspect-[4/5] overflow-hidden rounded-lg">
                        <Image
                          src={artwork.src}
                          alt={artwork.alt}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <h3 className="text-2xl font-semibold text-foreground">{artwork.title}</h3>
                            <Badge variant="outline" className="capitalize">
                              {artwork.category}
                            </Badge>
                          </div>
                          <p className="text-muted-foreground">{artwork.description}</p>
                        </div>
                        
                        <div className="space-y-2">
                          <h4 className="font-medium text-foreground">Details</h4>
                          <div className="text-sm text-muted-foreground space-y-1">
                            <div><strong>Medium:</strong> {artwork.medium}</div>
                            <div><strong>Size:</strong> {artwork.size}</div>
                          </div>
                        </div>
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