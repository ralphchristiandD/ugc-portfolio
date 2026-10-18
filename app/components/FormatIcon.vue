<!-- Simple line icons for the "What I make" formats -->
<script setup lang="ts">
defineProps<{ name: 'box' | 'hand' | 'mic' | 'face' | 'list' | 'spark' }>()
</script>

<template>
  <svg class="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <template v-if="name === 'box'">
      <path d="M3.5 8 12 4l8.5 4v8L12 20l-8.5-4V8z" /><path d="M3.5 8 12 12l8.5-4M12 12v8" />
    </template>
    <template v-else-if="name === 'hand'">
      <path d="M9 11V5.5a1.5 1.5 0 0 1 3 0V11m0-1.5a1.5 1.5 0 0 1 3 0V12m0-1a1.5 1.5 0 0 1 3 0v3.5A5.5 5.5 0 0 1 12.5 20h-1a5 5 0 0 1-4.1-2.1L4.6 13.8a1.5 1.5 0 0 1 2.3-1.9L9 14" />
    </template>
    <template v-else-if="name === 'mic'">
      <rect x="9" y="3" width="6" height="11" rx="3" /><path d="M5.5 11a6.5 6.5 0 0 0 13 0M12 17.5V21" />
    </template>
    <template v-else-if="name === 'face'">
      <circle cx="12" cy="12" r="8.5" /><path d="M8.5 14a4.5 4.5 0 0 0 7 0M9.5 9.5h.01M14.5 9.5h.01" />
    </template>
    <template v-else-if="name === 'list'">
      <path d="M9 6h11M9 12h11M9 18h11" /><path d="M4 6h.01M4 12h.01M4 18h.01" />
    </template>
    <template v-else>
      <path d="M12 3.5 13.8 9l5.7 1.5-5.7 1.5L12 17.5 10.2 12 4.5 10.5 10.2 9z" /><path d="M18.5 16.5l.7 2 2 .7-2 .7-.7 2-.7-2-2-.7 2-.7z" />
    </template>
  </svg>
</template>
