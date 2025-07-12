
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Demo data
// Keeping this data for potential future use
const _postMaloneSong = {
  name: "Circles",
  artist: "Post Malone",
  albumArt: "https://i.scdn.co/image/ab67616d0000b2739478c87599550dd73bfa7e02",
  spotifyUrl: "https://open.spotify.com/track/21jGcNKet2qwijlDFuPiPb",
  ticketmasterUrl: "https://www.ticketmaster.com/post-malone-tickets/artist/2217926",
  instagramUrl: "https://www.instagram.com/postmalone/",
};

// Mock database of artists
const artistDatabase = [
  {
    name: "Post Malone",
    songs: [
      {
        name: "Circles",
        albumArt: "https://i.scdn.co/image/ab67616d0000b2739478c87599550dd73bfa7e02",
        spotifyUrl: "https://open.spotify.com/track/21jGcNKet2qwijlDFuPiPb",
      },
      {
        name: "Sunflower",
        albumArt: "https://i.scdn.co/image/ab67616d0000b273e2e352d89826aef6dbd5ff8f",
        spotifyUrl: "https://open.spotify.com/track/3KkXRkHbMCARz0aVfEt68P",
      },
    ],
    ticketmasterUrl: "https://www.ticketmaster.com/post-malone-tickets/artist/2217926",
    instagramUrl: "https://www.instagram.com/postmalone/",
  },
  {
    name: "Taylor Swift",
    songs: [
      {
        name: "Cruel Summer",
        albumArt: "https://i.scdn.co/image/ab67616d0000b273f4c9ba6d7274e9c4fd511e39",
        spotifyUrl: "https://open.spotify.com/track/1BxfuPKGuaTgP7aM0Bbdwr",
      },
      {
        name: "Anti-Hero",
        albumArt: "https://i.scdn.co/image/ab67616d0000b273bb54dde68cd23e2a268ae0f5",
        spotifyUrl: "https://open.spotify.com/track/0V3wPSX9ygBnCm8psDIegu",
      },
    ],
    ticketmasterUrl: "https://www.ticketmaster.com/taylor-swift-tickets/artist/1094215",
    instagramUrl: "https://www.instagram.com/taylorswift/",
  },
  {
    name: "Drake",
    songs: [
      {
        name: "God's Plan",
        albumArt: "https://i.scdn.co/image/ab67616d0000b2738b53d23498352e0b3b65fa41",
        spotifyUrl: "https://open.spotify.com/track/6DCZcSspjsKoFjzjrWoCdn",
      },
      {
        name: "Hotline Bling",
        albumArt: "https://i.scdn.co/image/ab67616d0000b273404b83cdb9e2654d9a263d7c",
        spotifyUrl: "https://open.spotify.com/track/6nmz4imkDcmtwMjocAzFSx",
      },
    ],
    ticketmasterUrl: "https://www.ticketmaster.com/drake-tickets/artist/1319371",
    instagramUrl: "https://www.instagram.com/champagnepapi/",
  },
  {
    name: "BTS",
    songs: [
      {
        name: "Dynamite",
        albumArt: "https://i.scdn.co/image/ab67616d0000b2737dd8f95320e8ef08aa121dfe",
        spotifyUrl: "https://open.spotify.com/track/4saklk6nie3yiGePpBwUoc",
      },
      {
        name: "Butter",
        albumArt: "https://i.scdn.co/image/ab67616d0000b2735e14a2595d5a4c3f5e9b4ee4",
        spotifyUrl: "https://open.spotify.com/track/2bgTY4UwhfBYhGT4HUYStN",
      },
    ],
    ticketmasterUrl: "https://www.ticketmaster.com/bts-tickets/artist/2110227",
    instagramUrl: "https://www.instagram.com/bts.bighitofficial/",
  },
  {
    name: "The Weeknd",
    songs: [
      {
        name: "Blinding Lights",
        albumArt: "https://i.scdn.co/image/ab67616d0000b273a048415db06a5b6fa7ec4e1a",
        spotifyUrl: "https://open.spotify.com/track/0VjIjW4GlUZAMYd2vXMi3b",
      },
      {
        name: "Save Your Tears",
        albumArt: "https://i.scdn.co/image/ab67616d0000b273a048415db06a5b6fa7ec4e1a",
        spotifyUrl: "https://open.spotify.com/track/5QO79kh1waicV47BqGRL3g",
      },
    ],
    ticketmasterUrl: "https://www.ticketmaster.com/the-weeknd-tickets/artist/1697014",
    instagramUrl: "https://www.instagram.com/theweeknd/",
  },
];

