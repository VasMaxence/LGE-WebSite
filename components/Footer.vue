<template>
  <footer class="w-full relative footer">
    <div
      :class="
        blurColorClassName
          ? 'absolute bot-0 transform right-1/2 translate-x-1/2 z-0 w-[300px] h-[300px] rounded-full yellow blured-box '
          : 'absolute bot-0 transform right-1/2 translate-x-1/2 z-0 w-[300px] h-[300px] rounded-full yellow blured-box'
      "
    />
    <div class="w-full h-full px-12 py-8 rounded-t-3xl bg-white-low border-low-white border border-[0.5px] backdrop-blur-2xl flex flex-col items-center">
      <h1 class="card-title text-center">C'est l'heure de vous éclater</h1>
      <div class="py-6" />
      <div class="px-8 md:px-16 xl:px-24 w-full">
        <div class="w-full grid grid-cols-[50%_50%] xl:grid-cols-[20%_20%_20%_40%]">
          <div class="flex flex-col">
            <h1 class="title">Nos centres</h1>
            <a href="/" class="link py-2">Nos activités</a>
            <!-- <a href="/laser-game" class="link py-2">Laser Game</a>
            <a href="/bowling" class="link py-2">Bowling</a> -->
            <a href="/" class="link py-2">Quiz Master</a>
          </div>
          <div class="flex flex-col">
            <h1 class="title">Contactez-nous</h1>
            <a href="/contact" class="link py-2">Contact</a>
          </div>
          <div />
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
defineProps({
  blurColorClassName: {
    type: String,
    required: false,
  },
});
</script>
