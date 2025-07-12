
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Music } from "lucide-react";

// Sample lyric generator responses
const sampleResponses = [
  {
    mood: "happy",
    lyrics: `Sunshine breaking through the clouds
Walking with my feet off the ground
Every moment feels like gold
In this story that's yet to be told

CHORUS:
This is happiness, pure and bright
Everything's gonna be alright
Dancing in the glow of day
Letting all my worries fade away

Smiling faces everywhere I go
Planting seeds of joy that grow and grow
Open arms and open hearts
This is where the celebration starts`,
  },
  {
    mood: "sad",
    lyrics: `Empty rooms and silent phones
Memories living in the walls
Pictures of a time that's gone
Your ghost still walking down the halls

CHORUS:
The rain keeps falling, just like my tears
The clock keeps ticking through the years
I'm holding on to what we had
These broken pieces make me sad

Shadows dance across the floor
Reminding me of days before
The light has faded from the sky
As I sit alone and wonder why`,
  },
  {
    mood: "love",
    lyrics: `The moment that I saw your face
Time seemed to slow its steady pace
A connection I can't explain
Like sunshine after days of rain

CHORUS:
This is what they call falling in love
A feeling sent from stars above
Every day I'm finding new ways
To love you for all of my days

Your smile lights up the darkest room
Your laughter makes my heart go boom
Together we're a perfect rhyme
A love that's standing strong through time`,
  },
  {
    mood: "energetic",
    lyrics: `Heart beating like a drum
Energy flowing through my veins
Can't stop this feeling, here it comes
Breaking all the chains

CHORUS:
Unstoppable, that's what I am
Pushing boundaries, yes I can
The fire inside is burning bright
I'm taking off, reaching new heights

Move faster, jump higher
Nothing's gonna slow me down
This moment is electric
I'm claiming my crown`,
  },
];

export default function LyricGeneratorPage() {
  const [prompt, setPrompt] = useState("");
  const [generatedLyrics, setGeneratedLyrics] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = () => {
    if (!prompt.trim()) return;
    
    setIsGenerating(true);
    
    // Simulate API call with timeout
    setTimeout(() => {
      // Find keywords in the prompt to match with sample responses
      const promptLower = prompt.toLowerCase();
      let matchedResponse;
      
      if (promptLower.includes("happy") || promptLower.includes("joy") || promptLower.includes("excited")) {
        matchedResponse = sampleResponses.find(r => r.mood === "happy");
      } else if (promptLower.includes("sad") || promptLower.includes("depressed") || promptLower.includes("heartbreak")) {
        matchedResponse = sampleResponses.find(r => r.mood === "sad");
      } else if (promptLower.includes("love") || promptLower.includes("romance") || promptLower.includes("relationship")) {
        matchedResponse = sampleResponses.find(r => r.mood === "love");
      } else if (promptLower.includes("energy") || promptLower.includes("workout") || promptLower.includes("motivation")) {
        matchedResponse = sampleResponses.find(r => r.mood === "energetic");
      } else {
        // Default to a random response
        const randomIndex = Math.floor(Math.random() * sampleResponses.length);
        matchedResponse = sampleResponses[randomIndex];
      }
      
      setGeneratedLyrics(matchedResponse.lyrics);
      setIsGenerating(false);
    }, 1500);
  };

  return (
    <div className="container mx-auto max-w-5xl">
      <Card className="bg-card border-primary/20">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
            AI Lyric Generator
          </CardTitle>
          <CardDescription>
            Describe your mood or feelings and get custom song lyrics
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="prompt" className="text-sm font-medium">
              Tell us how you're feeling or what you want lyrics about
            </label>
            <Textarea
              id="prompt"
              placeholder="e.g. I'm feeling happy today and want to celebrate, or I'm going through a breakup and need something emotional"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              className="bg-muted min-h-[120px]"
            />
          </div>

          <Button 
            onClick={handleGenerate} 
            disabled={!prompt.trim() || isGenerating}
            className="w-full md:w-auto"
          >
            {isGenerating ? "Generating..." : "Generate Lyrics"}
          </Button>

          {generatedLyrics && (
            <div className="mt-8 p-6 bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl relative">
              <div className="absolute -top-4 -left-4 bg-primary/80 p-2 rounded-full">
                <Music className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Your Custom Lyrics</h3>
              <div className="whitespace-pre-wrap font-medium">
                {generatedLyrics}
              </div>
              <div className="mt-4 flex justify-end gap-2">
                <Button variant="outline" size="sm">
                  Copy
                </Button>
                <Button variant="outline" size="sm">
                  Save
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
  