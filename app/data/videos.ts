/*
  VIDEOS: the work samples shown in "The work" section.

  To add a real video:
  1. Put the compressed .mp4 in /public/videos/ (aim for 3–8 MB, vertical 9:16).
  2. Put a cover image (a still from the video) next to it, e.g. /public/videos/brand-unboxing.jpg
  3. Fill in `src` and `poster` below. Cards without `src` show a "coming soon" placeholder.

  PLACEHOLDER: the entries below are examples. Replace them with Geff's real work.
*/

export const niches = ['Tech & Gadgets', 'Home & Living', 'Food & Drink', 'Lifestyle'] as const
export type Niche = typeof niches[number]

export interface Video {
  style: string // e.g. "Unboxing", "Voiceover ad"
  brand: string
  niche: Niche
  src?: string // e.g. '/videos/brand-unboxing.mp4'
  poster?: string // e.g. '/videos/brand-unboxing.jpg'
}

export const videos: Video[] = [
  { style: 'Unboxing', brand: 'Brand name', niche: 'Tech & Gadgets' },
  { style: 'Product demo', brand: 'Brand name', niche: 'Home & Living' },
  { style: 'Voiceover ad', brand: 'Brand name', niche: 'Food & Drink' },
  { style: 'Talking to camera', brand: 'Brand name', niche: 'Lifestyle' },
  { style: 'How-to', brand: 'Brand name', niche: 'Tech & Gadgets' },
  { style: 'Skit', brand: 'Brand name', niche: 'Food & Drink' },
  { style: 'Testimonial', brand: 'Brand name', niche: 'Home & Living' },
  { style: 'First impressions', brand: 'Brand name', niche: 'Lifestyle' },
]

// The formats Geff offers ("What I make"). Placeholder wording, confirm with Geff.
export const formats = [
  { icon: 'box', title: 'Unboxing & first impressions', text: 'Real reactions to opening and trying your product for the first time.' },
  { icon: 'hand', title: 'Product demos', text: 'Clear, close-up shots that show exactly how it works.' },
  { icon: 'mic', title: 'Voiceover ads', text: 'Your product on screen, my voice telling the story.' },
  { icon: 'face', title: 'Talking to camera', text: "Reviews and testimonials that feel like a friend's recommendation." },
  { icon: 'list', title: 'How-tos & tutorials', text: 'Step-by-step videos that answer the questions customers ask.' },
  { icon: 'spark', title: 'Skits & hooks', text: 'Short, funny scenes built to stop the scroll.' },
] as const

// What comes with every video. TODO: confirm with Geff before publishing.
export const included = [
  'Captions on screen',
  'Vertical 9:16 and square 1:1 versions',
  'One round of revisions',
  'Raw footage on request',
]
