<!--
  One work sample: a vertical video in a rounded frame, with its style, brand, and language.
  Real videos load only when played (preload="none"), so the page stays fast.
-->
<script setup lang="ts">
import type { Video } from '~/data/videos'

defineProps<{ video: Video }>()
</script>

<template>
  <figure>
    <div class="relative aspect-[9/16] overflow-hidden rounded-[1.5rem] bg-ink">
      <video
        v-if="video.src"
        :src="video.src"
        :poster="video.poster"
        controls
        playsinline
        preload="none"
        class="size-full object-cover"
      />
      <div v-else class="stripes flex size-full flex-col items-center justify-center bg-linear-to-b from-ink-2 to-ink text-center">
        <span class="grid size-12 place-items-center rounded-full border border-white/25 text-white/85" aria-hidden="true">
          <svg class="ml-0.5 size-4" viewBox="0 0 16 16" fill="currentColor"><path d="M4 2.5v11l9-5.5-9-5.5z" /></svg>
        </span>
        <p class="mt-3 text-xs text-sky">Video coming soon</p>
      </div>
      <span class="absolute left-3 top-3 rounded-full bg-white px-2.5 py-1 text-[0.6875rem] font-semibold leading-none text-ink">
        {{ video.language }}
      </span>
    </div>
    <figcaption class="mt-3">
      <p class="font-semibold text-ink">{{ video.style }}</p>
      <p class="text-sm text-muted">{{ video.brand }}</p>
    </figcaption>
  </figure>
</template>
