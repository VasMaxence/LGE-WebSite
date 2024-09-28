<template>
  <div>
    <!-- Bouton hamburger -->
    <button @click="toggleMenu" class="md:hidden">
      <!-- Condition Vue.js pour changer l'icône -->
      <svg v-if="!isOpen" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
      </svg>
      <svg v-else class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>

    <!-- Menu déroulant -->
    <div v-if="isOpen" class="nav-menu-transition w-[100vw] absolute left-0 bg-white shadow-md flex flex-col px-4 py-6">
      <NuxtLink v-for="link in links" :key="link.name" :to="link.to" :class="{ 'nav-active': isActive(link.to) }" class="px-0 py-2">
        {{ $t(link.name) }}
      </NuxtLink>
    </div>
  </div>
</template>

<script>

</script>
