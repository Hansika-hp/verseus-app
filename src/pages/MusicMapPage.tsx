
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Search, Music, Calendar, Filter } from "lucide-react";

// Sample data for the map
const concerts = [
  {
    id: 1,
    artist: "Taylor Swift",
    venue: "Madison Square Garden",
    location: "New York, USA",
    date: "2023-06-15",
    time: "20:00",
    status: "live", // live, soon, upcoming
    genre: "Pop",
    mood: "Hype",
    spotifyPreview: "https://open.spotify.com/artist/06HL4z0CvFAxyc27GXpf02",
    ticketLink: "https://www.ticketmaster.com/taylor-swift-tickets/artist/1094215",
    image: "https://i.scdn.co/image/ab6761610000e5eb5a00969a4698c3bc19d84821",
  },
  {
    id: 2,
    artist: "The Weeknd",
    venue: "O2 Arena",
    location: "London, UK",
    date: "2023-06-20",
    time: "19:30",
    status: "soon",
    genre: "R&B",
    mood: "Chill",
    spotifyPreview: "https://open.spotify.com/artist/1Xyo4u8uXC1ZmMpatF05PJ",
    ticketLink: "https://www.ticketmaster.com/the-weeknd-tickets/artist/1697014",
    image: "https://i.scdn.co/image/ab6761610000e5eb214f3cf1cbe7139c1e26ffbb",
  },
  {
    id: 3,
    artist: "BTS",
    venue: "Tokyo Dome",
    location: "Tokyo, Japan",
    date: "2023-07-10",
    time: "18:00",
    status: "upcoming",
    genre: "K-Pop",
    mood: "Hype",
    spotifyPreview: "https://open.spotify.com/artist/3Nrfpe0tUJi4K4DXYWgMUX",
    ticketLink: "https://www.ticketmaster.com/bts-tickets/artist/2110227",
    image: "https://i.scdn.co/image/ab6761610000e5eb5704a64f34fe29ff73ab56bb",
  },
  {
    id: 4,
    artist: "Drake",
    venue: "Staples Center",
    location: "Los Angeles, USA",
    date: "2023-06-18",
    time: "21:00",
    status: "live",
    genre: "Hip-Hop",
    mood: "Hype",
    spotifyPreview: "https://open.spotify.com/artist/3TVXtAsR1Inumwj472S9r4",
    ticketLink: "https://www.ticketmaster.com/drake-tickets/artist/1319371",
    image: "https://i.scdn.co/image/ab6761610000e5eb4293385d324db8558179afd9",
  },
  {
    id: 5,
    artist: "Billie Eilish",
    venue: "Ziggo Dome",
    location: "Amsterdam, Netherlands",
    date: "2023-06-25",
    time: "20:30",
    status: "soon",
    genre: "Pop",
    mood: "Sad",
    spotifyPreview: "https://open.spotify.com/artist/6qqNVTkY8uBg9cP3Jd7DAH",
    ticketLink: "https://www.ticketmaster.com/billie-eilish-tickets/artist/2366444",
    image: "https://i.scdn.co/image/ab6761610000e5eb7b9745289c1765196218329b",
  },
];

