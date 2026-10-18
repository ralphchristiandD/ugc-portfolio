<!-- Small line icons for social links (matches the label in profile.socials) -->
<script setup lang="ts">
defineProps<{ name: string }>()
</script>

<template>
  <svg class="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <template v-if="name === 'Instagram'">
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" /><circle cx="12" cy="12" r="4" /><path d="M17.2 6.8h.01" />
    </template>
    <template v-else-if="name === 'TikTok'">
      <path d="M14 4v10.5a3.5 3.5 0 1 1-3.5-3.5" /><path d="M14 4c.5 2.6 2.3 4.1 4.8 4.3" />
    </template>
    <template v-else-if="name === 'YouTube'">
      <rect x="2.5" y="5.5" width="19" height="13" rx="4" /><path d="M10.5 9.5v5l4.3-2.5-4.3-2.5z" fill="currentColor" stroke="none" />
    </template>
    <template v-else-if="name === 'LinkedIn'">
      <rect x="3.5" y="3.5" width="17" height="17" rx="3" /><path d="M8 10.5v6M8 7.6v.01M12 16.5v-6M12 13.5a2.5 2.5 0 0 1 5 0v3" />
    </template>
    <template v-else>
      <circle cx="12" cy="12" r="8.5" />
    </template>
  </svg>
</template>
