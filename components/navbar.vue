<template>
  <div class="hidden lg:fixed w-full z-[999] navbar md:py-4 py-2 lg:px-20 md:px-14 px-7 gap-5 flex items-center justify-end gap-x-12">
    <div class="flex-1" />
    <div class="hidden lg:flex gap-x-12 items-center">
      <a href="/" class="link">Acceuil</a>
      <a href="/laser-game" class="link">Laser Game</a>
      <a href="/bowling" class="link">Bowling</a>
      <a href="/quizz-master" class="link">Quizz Master</a>
      <a href="/our-place" class="link">Nos Centres</a>
      <router-link to="/contact">
        <Button text="Contact" :onClick="() => {}" className="blue-button px-8 !h-[40px]" />
      </router-link>
    </div>
  </div>
</template>

<script>
import Button from "./button/Button.vue";

</script>
