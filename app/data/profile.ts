/*
  GEFF'S DETAILS: everything about Geff shown on the page lives here.
  PLACEHOLDER: items marked "TODO" are placeholders. Replace them with Geff's real
  information before showing the site publicly. Never invent numbers, brands, or reviews.
*/

export const profile = {
  brand: 'Meridores Studio', // TODO: confirm the creator brand name with Geff
  name: 'Geff Meridores',
  role: 'UGC Creator',
  location: 'California', // TODO: confirm how specific he wants this
  email: 'hello@example.com', // TODO: Geff's real email

  // Hero headline: two short lines
  headline: ["Hi, I'm Geff.", 'I make videos people trust.'],

  pitch: 'Honest, scroll-stopping UGC for brands: unboxings, demos, voiceovers, and reviews made for TikTok, Reels, and paid ads.',

  // Short facts under the hero. Only true statements (no invented numbers).
  facts: ['Made for TikTok, Reels & Shorts', 'Ads and organic content', 'Based in California'],

  // TODO: Geff's real profile links
  socials: [
    { label: 'TikTok', href: 'https://www.tiktok.com/' },
    { label: 'Instagram', href: 'https://www.instagram.com/' },
    { label: 'YouTube', href: 'https://www.youtube.com/' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/' },
  ],

  // TODO: a short real bio from Geff
  bio: [
    "I'm Geff, a California-based UGC creator. I make videos that feel like a real recommendation from someone your customers trust, not another ad they scroll past.",
    '[A few more lines about Geff: what he loves to film, his background, and why brands enjoy working with him.]',
  ],

  // How he works (placeholder wording, confirm with Geff)
  approach: [
    { title: 'Feels like a recommendation, not an ad', text: 'Products filmed the way people actually use them at home.' },
    { title: 'Detail-first', text: 'Every shot planned and every caption checked before it reaches you.' },
    { title: 'Made for the platform', text: 'Shot vertical, captioned, and edited for how people actually watch.' },
    { title: 'Easy to work with', text: 'Clear updates and on-time delivery, from brief to final cut.' },
  ],

  // TODO: logos of brands Geff has really worked with (files in /public/brands)
  brands: [] as { name: string, logo: string }[],
  brandSlots: 6, // empty placeholder boxes shown until real logos are added

  // TODO: real reviews only, with the reviewer's permission
  reviews: [
    { quote: '[A short review from a brand Geff has worked with goes here.]', name: 'Reviewer name', brand: 'Brand' },
    { quote: '[A second review: what it was like to work with Geff, and how the content performed.]', name: 'Reviewer name', brand: 'Brand' },
  ],
}
