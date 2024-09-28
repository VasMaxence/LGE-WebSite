<template>
  <div class="w-full relative overflow-x-hidden">
    <Navbar />

    <!-- Main Image -->
    <div class="hidden sm:flex">
      <img src="@/static/images/main_home.png" alt="Loisir 06 Main Image" class="absolute top-0 z-0 w-[100wh]" width="100%" />
    </div>

    <div class="w-full h-[85vh] hidden lg:flex relative items-center justify-center">
      <div class="absolute top-[50%] z-0 transform right-1/2 translate-x-1/2 -translate-y-1/2 z-0 w-[300px] h-[300px] rounded-full red blured-box" />
      <div class="relative flex flex-col items-center justify-center h-full z-[50]">
        <h1 class="w-1/2 main-title text-center leading-[70px]">Trouvez nos centres et Réservez</h1>
      </div>
    </div>

    <div class="w-full h-[50vh] hidden sm:flex lg:hidden relative items-center justify-center">
      <div class="absolute top-[50%] z-0 transform right-1/2 translate-x-1/2 -translate-y-1/2 z-0 w-[150px] h-[150px] rounded-full red sm-blured-box" />
      <div class="relative flex flex-row items-center justify-center h-full z-[50]">
        <h1 class="w-2/3 sm-main-title text-center">Trouvez nos centres et Réservez</h1>
      </div>
    </div>

    <div class="w-full h-[50vh] flex sm:hidden relative items-center justify-center">
      <div class="absolute top-[50%] z-0 transform right-1/2 translate-x-1/2 -translate-y-1/2 z-0 w-[150px] h-[150px] rounded-full red sm-blured-box" />
      <div class="absolute top-0 z-0 transform right-0 z-0 w-[100px] h-[100px] rounded-full blue sm-blured-box" />
      <div class="absolute top-[50%] z-0 transform left-0 z-0 w-[120px] h-[120px] rounded-full yellow sm-blured-box" />
      <div class="relative flex flex-row items-center justify-center h-full z-[50]">
        <h1 class="w-2/3 sm-main-title text-center">Trouvez nos centres et Réservez</h1>
      </div>
    </div>

    <div class="py-12 sm:py-16 xl:py-28" />
    <div class="py-12 sm:py-16 xl:py-28" />

    <Separator className="z-[100]">
      <div class="flex flex-col items-center gap-y-2">
        <h1 class="section-title text-center">Nos centres</h1>
        <p class="section-body text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porta nibh a bibendum tincidunt.</p>
      </div>
    </Separator>

    <div class="py-12 sm:py-16" />

    <div class="px-12 md:px-24 xl:px-40">
      <div class="w-full flex flex-wrap gap-x-3 gap-y-3">
        <WhiteCard class="w-full md:!w-[310px] flex flex-col justify-center">
          <img alt="event-img-1" src="@/static/images/LGE/centre_nice.png" class="rounded-lg" />
          <div class="py-2" />
          <h1 class="card-subtitle leading-7">Nice Lingostière</h1>
          <div class="py-1" />
          <p class="card-light-body">Lorem Ipsum, Lorem Ipsum, Lorem Ipsum,</p>
          <div class="py-2" />
          <div class="flex flex-row gap-x-3">
            <Button
              text="Réserver"
              :onClick="
                () => {
                  onClickReservations('nice');
                }
              "
              className="px-6 !h-[60px] red-button"
            />
            <button
              @click="
                () => {
                  onClickMap('Nice');
                }
              "
            >
              <WhiteCard className="!px-4 !py-4 !rounded-md flex items-center justify-center w-[60px]">
                <svg width="18" height="25" viewBox="0 0 18 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 23.5V6.5H16" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M11 1L17 6.5L11 12" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </WhiteCard>
            </button>
          </div>
        </WhiteCard>
        <WhiteCard class="w-full md:!w-[310px] flex flex-col justify-center">
          <img alt="event-img-1" src="@/static/images/LGE/centre_mougins.png" class="rounded-lg" />
          <div class="py-2" />
          <h1 class="card-subtitle leading-7">Mougins</h1>
          <div class="py-1" />
          <p class="card-light-body">Lorem Ipsum, Lorem Ipsum, Lorem Ipsum,</p>
          <div class="py-2" />
          <div class="flex flex-row gap-x-3">
            <Button
              text="Réserver"
              :onClick="
                () => {
                  onClickReservations('nice');
                }
              "
              className="px-6 !h-[60px] red-button"
            />
            <button
              @click="
                () => {
                  onClickMap('Mougins');
                }
              "
            >
              <WhiteCard className="!px-4 !py-4 !rounded-md flex items-center justify-center w-[60px]">
                <svg width="18" height="25" viewBox="0 0 18 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 23.5V6.5H16" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M11 1L17 6.5L11 12" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </WhiteCard>
            </button>
          </div>
        </WhiteCard>
      </div>
    </div>

    <div class="py-20" />

    <Footer blurColorClassName="red-important" />
  </div>
</template>

<script setup>
import Button from "@/components/button/Button.vue";
import WhiteCard from "~/components/card/WhiteCard.vue";
import Separator from "~/components/separator.vue";
import Footer from "~/components/Footer.vue";
import Navbar from "~/components/navbar.vue";

const onClickReservations = (center) => {
  if (center == "Mougins") {
    window.open("https://lasergame-evolution.resasoft.fr/FR/Centre-v2.awp?P1=141", "_blank");
  } else {
    window.open("https://lasergame-evolution.resasoft.fr/FR/Centre-v2.awp?P1=33", "_blank");
  }
};

const onClickMap = (center) => {
  if (center == "Mougins") {
    window.open("https://www.google.com/maps/dir//Laser+Game+Evolution+Bowling+Mougins,+Route+de+la+Roquette,+Mougins/@43.6128389,6.9304656,13z/", "_blank");
  } else {
    window.open("https://www.google.com/maps/dir//604+Bd+du+Mercantour,+06200+Nice/@43.7265743,7.1069427,12z/", "_blank");
  }
};
</script>
