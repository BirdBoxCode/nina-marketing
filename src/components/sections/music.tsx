"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Play, Pause, ExternalLink } from "lucide-react"
import { useState } from "react"
import Image from 'next/image'

// Mock music data - replace with actual tracks
const musicData = [
  {
    id: 1,
    title: "Ink & Melody",
    album: "Artistic Expressions",
    genre: "Alternative",
    duration: "3:45",
    description: "A haunting melody that captures the essence of creating art with both ink and sound.",
    streamingLinks: {
      spotify: "#",
      apple: "#",
      soundcloud: "#"
    }
  },
  {
    id: 2,
    title: "Canvas Dreams",
    album: "Artistic Expressions",
    genre: "Indie Folk",
    duration: "4:12",
    description: "Acoustic track inspired by late-night painting sessions and creative breakthroughs.",
    streamingLinks: {
      spotify: "#",
      apple: "#",
      soundcloud: "#"
    }
  },
  {
    id: 3,
    title: "Neon Nights",
    album: "Urban Sketches",
    genre: "Electronic",
    duration: "5:23",
    description: "Electronic composition reflecting the energy of city life and neon-lit tattoo parlors.",
    streamingLinks: {
      spotify: "#",
      apple: "#",
      soundcloud: "#"
    }
  },
  {
    id: 4,
    title: "Skin Deep",
    album: "Urban Sketches",
    genre: "Alternative Rock",
    duration: "3:58",
    description: "Raw and emotional track exploring the deeper meaning behind tattoo artistry.",
    streamingLinks: {
      spotify: "#",
      apple: "#",
      soundcloud: "#"
    }
  }
]

const albums = [
  {
    id: 1,
    title: "Artistic Expressions",
    year: "2023",
    cover: "/api/placeholder/300/300",
    description: "A collection of songs inspired by the creative process and artistic journey."
  },
  {
    id: 2,
    title: "Urban Sketches",
    year: "2022",
    cover: "/api/placeholder/300/300",
    description: "Musical interpretations of city life, street art, and urban culture."
  }
]

export function Music() {
  const [currentlyPlaying, setCurrentlyPlaying] = useState<number | null>(null)

  const handlePlayPause = (trackId: number) => {
    if (currentlyPlaying === trackId) {
      setCurrentlyPlaying(null)
    } else {
      setCurrentlyPlaying(trackId)
    }
  }

  return (
    <section id="music" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Music
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Music flows through my veins as much as ink flows through my needles.
            Each song is a soundtrack to the creative process, a melody born from artistic inspiration.
          </p>
        </div>

        {/* Albums Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">Albums</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {albums.map((album) => (
              <Card key={album.id} className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="flex flex-col sm:flex-row">
                    <div className="relative w-full sm:w-48 h-48 sm:h-auto">
                      <Image
                        src={album.cover}
                        alt={`${album.title} album cover`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6 flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h4 className="text-xl font-semibold text-foreground">{album.title}</h4>
                        <Badge variant="outline">{album.year}</Badge>
                      </div>
                      <p className="text-muted-foreground mb-4">{album.description}</p>
                      <div className="flex flex-wrap gap-2">
                        <Button variant="outline" size="sm">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Spotify
                        </Button>
                        <Button variant="outline" size="sm">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Apple Music
                        </Button>
                        <Button variant="outline" size="sm">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          SoundCloud
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Tracks Section */}
        <div>
          <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">Latest Tracks</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {musicData.map((track) => (
              <Card key={track.id} className="overflow-hidden">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-lg">{track.title}</CardTitle>
                      <CardDescription>
                        {track.album} • {track.duration}
                      </CardDescription>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary">{track.genre}</Badge>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => handlePlayPause(track.id)}
                      >
                        {currentlyPlaying === track.id ? (
                          <Pause className="w-4 h-4" />
                        ) : (
                          <Play className="w-4 h-4" />
                        )}
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-sm text-muted-foreground mb-4">
                    {track.description}
                  </p>

                  {/* Mock audio player */}
                  <div className="bg-muted/50 rounded-lg p-3 mb-4">
                    <div className="flex items-center justify-between text-sm text-muted-foreground mb-2">
                      <span>0:00</span>
                      <span>{track.duration}</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div
                        className="bg-primary h-2 rounded-full transition-all duration-300"
                        style={{ width: currentlyPlaying === track.id ? "30%" : "0%" }}
                      />
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <Button variant="outline" size="sm" asChild>
                      <a href={track.streamingLinks.spotify} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-3 h-3 mr-1" />
                        Spotify
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <a href={track.streamingLinks.apple} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-3 h-3 mr-1" />
                        Apple
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <a href={track.streamingLinks.soundcloud} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-3 h-3 mr-1" />
                        SoundCloud
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
