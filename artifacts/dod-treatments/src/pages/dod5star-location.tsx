import { Link } from 'wouter';
import { ExternalLink, MapPin, Play } from 'lucide-react';
import { Seo } from '@/components/Seo';
import { Dod5StarNav } from '@/components/Dod5StarNav';
import { Button } from '@/components/ui/button';

const playlistUrl = 'https://www.youtube.com/playlist?list=PLGL9YQNm1Tc9C4AASb_CVwXZr0pBlBBp6';

const videos = [
  {
    id: '7yPtcQewcgM',
    title: 'Exploring the Hotspots: Hidden Gems of Ixtapa-Zihuatanejo',
  },
  {
    id: 'eI52HM0LUIU',
    title: 'Celebrating at Cala del Mar: A Five Diamond Experience',
  },
  {
    id: '99Dw485erFc',
    title: 'The Impressive Ixtapa Theatre',
  },
  {
    id: 'qRX-Vn74o6o',
    title: 'Marina Golf Course: A Hidden Gem of Ixtapa',
  },
  {
    id: 'Lt3zwe51WAw',
    title: 'A Peaceful, Affordable Paradise in Ixtapa',
  },
  {
    id: 'Pu630BUgomQ',
    title: 'Dolphins, Massages & Turtle Release in Ixtapa-Zihuatanejo',
  },
];

const activities = [
  {
    title: 'Xihuacan Archaeological Site',
    category: 'History & culture',
    description: 'Visit the ancient ceremonial center at Soledad de Maciel and explore the history of the pre-Columbian communities that gathered there.',
  },
  {
    title: 'Beaches & Snorkeling',
    category: 'Coastline',
    description: 'Spend time at laid-back beaches with calm-water swimming, snorkeling, colorful fish, coral, and fresh local food nearby.',
  },
  {
    title: 'Jungle Bike Trails',
    category: 'Outdoor activity',
    description: 'Follow the shaded route from the Ixtapa marina toward Playa Linda, with opportunities to spot local birds, iguanas, and other wildlife.',
  },
  {
    title: 'Turtle Release',
    category: 'Seasonal experience',
    description: 'Join a qualified conservation program to learn about local sea turtles and, when available, help release hatchlings toward the ocean.',
  },
  {
    title: 'Marina Ixtapa Golf Club',
    category: 'Golf',
    description: 'Play the Robert von Hagge-designed course beside the marina, with challenging fairways, water features, and options for different skill levels.',
  },
  {
    title: 'Ocean Sports',
    category: 'On the water',
    description: 'Explore surfing, paddleboarding, sailing, kayaking, and snorkeling around Ixtapa-Zihuatanejo and nearby Troncones.',
  },
];

export default function Dod5StarLocation() {
  return (
    <>
      <Seo
        title="Ixtapa-Zihuatanejo | DOD5Star Retreat"
        description="Watch Ixtapa-Zihuatanejo videos and explore beaches, snorkeling, golf, bike trails, turtle releases, and cultural experiences near DOD5Star."
        path="/clinics/ixtapa-zihuatanejo/location"
      />
      <Dod5StarNav />

      <section className="relative isolate overflow-hidden py-24 md:py-32">
        <img
          src={`${import.meta.env.BASE_URL}images/ixtapa-aerial.jpg`}
          alt="Aerial view of the Ixtapa-Zihuatanejo coastline and marina"
          className="absolute inset-0 -z-30 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-20 bg-gradient-to-b from-[#071421]/70 via-[#071421]/50 to-background" aria-hidden="true" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 flex items-center justify-center gap-2 text-primary">
              <MapPin className="h-5 w-5" />
              <span className="text-sm font-semibold uppercase tracking-[0.18em]">Ixtapa-Zihuatanejo, México</span>
            </div>
            <h1 className="gold-gradient gold-glow text-4xl font-bold leading-tight md:text-6xl">Explore the Setting</h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-foreground/90 md:text-xl">
              Jungle, coastline, and a slower pace of life set the scene for the DOD5Star Healing &amp; Training Retreat.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-10 max-w-3xl text-center md:mb-12">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Video showcase</p>
            <h2 className="mt-4 text-3xl font-bold md:text-4xl">Ixtapa-Zihuatanejo in Motion</h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Explore the coastline, local landmarks, and memorable experiences through this collection from the DOD5Star team.
            </p>
          </div>

          <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 xl:grid-cols-3">
            {videos.map((video) => (
              <article key={video.id} className="glass-panel overflow-hidden rounded-2xl">
                <a
                  href={`https://www.youtube.com/watch?v=${video.id}&list=PLGL9YQNm1Tc9C4AASb_CVwXZr0pBlBBp6`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative block aspect-video overflow-hidden bg-background/60"
                  aria-label={`Watch ${video.title} on YouTube`}
                >
                  <img
                    src={`https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`}
                    alt=""
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute inset-0 bg-black/15 transition-colors group-hover:bg-black/5" aria-hidden="true" />
                  <span className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-xl transition-transform group-hover:scale-110" aria-hidden="true">
                    <Play className="ml-1 h-6 w-6 fill-current" />
                  </span>
                </a>
                <h3 className="p-5 text-base font-semibold leading-snug">{video.title}</h3>
              </article>
            ))}
          </div>

          <div className="mt-10 text-center">
            <a href={playlistUrl} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="gold-glow">
                View the Full Playlist
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      <section className="bg-card/30 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-10 max-w-3xl text-center md:mb-12">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Beyond the retreat</p>
            <h2 className="mt-4 text-3xl font-bold md:text-4xl">Things to Do in Ixtapa-Zihuatanejo</h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Choose quiet beach time, local culture, or a day of adventure. Activities vary by season and availability, and the retreat team can help you plan.
            </p>
          </div>

          <div className="mx-auto grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {activities.map((activity, index) => (
              <article key={activity.title} className="glass-panel rounded-2xl p-6">
                <div className="mb-5 flex items-center justify-between gap-4">
                  <span className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">{activity.category}</span>
                  <span className="text-sm font-semibold text-primary/75">0{index + 1}</span>
                </div>
                <h3 className="text-xl font-bold">{activity.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{activity.description}</p>
              </article>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link href="/clinics/ixtapa-zihuatanejo/inquire">
              <Button size="lg" variant="outline" className="border-primary/60 hover:bg-primary/15">
                Plan Your Stay
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}