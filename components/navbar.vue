<template>
  <div class="fixed w-full z-[999] navbar md:py-4 py-2 lg:px-20 md:px-14 px-7 gap-5 flex items-center justify-end gap-x-12">
    <div class="flex-1" />
    <div class="flex gap-x-12 items-center">
      <a href="/" class="hidden lg:flex link">Quiz Master</a>
      <!-- <a href="/laser-game" class="hidden lg:flex link">Laser Game</a>
      <a href="/bowling" class="hidden lg:flex link">Bowling</a>
      <a href="/quizz-master" class="hidden lg:flex link">Quizz Master</a> -->
      <!-- <a href="/our-place" class="hidden lg:flex link">Nos Centres</a> -->
      <router-link to="/contact">
        <Button text="Contact" :onClick="() => {}" className="yellow-button !font-medium px-8 !h-[40px]" />
      </router-link>
    </div>
  </div>
</template>

<script>
import Button from "./button/Button.vue";

</script>