export default function ConcertSyncPage() {
  const [searchInput, setSearchInput] = useState("");
  const [selectedArtist, setSelectedArtist] = useState(artistDatabase[0]);
  const [selectedSong, setSelectedSong] = useState(selectedArtist.songs[0]);

  const handleSearch = () => {
    if (!searchInput.trim()) return;
    
    const foundArtist = artistDatabase.find(
      artist => artist.name.toLowerCase().includes(searchInput.toLowerCase())
    );
    
    if (foundArtist) {
      setSelectedArtist(foundArtist);
      setSelectedSong(foundArtist.songs[0]);
    }
  };

  return (
    <div className="container mx-auto max-w-5xl">
      <Card className="bg-card border-primary/20">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
            Concert Sync
          </CardTitle>
          <CardDescription>
            Discover and sync with your favorite artists' concerts
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <Input
              placeholder="Search for an artist..."
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              className="bg-muted flex-1"
            />
            <Button onClick={handleSearch}>Search</Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Album Art and Track Info */}
            <div className="md:col-span-1">
              <div className="relative group">
                <img 
                  src={selectedSong.albumArt} 
                  alt={`${selectedSong.name} by ${selectedArtist.name}`}
                  className="w-full rounded-lg shadow-xl transition-transform duration-300 group-hover:scale-105"
                />
                
                {/* Disco light effects */}
                <div className="disco-light-1 absolute top-[10%] left-[20%] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="disco-light-2 absolute top-[30%] right-[20%] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="disco-light-3 absolute bottom-[20%] left-[40%] opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              
              <div className="mt-4 text-center">
                <h3 className="text-xl font-semibold">{selectedSong.name}</h3>
                <p className="text-muted-foreground">{selectedArtist.name}</p>
              </div>
              
              <Button 
                variant="outline" 
                className="w-full mt-4"
                onClick={() => window.open(selectedSong.spotifyUrl, '_blank')}
              >
                Open in Spotify
              </Button>
            </div>
            
            {/* Tabs for Song Selection and Connections */}
            <div className="md:col-span-2">
              <Tabs defaultValue="songs" className="w-full">
                <TabsList className="w-full mb-4">
                  <TabsTrigger value="songs" className="flex-1">Songs</TabsTrigger>
                  <TabsTrigger value="tickets" className="flex-1">Tickets</TabsTrigger>
                  <TabsTrigger value="fans" className="flex-1">Fan Content</TabsTrigger>
                </TabsList>
                
                <TabsContent value="songs" className="space-y-4">
                  <h3 className="text-lg font-medium mb-2">Popular Songs</h3>
                  {selectedArtist.songs.map((song) => (
                    <div 
                      key={song.name}
                      className={`p-4 rounded-lg cursor-pointer transition-colors ${selectedSong.name === song.name ? 'bg-primary/20' : 'bg-muted hover:bg-muted/80'}`}
                      onClick={() => setSelectedSong(song)}
                    >
                      <div className="flex items-center gap-3">
                        <img 
                          src={song.albumArt} 
                          alt={song.name} 
                          className="w-12 h-12 rounded"
                        />
                        <div>
                          <h4 className="font-medium">{song.name}</h4>
                          <p className="text-sm text-muted-foreground">{selectedArtist.name}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </TabsContent>
                
                <TabsContent value="tickets" className="space-y-4">
                  <div className="bg-gradient-to-r from-primary/20 to-accent/20 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-2">Get Tickets for {selectedArtist.name}</h3>
                    <p className="mb-4 text-muted-foreground">
                      Don't miss the chance to see {selectedArtist.name} live in concert!
                    </p>
                    <Button 
                      onClick={() => window.open(selectedArtist.ticketmasterUrl, '_blank')}
                      className="w-full md:w-auto"
                    >
                      Find Tickets on Ticketmaster
                    </Button>
                  </div>
                </TabsContent>
                
                <TabsContent value="fans" className="space-y-4">
                  <div className="bg-gradient-to-r from-accent/20 to-primary/20 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-2">Fan Content & Reels</h3>
                    <p className="mb-4 text-muted-foreground">
                      Check out the latest fan content and Instagram reels from {selectedArtist.name}.
                    </p>
                    <Button 
                      onClick={() => window.open(selectedArtist.instagramUrl, '_blank')}
                      className="w-full md:w-auto"
                    >
                      View on Instagram
                    </Button>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
  