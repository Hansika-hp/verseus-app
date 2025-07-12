
import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

type ArtistVideo = {
  name: string,
  videoUrl: string
}

const artistVideos: ArtistVideo[] = [
  { name: "taylor swift", videoUrl: "https://www.youtube.com/embed/yZv0--O3HEs" },
  { name: "the weeknd", videoUrl: "https://www.youtube.com/embed/NgV6TdgqH4Y" },
  { name: "weekend", videoUrl: "https://www.youtube.com/embed/NgV6TdgqH4Y" },
  { name: "drake", videoUrl: "https://www.youtube.com/embed/T2o6LNq0M1M" },
  { name: "bts", videoUrl: "https://www.youtube.com/embed/hSDyoIIv7Ls" },
  { name: "post malone", videoUrl: "https://www.youtube.com/embed/B50NliIhXsM" },
];

export default function ConcertEffectPage() {
  const [artist, setArtist] = useState("");
  const [song, setSong] = useState("");
  const [videoUrl, setVideoUrl] = useState("");
  const [showVideo, setShowVideo] = useState(false);
  const [discoLights, setDiscoLights] = useState<{ top: string, left: string, type: string }[]>([]);

  // Create disco lights
  useEffect(() => {
    if (showVideo) {
      const lights = [];
      for (let i = 0; i < 20; i++) {
        lights.push({
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          type: `disco-light-${Math.floor(Math.random() * 3) + 1}`
        });
      }
      setDiscoLights(lights);
    } else {
      setDiscoLights([]);
    }
  }, [showVideo]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!artist.trim()) return;
    
    const foundArtist = artistVideos.find(
      a => a.name.toLowerCase() === artist.toLowerCase()
    );
    
    if (foundArtist) {
      setVideoUrl(foundArtist.videoUrl);
      setShowVideo(true);
    } else {
      // Default to Post Malone if artist not found
      setVideoUrl("https://www.youtube.com/embed/B50NliIhXsM");
      setShowVideo(true);
    }
  };

  return (
    <div className="container mx-auto max-w-5xl">
      <Card className="bg-card border-primary/20">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
            Concert Effect
          </CardTitle>
          <CardDescription>
            Enter an artist name and song to experience the concert effect
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4 mb-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="artist" className="text-sm font-medium">
                  Artist Name
                </label>
                <Input
                  id="artist"
                  placeholder="e.g. Taylor Swift, Post Malone, BTS"
                  value={artist}
                  onChange={(e) => setArtist(e.target.value)}
                  className="bg-muted"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="song" className="text-sm font-medium">
                  Song Title (Optional)
                </label>
                <Input
                  id="song"
                  placeholder="e.g. Circles, Dynamite"
                  value={song}
                  onChange={(e) => setSong(e.target.value)}
                  className="bg-muted"
                />
              </div>
            </div>
            <Button type="submit" className="w-full md:w-auto">
              Generate Concert Effect
            </Button>
          </form>

          {showVideo && (
            <div className="relative mt-8 rounded-xl overflow-hidden" style={{ paddingTop: "56.25%" }}>
              {/* Disco lights */}
              {discoLights.map((light, index) => (
                <div
                  key={index}
                  className={light.type}
                  style={{
                    top: light.top,
                    left: light.left,
                  }}
                />
              ))}
              
              {/* Video player */}
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src={videoUrl}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          )}

          {!showVideo && (
            <div className="bg-muted rounded-xl p-10 text-center">
              <h3 className="text-xl font-medium mb-2">Fan Content Area</h3>
              <p className="text-muted-foreground">
                Enter an artist name above to see concert videos with disco light effects!
              </p>
              <div className="mt-4 flex justify-center gap-2">
                <Button variant="outline" onClick={() => {
                  setArtist("Taylor Swift");
                  handleSubmit(new Event('submit') as any);
                }}>
                  Try Taylor Swift
                </Button>
                <Button variant="outline" onClick={() => {
                  setArtist("Post Malone");
                  handleSubmit(new Event('submit') as any);
                }}>
                  Try Post Malone
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
  