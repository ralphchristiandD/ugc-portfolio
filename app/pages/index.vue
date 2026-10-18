<script setup lang="ts">
import { profile } from '~/data/profile'
import { formats, included, niches, videos } from '~/data/videos'

useSeoMeta({
  title: `${profile.name} | UGC Creator in English, Tagalog & Mandarin`,
  description: profile.pitch,
})

// "The work" filter
const filters = ['All', ...niches] as const
const active = ref<typeof filters[number]>('All')
const shown = computed(() => (active.value === 'All' ? videos : videos.filter(v => v.niche === active.value)))

const year = new Date().getFullYear()
</script>

<template>
  <div id="top">
    <SiteHeader />

    <main>
      <!-- HERO: Geff's greeting in all three languages he creates in -->
      <section class="overflow-hidden bg-ink text-white">
        <div class="container-page grid items-center gap-16 pb-20 pt-14 sm:pb-24 sm:pt-20 lg:grid-cols-[1.3fr_1fr] lg:gap-10">
          <div>
            <p class="rise eyebrow text-sky">{{ profile.role }} based in {{ profile.location }}</p>
            <h1 class="mt-6 space-y-1.5 text-[1.8rem] font-semibold leading-[1.15] sm:text-5xl sm:leading-[1.1] lg:text-[3.4rem]">
              <span
                v-for="(g, i) in profile.greetings"
                :key="g.lang"
                :lang="g.lang"
                class="rise flex flex-wrap items-center gap-x-3"
                :style="{ animationDelay: `${120 + i * 120}ms` }"
              >
                {{ g.text }}
                <span class="rounded-full border border-sun/60 px-2 py-0.5 font-sans text-xs font-semibold tracking-normal text-sun" aria-hidden="true">{{ g.tag }}</span>
              </span>
            </h1>
            <p class="rise mt-8 max-w-lg text-lg leading-relaxed text-white/75" style="animation-delay: 480ms">
              {{ profile.pitch }}
            </p>
            <div class="rise mt-9 flex flex-wrap gap-3" style="animation-delay: 560ms">
              <a href="#work" class="btn-sun">See my work</a>
              <a :href="`mailto:${profile.email}`" class="btn-ghost">Email me</a>
            </div>
            <ul class="rise mt-10 flex flex-wrap gap-2" style="animation-delay: 640ms">
              <li v-for="fact in profile.facts" :key="fact" class="rounded-full border border-ink-3 px-3.5 py-1.5 text-sm text-white/80">
                {{ fact }}
              </li>
            </ul>
          </div>
          <div class="rise lg:justify-self-end lg:pr-6" style="animation-delay: 300ms">
            <HeroPhone />
          </div>
        </div>
      </section>

      <!-- BRANDS: real logos only; dashed boxes are placeholders -->
      <section class="border-b border-line bg-white py-12 sm:py-14">
        <div class="container-page flex flex-col gap-6 lg:flex-row lg:items-center lg:gap-12">
          <p class="eyebrow shrink-0 text-muted">Brands I've created for</p>
          <ul class="grid flex-1 grid-cols-3 gap-3 sm:grid-cols-6">
            <li v-for="b in profile.brands" :key="b.name" class="grid h-12 place-items-center">
              <img :src="b.logo" :alt="b.name" class="max-h-8 w-auto opacity-70 grayscale">
            </li>
            <li
              v-for="n in profile.brands.length ? 0 : profile.brandSlots"
              :key="n"
              class="grid h-12 place-items-center rounded-xl border border-dashed border-line text-[0.6875rem] text-muted"
            >
              Brand logo
            </li>
          </ul>
        </div>
      </section>

      <!-- THE WORK -->
      <section id="work" class="section bg-paper">
        <div class="container-page">
          <div v-reveal class="reveal">
            <div class="max-w-2xl">
              <h2 class="text-4xl font-semibold sm:text-5xl">The work</h2>
              <p class="mt-4 text-lg leading-relaxed text-muted">
                Short vertical videos for TikTok, Reels, Shorts, and paid ads. Each one is tagged with its language:
                EN for English, TL for Tagalog, <span lang="zh">中文</span> for Mandarin.
              </p>
            </div>
            <div class="mt-8 flex flex-wrap gap-2" role="group" aria-label="Filter videos by category">
              <button
                v-for="f in filters"
                :key="f"
                type="button"
                :aria-pressed="active === f"
                class="min-h-10 rounded-full border px-4 text-sm font-semibold transition-colors"
                :class="active === f ? 'border-ink bg-ink text-white' : 'border-line bg-white text-ink hover:border-ink/40'"
                @click="active = f"
              >
                {{ f }}
              </button>
            </div>
          </div>
          <div class="mt-12 grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4">
            <VideoCard v-for="v in shown" :key="`${v.style}-${v.niche}`" :video="v" />
          </div>
        </div>
      </section>

      <!-- WHAT I MAKE -->
      <section class="section bg-white">
        <div class="container-page grid gap-14 lg:grid-cols-[5fr_7fr] lg:gap-20">
          <div v-reveal class="reveal">
            <h2 class="text-4xl font-semibold sm:text-5xl">What I make</h2>
            <p class="mt-4 text-lg leading-relaxed text-muted">
              The formats brands ask for most, all shot vertically and edited to hook viewers in the first seconds.
            </p>
            <div class="mt-10 rounded-3xl bg-ink p-7 text-white sm:p-8">
              <p class="eyebrow text-sun">Every video comes with</p>
              <ul class="mt-5 space-y-3">
                <li v-for="item in included" :key="item" class="flex items-start gap-3 text-white/85">
                  <svg class="mt-1 size-4 shrink-0 text-sun" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M3 8.5l3 3 7-7" /></svg>
                  {{ item }}
                </li>
              </ul>
            </div>
          </div>
          <ul class="grid gap-x-10 gap-y-10 sm:grid-cols-2">
            <li
              v-for="(f, i) in formats"
              :key="f.title"
              v-reveal
              class="reveal"
              :style="{ transitionDelay: `${i * 80}ms` }"
            >
              <span class="grid size-11 place-items-center rounded-xl bg-sun/25 text-ink">
                <FormatIcon :name="f.icon" />
              </span>
              <h3 class="mt-4 text-lg font-semibold">{{ f.title }}</h3>
              <p class="mt-1.5 leading-relaxed text-muted">{{ f.text }}</p>
            </li>
          </ul>
        </div>
      </section>

      <!-- ABOUT -->
      <section id="about" class="section bg-paper">
        <div class="container-page grid items-start gap-12 lg:grid-cols-[2fr_3fr] lg:gap-20">
          <div v-reveal class="reveal mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-3xl bg-ink lg:mx-0 lg:max-w-none">
            <!-- TODO: replace with Geff's photo, e.g. <img src="/geff.jpg" alt="Geff Meridores" class="size-full object-cover"> -->
            <div class="stripes grid size-full place-items-center bg-linear-to-b from-ink-2 to-ink text-center">
              <div>
                <p class="font-display text-6xl font-semibold text-white/85">GM</p>
                <p class="mt-2 text-sm text-sky">Photo coming soon</p>
              </div>
            </div>
          </div>
          <div v-reveal class="reveal" style="transition-delay: 100ms">
            <p class="eyebrow text-muted">About</p>
            <h2 class="mt-3 text-4xl font-semibold sm:text-5xl">Meet Geff</h2>
            <div class="mt-6 space-y-4 text-lg leading-relaxed text-muted">
              <p v-for="para in profile.bio" :key="para">{{ para }}</p>
            </div>
            <h3 class="mt-12 text-xl font-semibold">How I work</h3>
            <ul class="mt-6 grid gap-x-8 gap-y-6 sm:grid-cols-2">
              <li v-for="a in profile.approach" :key="a.title" class="flex items-start gap-3">
                <span class="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-ink text-sun">
                  <svg class="size-3.5" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2.2" aria-hidden="true"><path d="M3 8.5l3 3 7-7" /></svg>
                </span>
                <div>
                  <p class="font-semibold">{{ a.title }}</p>
                  <p class="mt-1 leading-relaxed text-muted">{{ a.text }}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <!-- REVIEWS: dashed cards are placeholders; use real reviews only -->
      <section class="section bg-white">
        <div class="container-page">
          <h2 v-reveal class="reveal text-4xl font-semibold sm:text-5xl">What brands say</h2>
          <div class="mt-12 grid gap-6 md:grid-cols-2">
            <figure
              v-for="(r, i) in profile.reviews"
              :key="i"
              v-reveal
              class="reveal rounded-3xl border border-dashed border-line bg-paper p-8 sm:p-10"
              :style="{ transitionDelay: `${i * 120}ms` }"
            >
              <blockquote class="font-display text-xl leading-snug sm:text-2xl">“{{ r.quote }}”</blockquote>
              <figcaption class="mt-6 text-sm">
                <span class="font-semibold">{{ r.name }}</span><span class="text-muted">, {{ r.brand }}</span>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <!-- CONTACT -->
      <section id="contact" class="bg-ink py-24 text-white sm:py-32">
        <div v-reveal class="reveal container-page text-center">
          <h2 class="mx-auto max-w-3xl text-4xl font-semibold leading-[1.1] sm:text-6xl">Let's make something people actually watch.</h2>
          <p class="mx-auto mt-6 max-w-md text-lg leading-relaxed text-white/75">
            Tell me about your product, and I'll reply with video ideas.
          </p>
          <a :href="`mailto:${profile.email}`" class="btn-sun mt-10">Email Geff</a>
          <p class="mt-4 text-sm text-sky">{{ profile.email }}</p>
          <ul class="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-2">
            <li v-for="s in profile.socials" :key="s.label">
              <a :href="s.href" target="_blank" rel="noopener" class="link-underline inline-block py-1 text-white/80 hover:text-white">{{ s.label }}</a>
            </li>
          </ul>
        </div>
      </section>
    </main>

    <footer class="border-t border-ink-3 bg-ink">
      <div class="container-page flex flex-col gap-2 py-6 text-xs text-white/60 sm:flex-row sm:items-center sm:justify-between">
        <p>&copy; {{ year }} {{ profile.name }}</p>
        <a href="#top" class="link-underline self-start py-1 hover:text-white sm:self-auto">Back to top</a>
      </div>
    </footer>
  </div>
</template>