export default function MusicMapPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("all");
  const [selectedMood, setSelectedMood] = useState("all");
  const [selectedTime, setSelectedTime] = useState("all");
  const [_filteredConcerts, setFilteredConcerts] = useState(concerts);
  const [selectedConcert, setSelectedConcert] = useState(null);

  const handleSearch = () => {
    let filtered = concerts;
    
    // Apply search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        concert => 
          concert.artist.toLowerCase().includes(query) ||
          concert.venue.toLowerCase().includes(query) ||
          concert.location.toLowerCase().includes(query)
      );
    }
    
    // Apply genre filter
    if (selectedGenre && selectedGenre !== "all") {
      filtered = filtered.filter(concert => concert.genre === selectedGenre);
    }
    
    // Apply mood filter
    if (selectedMood && selectedMood !== "all") {
      filtered = filtered.filter(concert => concert.mood === selectedMood);
    }
    
    // Apply time filter
    if (selectedTime && selectedTime !== "all") {
      filtered = filtered.filter(concert => {
        const today = new Date();
        const concertDate = new Date(concert.date);
        
        if (selectedTime === "Today") {
          return concertDate.toDateString() === today.toDateString();
        } else if (selectedTime === "This Weekend") {
          const dayOfWeek = today.getDay(); // 0 = Sunday, 6 = Saturday
          const daysUntilWeekend = dayOfWeek <= 5 ? 5 - dayOfWeek : 6;
          const weekend = new Date(today);
          weekend.setDate(today.getDate() + daysUntilWeekend);
          
          return concertDate >= today && concertDate <= weekend;
        } else if (selectedTime === "Next Month") {
          const nextMonth = new Date(today);
          nextMonth.setMonth(today.getMonth() + 1);
          
          return concertDate.getMonth() === nextMonth.getMonth() && 
                 concertDate.getFullYear() === nextMonth.getFullYear();
        }
        
        return true;
      });
    }
    
    setFilteredConcerts(filtered);
  };

  return (
    <div className="container mx-auto max-w-6xl">
      <Card className="bg-card border-primary/20">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
            Geo-Synced Music Map
          </CardTitle>
          <CardDescription className="text-foreground/80">
            Discover live and upcoming concerts around the world
          </CardDescription>
        </CardHeader>
        <CardContent>
          {/* Search and Filters */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-6">
            <div className="md:col-span-2 relative">
              <Input
                placeholder="Search for city, artist, or venue..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-muted pl-10"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            </div>
            
            <div className="relative">
              <Select value={selectedGenre} onValueChange={setSelectedGenre}>
                <SelectTrigger className="bg-muted">
                  <SelectValue placeholder="Genre" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Genres</SelectItem>
                  <SelectItem value="Pop">Pop</SelectItem>
                  <SelectItem value="Rock">Rock</SelectItem>
                  <SelectItem value="Hip-Hop">Hip-Hop</SelectItem>
                  <SelectItem value="R&B">R&B</SelectItem>
                  <SelectItem value="K-Pop">K-Pop</SelectItem>
                  <SelectItem value="EDM">EDM</SelectItem>
                  <SelectItem value="Classical">Classical</SelectItem>
                </SelectContent>
              </Select>
              <Music className="absolute right-10 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
            </div>
            
            <div className="relative">
              <Select value={selectedMood} onValueChange={setSelectedMood}>
                <SelectTrigger className="bg-muted">
                  <SelectValue placeholder="Mood" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Moods</SelectItem>
                  <SelectItem value="Chill">Chill</SelectItem>
                  <SelectItem value="Hype">Hype</SelectItem>
                  <SelectItem value="Sad">Sad</SelectItem>
                  <SelectItem value="Romantic">Romantic</SelectItem>
                </SelectContent>
              </Select>
              <Filter className="absolute right-10 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
            </div>
            
            <div className="relative">
              <Select value={selectedTime} onValueChange={setSelectedTime}>
                <SelectTrigger className="bg-muted">
                  <SelectValue placeholder="Time" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Any Time</SelectItem>
                  <SelectItem value="Today">Today</SelectItem>
                  <SelectItem value="This Weekend">This Weekend</SelectItem>
                  <SelectItem value="Next Month">Next Month</SelectItem>
                </SelectContent>
              </Select>
              <Calendar className="absolute right-10 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
            </div>
            
            <Button onClick={handleSearch} className="md:hidden">
              Apply Filters
            </Button>
          </div>

          {/* Map Placeholder */}
          <div className="relative w-full h-[400px] bg-muted rounded-lg overflow-hidden mb-6 text-white">
            {/* This would be replaced with an actual map component */}
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1174&q=80')] bg-cover bg-center opacity-70"></div>
            
            {/* Map overlay with markers */}
            <div className="absolute inset-0 p-4 flex flex-col justify-between">
              <div className="text-right">
                <Badge className="bg-red-500 hover:bg-red-600 mb-1 mr-1">🔴 Live Now</Badge>
                <Badge className="bg-yellow-500 hover:bg-yellow-600 mb-1 mr-1">🟡 Starting Soon</Badge>
                <Badge className="bg-blue-500 hover:bg-blue-600">🔵 Upcoming</Badge>
              </div>
              
              <div className="text-white text-center">
                <h3 className="text-xl font-semibold mb-2">World Tour Map</h3>
                <p>Click on a marker to see concert details</p>
              </div>
              
              {/* Sample markers */}
              <div className="map-marker-live absolute top-[30%] left-[25%] cursor-pointer" 
                   onClick={() => setSelectedConcert(concerts.find(c => c.id === 1))}></div>
              <div className="map-marker-live absolute top-[45%] left-[18%] cursor-pointer"
                   onClick={() => setSelectedConcert(concerts.find(c => c.id === 4))}></div>
              <div className="map-marker-soon absolute top-[25%] left-[45%] cursor-pointer"
                   onClick={() => setSelectedConcert(concerts.find(c => c.id === 2))}></div>
              <div className="map-marker-soon absolute top-[30%] left-[50%] cursor-pointer"
                   onClick={() => setSelectedConcert(concerts.find(c => c.id === 5))}></div>
              <div className="map-marker-upcoming absolute top-[35%] left-[80%] cursor-pointer"
                   onClick={() => setSelectedConcert(concerts.find(c => c.id === 3))}></div>
            </div>
          </div>

          {/* Concert Details (shown when a marker is clicked) */}
          {selectedConcert && (
            <div className="bg-muted p-6 rounded-lg mb-6">
              <div className="flex flex-col md:flex-row gap-4">
                <img 
                  src={selectedConcert.image} 
                  alt={selectedConcert.artist} 
                  className="w-full md:w-32 h-32 object-cover rounded-lg"
                />
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-semibold">{selectedConcert.artist}</h3>
                      <p className="text-muted-foreground">{selectedConcert.venue}, {selectedConcert.location}</p>
                      <p className="text-sm">
                        {new Date(selectedConcert.date).toLocaleDateString()} at {selectedConcert.time}
                      </p>
                    </div>
                    <Badge 
                      className={
                        selectedConcert.status === "live" ? "bg-red-500" : 
                        selectedConcert.status === "soon" ? "bg-yellow-500" : 
                        "bg-blue-500"
                      }
                    >
                      {selectedConcert.status === "live" ? "Live Now" : 
                       selectedConcert.status === "soon" ? "Starting Soon" : 
                       "Upcoming"}
                    </Badge>
                  </div>
                  
                  <div className="flex gap-2 mt-2">
                    <Badge variant="outline">{selectedConcert.genre}</Badge>
                    <Badge variant="outline">{selectedConcert.mood}</Badge>
                  </div>
                  
                  <div className="flex gap-2 mt-4">
                    <Button 
                      size="sm" 
                      variant="outline"
                      onClick={() => window.open(selectedConcert.spotifyPreview, '_blank')}
                    >
                      Spotify Preview
                    </Button>
                    <Button 
                      size="sm"
                      onClick={() => window.open(selectedConcert.ticketLink, '_blank')}
                    >
                      Book Tickets
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Now Playing Worldwide Carousel */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4">Now Playing Worldwide</h3>
            <Carousel className="w-full">
              <CarouselContent>
                {concerts.filter(concert => concert.status === "live").map((concert) => (
                  <CarouselItem key={concert.id} className="md:basis-1/3 lg:basis-1/4">
                    <div className="p-1">
                      <Card className="overflow-hidden bg-muted hover:bg-muted/80 transition-colors cursor-pointer" onClick={() => setSelectedConcert(concert)}>
                        <div className="relative h-40">
                          <img 
                            src={concert.image} 
                            alt={concert.artist} 
                            className="absolute inset-0 w-full h-full object-cover"
                          />
                          <div className="absolute top-2 right-2">
                            <Badge className="bg-red-500">Live</Badge>
                          </div>
                        </div>
                        <CardContent className="p-4">
                          <h4 className="font-semibold truncate">{concert.artist}</h4>
                          <p className="text-sm text-muted-foreground truncate">{concert.venue}</p>
                          <p className="text-xs mt-1">{concert.location}</p>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2" />
              <CarouselNext className="right-2" />
            </Carousel>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
  