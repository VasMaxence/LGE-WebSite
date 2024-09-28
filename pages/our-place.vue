<template>
  <div class="w-full relative overflow-x-hidden">
    <Navbar />

    <!-- Main Image -->
    <div class="hidden sm:flex">
      <img src="@/static/images/main_home.png" alt="Loisir 06 Main Image" class="absolute top-0 z-0 w-[100wh]" width="100%" />
    </div>

    <div class="w-full h-[85vh] hidden lg:flex relative items-center justify-center">
      <div class="absolute top-[50%] z-0 transform right-1/2 translate-x-1/2 -translate-y-1/2 z-0 w-[300px] h-[300px] rounded-full blue blured-box" />
      <div class="relative flex flex-col items-center justify-center h-full z-[50]">
        <!-- <h2 class="main-subtitle">Loisir 06</h2> -->
        <h1 class="w-1/2 main-title text-center leading-[70px]">Un centre proche de vous</h1>
      </div>
    </div>

    <div class="w-full h-[50vh] hidden sm:flex lg:hidden relative items-center justify-center">
      <div class="absolute top-[50%] z-0 transform right-1/2 translate-x-1/2 -translate-y-1/2 z-0 w-[150px] h-[150px] rounded-full blue sm-blured-box" />
      <div class="relative flex flex-row items-center justify-center h-full z-[50]">
        <h1 class="w-2/3 sm-main-title text-center">Un centre proche de vous</h1>
      </div>
    </div>

    <div class="w-full h-[50vh] flex sm:hidden relative items-center justify-center">
      <div class="absolute top-[50%] z-0 transform right-1/2 translate-x-1/2 -translate-y-1/2 z-0 w-[150px] h-[150px] rounded-full blue sm-blured-box" />
      <div class="absolute top-0 z-0 transform right-0 z-0 w-[100px] h-[100px] rounded-full red sm-blured-box" />
      <div class="absolute top-[50%] z-0 transform left-0 z-0 w-[120px] h-[120px] rounded-full yellow sm-blured-box" />
      <div class="relative flex flex-row items-center justify-center h-full z-[50]">
        <h1 class="w-2/3 sm-main-title text-center">Un centre proche de vous</h1>
      </div>
    </div>

    <!-- Center list -->
    <div class="hidden xl:flex xl:px-24">
      <div class="relative w-full items-center justify-center">
        <WhiteCard className="relative z-[50]">
          <div class="w-full flex flex-col">
            <div class="w-full grid grid-cols-[50%_8%_42%]">
              <div class="flex flex-col">
                <h1 class="card-title">Laser Game Nice Lingostière</h1>
                <div class="py-1" />
                <h2 class="card-subtitle">604 Bd du Mercantour, 06200 Nice</h2>
                <div class="py-2" />
                <a href="tel:+330492291900" class="card-body underline">04 92 29 19 00</a>
                <a href="mailto:lgnice@laser-game-nice.fr" class="card-body underline">lgnice@laser-game-nice.fr</a>
                <div class="py-3" />
                <div class="w-full grid grid-cols-2 gap-x-12">
                  <div class="w-full flex flex-col gap-x-1">
                    <h2 class="card-subtitle">Nos horaires (hors vacances)</h2>
                    <div class="w-full flex justify-between">
                      <p class="card-body">Lundi à Vendredi</p>
                      <p class="card-body">13h - 23h</p>
                    </div>
                    <div class="w-full flex justify-between">
                      <p class="card-body">Samedi</p>
                      <p class="card-body">10h - 23h</p>
                    </div>
                    <div class="w-full flex justify-between">
                      <p class="card-body">Dimance</p>
                      <p class="card-body">10h - 20h</p>
                    </div>
                  </div>
                  <div class="w-full flex flex-col gap-x-1">
                    <h2 class="card-subtitle">Nos horaires (vacances)</h2>
                    <div class="w-full flex justify-between">
                      <p class="card-body">Lundi à Samedi</p>
                      <p class="card-body">10h - 23h</p>
                    </div>
                    <div class="w-full flex justify-between">
                      <p class="card-body">Dimance</p>
                      <p class="card-body">10h - 20h</p>
                    </div>
                  </div>
                </div>
              </div>
              <div />
              <div class="w-full flex items-center justify-end">
                <img alt="laser-game-img-1" src="@/static/images/LGE/centre_nice_big.png" class="rounded-lg" />
              </div>
            </div>
            <div class="py-5" />
            <h2 class="card-subtitle">Activités disponibles</h2>
            <div class="py-1" />
            <div class="w-full grid grid-cols-3 justify-start gap-x-4">
              <WhiteCard class="w-full flex flex-col flex-grow">
                <h1 class="white-title robot">Laser Game</h1>
                <p class="white-body robot">Visez l'émotion 100% Laser Game.</p>
                <div class="py-3 h-full" />
                <div class="grid grid-cols-2 gap-x-8 items-center">
                  <Button
                    text="Réserver"
                    :onClick="
                      () => {
                        onClickReservations('Nice');
                      }
                    "
                    className="red-button"
                  />
                  <a href="/laser-game" class="link">En savoir plus</a>
                </div>
                <div class="py-4" />
                <div class="grid grid-cols-2 gap-x-3">
                  <img alt="laser-game-img-1" src="@/static/images/LGE/1.png" class="rounded-lg" />
                  <img alt="laser-game-img-2" src="@/static/images/LGE/2.png" class="rounded-lg" />
                </div>
              </WhiteCard>
            </div>
          </div>
        </WhiteCard>
      </div>
    </div>

    <div class="flex xl:hidden px-8 sm:px-12 lg:px-16">
      <div class="relative w-full items-center justify-center">
        <WhiteCard className="relative z-[50]">
          <div class="w-full flex flex-col">
            <div class="w-full">
              <div class="flex flex-col">
                <h1 class="card-title">Laser Game Nice Lingostière</h1>
                <div class="py-1" />
                <h2 class="card-subtitle">604 Bd du Mercantour, 06200 Nice</h2>
                <div class="py-2" />
                <a href="tel:+330492291900" class="card-body underline">04 92 29 19 00</a>
                <a href="mailto:lgnice@laser-game-nice.fr" class="card-body underline">lgnice@laser-game-nice.fr</a>
                <div class="py-3" />
                <div class="w-full grid grid-cols-2 gap-x-12">
                  <div class="w-full flex flex-col gap-x-1">
                    <h2 class="card-subtitle">Nos horaires (hors vacances)</h2>
                    <div class="w-full flex justify-between">
                      <p class="card-body">Lundi à Vendredi</p>
                      <p class="card-body">13h - 23h</p>
                    </div>
                    <div class="w-full flex justify-between">
                      <p class="card-body">Samedi</p>
                      <p class="card-body">10h - 23h</p>
                    </div>
                    <div class="w-full flex justify-between">
                      <p class="card-body">Dimance</p>
                      <p class="card-body">10h - 20h</p>
                    </div>
                  </div>
                  <div class="w-full flex flex-col gap-x-1">
                    <h2 class="card-subtitle">Nos horaires (vacances)</h2>
                    <div class="w-full flex justify-between">
                      <p class="card-body">Lundi à Samedi</p>
                      <p class="card-body">10h - 23h</p>
                    </div>
                    <div class="w-full flex justify-between">
                      <p class="card-body">Dimance</p>
                      <p class="card-body">10h - 20h</p>
                    </div>
                  </div>
                </div>
              </div>
              <div />
            </div>
            <div class="py-5" />
            <div class="flex flex-row justify-end gap-x-3">
              <Button
                text="Nous appeler"
                :onClick="
                  () => {
                    callCenter('0492291900');
                  }
                "
                className="px-8 !h-[60px] red-button"
              />
              <WhiteCard className="!px-4 !py-4 !rounded-md flex items-center justify-center w-[60px]">
                <svg width="18" height="25" viewBox="0 0 18 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 23.5V6.5H16" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M11 1L17 6.5L11 12" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </WhiteCard>
            </div>
          </div>
        </WhiteCard>
      </div>
    </div>

    <div class="py-4 md:py-8 lg:py-12" />

    <div class="hidden xl:flex xl:px-24">
      <div class="relative w-full items-center justify-center">
        <WhiteCard className="relative z-[50]">
          <div class="w-full flex flex-col">
            <div class="w-full grid grid-cols-[50%_8%_42%]">
              <div class="flex flex-col">
                <h1 class="card-title">Laser & Bowling Mougins</h1>
                <div class="py-1" />
                <h2 class="card-subtitle">561 Rte de la Roquette, 06250 Mougins</h2>
                <div class="py-2" />
                <a href="tel:+330492281653" class="card-body underline">04 92 28 16 53</a>
                <a href="mailto:lgemougins@gmail.com" class="card-body underline">lgemougins@gmail.com</a>
                <div class="py-3" />
                <div class="w-full grid grid-cols-2 gap-x-12">
                  <div class="w-full flex flex-col gap-x-1">
                    <h2 class="card-subtitle">Nos horaires (hors vacances)</h2>
                    <div class="w-full flex justify-between">
                      <p class="card-body">Lundi à Vendredi</p>
                      <p class="card-body">13h - 23h</p>
                    </div>
                    <div class="w-full flex justify-between">
                      <p class="card-body">Samedi</p>
                      <p class="card-body">10h - 23h</p>
                    </div>
                    <div class="w-full flex justify-between">
                      <p class="card-body">Dimance</p>
                      <p class="card-body">10h - 20h</p>
                    </div>
                  </div>
                  <div class="w-full flex flex-col gap-x-1">
                    <h2 class="card-subtitle">Nos horaires (vacances)</h2>
                    <div class="w-full flex justify-between">
                      <p class="card-body">Lundi à Samedi</p>
                      <p class="card-body">10h - 23h</p>
                    </div>
                    <div class="w-full flex justify-between">
                      <p class="card-body">Dimance</p>
                      <p class="card-body">10h - 20h</p>
                    </div>
                  </div>
                </div>
              </div>
              <div />
              <div class="w-full flex items-center justify-end">
                <img alt="laser-game-img-1" src="@/static/images/LGE/centre_nice_big.png" class="rounded-lg" />
              </div>
            </div>
            <div class="py-5" />
            <h2 class="card-subtitle">Activités disponibles</h2>
            <div class="py-1" />
            <div class="w-full grid grid-cols-3 justify-start gap-x-4">
              <WhiteCard class="w-full flex flex-col flex-grow">
                <h1 class="white-title robot">Laser Game</h1>
                <p class="white-body robot">Visez l'émotion 100% Laser Game.</p>
                <div class="py-3 h-full" />
                <div class="grid grid-cols-2 gap-x-8 items-center">
                  <Button
                    text="Réserver"
                    :onClick="
                      () => {
                        onClickReservations('Mougins');
                      }
                    "
                    className="red-button"
                  />
                  <a href="/laser-game" class="link">En savoir plus</a>
                </div>
                <div class="py-4" />
                <div class="grid grid-cols-2 gap-x-3">
                  <img alt="laser-game-img-1" src="@/static/images/LGE/1.png" class="rounded-lg" />
                  <img alt="laser-game-img-2" src="@/static/images/LGE/2.png" class="rounded-lg" />
                </div>
              </WhiteCard>
              <WhiteCard class="w-full flex flex-col flex-grow">
                <h1 class="white-title robot">Bowling</h1>
                <p class="white-body robot">Visez l'émotion 100% Bowling.</p>
                <div class="py-3 h-full" />
                <div class="grid grid-cols-2 gap-x-8 items-center">
                  <Button
                    text="Réserver"
                    :onClick="
                      () => {
                        onClickReservations('Mougins');
                      }
                    "
                    className="blue-button"
                  />
                  <a href="/bowling" class="link">En savoir plus</a>
                </div>
                <div class="py-4" />
                <div class="grid grid-cols-2 gap-x-3">
                  <img alt="bowling-img-1" src="@/static/images/Bowling/1.png" class="rounded-lg" />
                  <img alt="bowling-img-2" src="@/static/images/Bowling/2.png" class="rounded-lg" />
                </div>
              </WhiteCard>
              <WhiteCard class="w-full flex flex-col flex-grow">
                <h1 class="white-title robot">Quizz Master</h1>
                <p class="white-body robot">Venez vous éclatez entre amis ou en famille.</p>
                <div class="py-3 h-full" />
                <div class="grid grid-cols-2 gap-x-8 items-center">
                  <Button
                    text="Réserver"
                    :onClick="
                      () => {
                        onClickReservations('Mougins');
                      }
                    "
                    className="yellow-button"
                  />
                  <a href="/quizz-master" class="link">En savoir plus</a>
                </div>
                <div class="py-4" />
                <div class="grid grid-cols-2 gap-x-3">
                  <img alt="quizz-master-img-1" src="@/static/images/QuizzMaster/1.png" class="rounded-lg" />
                  <img alt="quizz-master-img-2" src="@/static/images/QuizzMaster/2.png" class="rounded-lg" />
                </div>
              </WhiteCard>
            </div>
            <div class="py-1" />
            <div class="w-full grid grid-cols-3 justify-start gap-x-4">
              <WhiteCard class="flex-1 flex flex-col flex-grow">
                <h1 class="white-title robot">Billard</h1>
                <p class="white-body robot">Visez l'émotion 100% Billard.</p>
                <div class="py-3 h-full" />
                <div class="grid grid-cols-2 gap-x-8 items-center">
                  <Button
                    text="Réserver"
                    :onClick="
                      () => {
                        callCenter('0492281653');
                      }
                    "
                    className="green-button"
                  />
                  <a href="/billard" class="link">En savoir plus</a>
                </div>
                <div class="py-4" />
                <div class="grid grid-cols-2 gap-x-3">
                  <img alt="billard-img-1" src="@/static/images/Billard/1.png" class="rounded-lg" />
                  <img alt="billard-img-2" src="@/static/images/Billard/2.png" class="rounded-lg" />
                </div>
              </WhiteCard>
            </div>
          </div>
        </WhiteCard>
      </div>
    </div>

    <div class="flex xl:hidden px-8 sm:px-12 lg:px-16">
      <div class="relative w-full items-center justify-center">
        <WhiteCard className="relative z-[50]">
          <div class="w-full flex flex-col">
            <div class="w-full">
              <div class="flex flex-col">
                <h1 class="card-title">Laser & Bowling Mougins</h1>
                <div class="py-1" />
                <h2 class="card-subtitle">561 Rte de la Roquette, 06250 Mougins</h2>
                <div class="py-2" />
                <a href="tel:+330492281653" class="card-body underline">04 92 28 16 53</a>
                <a href="mailto:lgemougins@gmail.com" class="card-body underline">lgemougins@gmail.com</a>
                <div class="py-3" />
                <div class="w-full grid grid-cols-2 gap-x-12">
                  <div class="w-full flex flex-col gap-x-1">
                    <h2 class="card-subtitle">Nos horaires (hors vacances)</h2>
                    <div class="w-full flex justify-between">
                      <p class="card-body">Lundi à Vendredi</p>
                      <p class="card-body">13h - 23h</p>
                    </div>
                    <div class="w-full flex justify-between">
                      <p class="card-body">Samedi</p>
                      <p class="card-body">10h - 23h</p>
                    </div>
                    <div class="w-full flex justify-between">
                      <p class="card-body">Dimance</p>
                      <p class="card-body">10h - 20h</p>
                    </div>
                  </div>
                  <div class="w-full flex flex-col gap-x-1">
                    <h2 class="card-subtitle">Nos horaires (vacances)</h2>
                    <div class="w-full flex justify-between">
                      <p class="card-body">Lundi à Samedi</p>
                      <p class="card-body">10h - 23h</p>
                    </div>
                    <div class="w-full flex justify-between">
                      <p class="card-body">Dimance</p>
                      <p class="card-body">10h - 20h</p>
                    </div>
                  </div>
                </div>
              </div>
              <div />
            </div>
            <div class="py-5" />
            <div class="flex flex-row justify-end gap-x-3">
              <Button text="Nous appeler" :onClick="() => {}" className="px-8 !h-[60px] red-button" />
              <WhiteCard className="!px-4 !py-4 !rounded-md flex items-center justify-center w-[60px]">
                <svg width="18" height="25" viewBox="0 0 18 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 23.5V6.5H16" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M11 1L17 6.5L11 12" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </WhiteCard>
            </div>
          </div>
        </WhiteCard>
      </div>
    </div>

    <div class="py-20" />

    <Footer blurColorClassName="blue-important" />
  </div>
</template>

<script setup>
import Button from "@/components/button/Button.vue";
import WhiteCard from "~/components/card/WhiteCard.vue";
import Footer from "~/components/Footer.vue";
import Navbar from "~/components/navbar.vue";

const onClickReservations = (center) => {
  if (center == "Mougins") {
    window.open("https://lasergame-evolution.resasoft.fr/FR/Centre-v2.awp?P1=141", "_blank");
  } else {
    window.open("https://lasergame-evolution.resasoft.fr/FR/Centre-v2.awp?P1=33", "_blank");
  }
};

const callCenter = (phone) => {
  window.open(`tel:${phone}`, "_blank");
};
</script>
