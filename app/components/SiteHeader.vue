<script setup lang="ts">
import { profile } from '~/data/profile'

const links = [
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]
</script>

<template>
  <header class="sticky top-0 z-40 border-b border-ink-3/60 bg-ink/95 backdrop-blur">
    <nav class="container-page flex h-16 items-center justify-between sm:h-18" aria-label="Main">
      <a href="#top" class="font-display text-xl font-semibold text-white">
        {{ profile.brand }}<span class="text-sun">.</span>
      </a>
      <div class="flex items-center gap-7">
        <a
          v-for="link in links"
          :key="link.href"
          :href="link.href"
          class="link-underline hidden py-1 text-[0.9375rem] font-medium text-white/75 transition-colors hover:text-white sm:inline-block"
        >
          {{ link.label }}
        </a>
        <a :href="`mailto:${profile.email}`" class="btn-sun !min-h-10 !px-5 !py-2">Email me</a>
      </div>
    </nav>
  </header>
</template>
