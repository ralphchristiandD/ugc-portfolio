<!--
  Hero visual: a phone showing Geff's intro video, with his photo card behind it.
  PLACEHOLDER: shows "coming soon" panels until `introVideo` / `photo` are set.
-->
<script setup lang="ts">
defineProps<{ introVideo?: string, introPoster?: string, photo?: string }>()
</script>

<template>
  <div class="relative mx-auto w-[12rem] sm:w-[15.5rem]">
    <!-- Photo card, tucked behind the phone (desktop only) -->
    <div class="absolute -left-36 top-14 hidden aspect-[4/5] w-48 overflow-hidden rounded-3xl bg-ink-2 ring-1 ring-ink-3 lg:block">
      <img v-if="photo" :src="photo" alt="Geff Meridores" class="size-full object-cover">
      <!-- pr-12 keeps the label in the part of the card the phone doesn't cover -->
      <div v-else class="stripes grid size-full place-items-center pr-12 text-center">
        <div>
          <p class="font-display text-4xl font-semibold text-white/80">GM</p>
          <p class="mt-1 text-xs text-sky">Photo coming soon</p>
        </div>
      </div>
    </div>

    <!-- Phone -->
    <div class="relative aspect-[9/19] overflow-hidden rounded-[2.5rem] border-[9px] border-ink-2 bg-ink shadow-[0_40px_80px_-30px_rgb(0_0_0/0.6)] ring-1 ring-ink-3">
      <span class="absolute left-1/2 top-2.5 z-10 h-5 w-20 -translate-x-1/2 rounded-full bg-ink-2" aria-hidden="true" />
      <video
        v-if="introVideo"
        :src="introVideo"
        :poster="introPoster"
        controls
        playsinline
        preload="none"
        class="size-full object-cover"
      />
      <div v-else class="stripes flex size-full flex-col items-center justify-center bg-linear-to-b from-ink-3 to-ink-2 text-center">
        <span class="grid size-14 place-items-center rounded-full bg-sun text-ink" aria-hidden="true">
          <svg class="ml-1 size-5" viewBox="0 0 16 16" fill="currentColor"><path d="M4 2.5v11l9-5.5-9-5.5z" /></svg>
        </span>
        <p class="mt-4 font-display text-lg font-semibold text-white">Intro video</p>
        <p class="mt-1 text-xs text-sky">Coming soon</p>
      </div>
    </div>
  </div>
</template>
