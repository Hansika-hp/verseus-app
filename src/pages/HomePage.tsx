
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Music, Ticket, Mic2, Globe } from "lucide-react";

export default function HomePage() {
  return (
    <div className="container mx-auto max-w-6xl">
      {/* Hero Section */}
      <div className="text-center mb-12 mt-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
          Welcome to VerseUs
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Your ultimate music experience platform. Discover concerts, sync with your favorite artists, 
          and explore music around the world.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {/* Concert Effect */}
        <Card className="bg-card border-primary/20 overflow-hidden group hover:shadow-lg hover:shadow-primary/20 transition-all">
          <div className="absolute -right-20 -top-20 w-40 h-40 bg-primary/20 rounded-full group-hover:scale-150 transition-all duration-500"></div>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Music className="h-6 w-6 text-primary" />
              Concert Effect
            </CardTitle>
            <CardDescription>
              Experience your favorite artists' concerts with immersive effects
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4 text-muted-foreground">
              Enter an artist name and song to watch concert videos with dynamic disco lights and fan content.
            </p>
            <Button asChild>
              <Link to="/concert-effect">Try Concert Effect</Link>
            </Button>
          </CardContent>
        </Card>

        {/* Concert Sync */}
        <Card className="bg-card border-primary/20 overflow-hidden group hover:shadow-lg hover:shadow-accent/20 transition-all">
          <div className="absolute -right-20 -top-20 w-40 h-40 bg-accent/20 rounded-full group-hover:scale-150 transition-all duration-500"></div>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Ticket className="h-6 w-6 text-accent" />
              Concert Sync
            </CardTitle>
            <CardDescription>
              Sync with your favorite artists and discover their concerts
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4 text-muted-foreground">
              Browse artist tracks, find tickets on Ticketmaster, and connect with fan content on Instagram.
            </p>
            <Button asChild>
              <Link to="/concert-sync">Explore Concert Sync</Link>
            </Button>
          </CardContent>
        </Card>

        {/* Lyric Generator */}
        <Card className="bg-card border-primary/20 overflow-hidden group hover:shadow-lg hover:shadow-secondary/20 transition-all">
          <div className="absolute -right-20 -top-20 w-40 h-40 bg-secondary/20 rounded-full group-hover:scale-150 transition-all duration-500"></div>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Mic2 className="h-6 w-6 text-secondary" />
              AI Lyric Generator
            </CardTitle>
            <CardDescription>
              Generate custom lyrics based on your mood and feelings
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4 text-muted-foreground">
              Describe how you're feeling and our AI will create personalized song lyrics just for you.
            </p>
            <Button asChild>
              <Link to="/lyric-generator">Generate Lyrics</Link>
            </Button>
          </CardContent>
        </Card>

        {/* Music Map */}
        <Card className="bg-card border-primary/20 overflow-hidden group hover:shadow-lg hover:shadow-primary/20 transition-all">
          <div className="absolute -right-20 -top-20 w-40 h-40 bg-primary/20 rounded-full group-hover:scale-150 transition-all duration-500"></div>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Globe className="h-6 w-6 text-primary" />
              Music Map
            </CardTitle>
            <CardDescription>
              Discover live and upcoming concerts around the world
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4 text-muted-foreground">
              Explore an interactive map showing concerts globally with filters for genre, mood, and time.
            </p>
            <Button asChild>
              <Link to="/music-map">Explore Music Map</Link>
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-primary/20 to-accent/20 p-8 rounded-xl text-center mb-12">
        <h2 className="text-2xl font-bold mb-4">Ready to dive into the music universe?</h2>
        <p className="mb-6 max-w-xl mx-auto">
          Start exploring VerseUs today and discover a whole new way to experience music.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild size="lg">
            <Link to="/concert-effect">Get Started</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link to="/settings">Customize Experience</Link>
          </Button>
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center text-muted-foreground text-sm mb-8">
        <p>VerseUs - Your music universe. All rights reserved.</p>
      </footer>
    </div>
  )
}
  