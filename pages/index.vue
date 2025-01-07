<template>
  <div class="w-full relative overflow-x-hidden">
    <Navbar />

    <!-- Main Image -->
    <div class="hidden sm:flex">
      <img src="@/static/images/main_home.png" alt="Loisir 06 Main Image" class="absolute top-0 z-0 w-[100wh]" width="100%" />
    </div>

    <div class="w-full h-[85vh] hidden lg:flex relative items-center justify-center">
      <div class="absolute top-[50%] z-0 transform right-1/2 translate-x-1/2 -translate-y-1/2 z-0 w-[300px] h-[300px] rounded-full yellow blured-box" />
      <div class="relative flex flex-col items-center justify-center h-full z-[50]">
        <h1 class="w-1/2 main-title text-center leading-[70px]">Affrontez familles et amis chez QuizMaster:<br />Fous rires garantis !</h1>
      </div>
    </div>

    <div class="w-full h-[50vh] hidden sm:flex lg:hidden relative items-center justify-center pt-20">
      <div class="absolute top-[50%] z-0 transform right-1/2 translate-x-1/2 -translate-y-1/2 z-0 w-[150px] h-[150px] rounded-full yellow sm-blured-box" />
      <div class="relative flex flex-row items-center justify-center h-full z-[50]">
        <h1 class="w-2/3 sm-main-title text-center">Affrontez familles et amis chez QuizMaster:<br />Fous rires garantis !</h1>
      </div>
    </div>

    <div class="w-full h-[65vh] flex sm:hidden relative items-center justify-center pt-20 pb-20">
      <div class="absolute top-[50%] z-0 transform right-1/2 translate-x-1/2 -translate-y-1/2 z-0 w-[150px] h-[150px] rounded-full yellow sm-blured-box" />
      <div class="absolute top-0 z-0 transform right-0 z-0 w-[100px] h-[100px] rounded-full blue sm-blured-box" />
      <div class="absolute top-[50%] z-0 transform left-0 z-0 w-[120px] h-[120px] rounded-full red sm-blured-box" />
      <div class="relative flex flex-row items-center justify-center h-full z-[50]">
        <h1 class="w-2/3 sm-main-title text-center">Affrontez familles et amis chez QuizMaster:<br />Fous rires garantis !</h1>
      </div>
    </div>

    <!-- Bowling with picture -->

    <div class="hidden xl:flex xl:px-24">
      <div class="relative w-full items-center justify-center">
        <div class="absolute top-1/2 transform -translate-y-1/2 left-[-300px] z-0 w-[400px] h-[400px] rounded-full yellow blured-box" />
        <WhiteCard className="relative z-[50] grid grid-cols-[40%_7%_53%]">
          <div class="w-full flex flex-col">
            <h1 class="card-title">C'est quoi Quiz Master</h1>
            <div class="py-3" />
            <p class="card-body">Quiz Master, c’est l’expérience ultime pour les passionnés de quiz !</p>
            <div class="py-1" />
            <p class="card-body">
              Venez vous affronter en famille, entre amis ou entre collègues dans un univers immersif inspiré des plus grands jeux télévisés. Avec des buzzers, des questions variées et des défis captivants, testez vos connaissances, stimulez votre esprit
              de compétition et partagez des moments inoubliables. Que vous soyez amateur ou expert, QuizzMaster promet rires, émotions et surprises à chaque partie. Relevez le défi et devenez le maître du quiz !
            </p>
            <div class="py-3" />
            <div class="flex flex-row gap-x-4">
              <Button
                text="Réserver"
                :onClick="
                  () => {
                    onClickReservations('Nice');
                  }
                "
                className="px-8 yellow-button"
              />
            </div>
            <div class="py-3" />
          </div>
          <div />
          <div class="w-full h-full flex flex-wrap gap-x-3 gap-y-1">
            <img alt="quizz-master-img-1" src="@/static/images/QuizzMaster/1.png" class="rounded-lg w-60 h-60 object-cover" @click="isOpen = true" />
            <img alt="quizz-master-img-2" src="@/static/images/QuizzMaster/2.jpeg" class="rounded-lg w-60 h-60 object-cover" @click="isOpen2 = true" />
            <img alt="quizz-master-img-3" src="@/static/images/QuizzMaster/3.jpeg" class="rounded-lg w-60 h-60 object-cover" @click="isOpen3 = true" />
            <img alt="quizz-master-img-4" src="@/static/images/QuizzMaster/4.jpeg" class="rounded-lg w-60 h-60 object-cover" @click="isOpen4 = true" />
          </div>
        </WhiteCard>
      </div>
    </div>

    <div class="flex xl:hidden px-8 sm:px-12 lg:px-16">
      <div class="relative w-full items-center justify-center">
        <div class="absolute top-1/2 transform -translate-y-1/2 left-[-300px] z-0 w-[400px] h-[400px] rounded-full yellow blured-box" />
        <WhiteCard className="relative z-[50] flex flex-col">
          <h1 class="card-title">C'est quoi Quiz Master ?</h1>
          <div class="py-3" />
          <p class="card-body">Quiz Master, c’est l’expérience ultime pour les passionnés de quiz !</p>
          <div class="py-1" />
          <p class="card-body">
            Venez vous affronter en famille, entre amis ou entre collègues dans un univers immersif inspiré des plus grands jeux télévisés. Avec des buzzers, des questions variées et des défis captivants, testez vos connaissances, stimulez votre esprit de
            compétition et partagez des moments inoubliables. Que vous soyez amateur ou expert, QuizzMaster promet rires, émotions et surprises à chaque partie. Relevez le défi et devenez le maître du quiz !
          </p>
          <div class="py-3" />
          <div class="w-full h-full flex flex-wrap items-center justify-center gap-x-3 gap-y-3">
            <img alt="quizz-master-img-1" src="@/static/images/QuizzMaster/1.png" class="rounded-lg w-60 h-60 object-cover" @click="isOpen = true" />
            <img alt="quizz-master-img-2" src="@/static/images/QuizzMaster/3.jpeg" class="rounded-lg w-60 h-60 object-cover" @click="isOpen2 = true" />
            <img alt="quizz-master-img-3" src="@/static/images/QuizzMaster/4.jpeg" class="rounded-lg w-60 h-60 object-cover" @click="isOpen3 = true" />
          </div>
        </WhiteCard>
      </div>
    </div>

    <div class="py-12 sm:py-16 xl:py-28" />

    <Separator>
      <div class="flex flex-col items-center gap-y-2">
        <h1 class="section-title text-center">Qui peut jouer ?</h1>
        <p class="section-body text-center">Quiz Master c'est pour tout le monde, de 5 ans à 90 ans. Affrontez vous en famille ou entre amis jsuqu'à 12 joueurs !</p>
        <div class="py-1" />
        <div class="flex items-center justify-center gap-x-4">
          <Button
            text="Réserver"
            :onClick="
              () => {
                onClickReservations('Nice');
              }
            "
            className="px-12 yellow-button"
          />
        </div>
      </div>
    </Separator>

    <div class="py-12 sm:py-16 xl:py-28" />

    <Separator>
      <div class="flex flex-col items-center gap-y-2">
        <h1 class="section-title text-center">Nos tarifs</h1>
      </div>
    </Separator>

    <div class="py-12 sm:py-16" />

    <div class="px-12 md:px-24 xl:px-40">
      <div class="w-full flex flex-wrap gap-x-3 gap-y-3">
        <WhiteCard class="w-full md:!w-[310px] flex flex-col">
          <div class="text-white text-5xl font-bold">12 € / personne</div>
          <div class="py-2" />
          <div class="divider w-full" />
          <div class="py-2" />
          <p class="h-full card-light-body">La partie de 4 manches</p>
          <div class="py-2" />
          <Button
            text="Réserver"
            :onClick="
              () => {
                onClickReservations('Nice');
              }
            "
            className="px-12 yellow-button !h-[45px]"
          />
        </WhiteCard>
        <WhiteCard class="w-full md:!w-[310px] flex flex-col">
          <div class="text-white text-5xl font-bold">18 € / personne</div>
          <div class="py-2" />
          <div class="divider w-full" />
          <div class="py-2" />
          <p class="h-full card-light-body">La partie de 9 manches</p>
          <div class="py-2" />
          <Button
            text="Réserver"
            :onClick="
              () => {
                onClickReservations('Nice');
              }
            "
            className="px-12 yellow-button !h-[45px]"
          />
        </WhiteCard>
        <WhiteCard class="w-full md:!w-[310px] flex flex-col">
          <div class="text-white text-5xl font-bold">12 € / personne</div>
          <div class="py-2" />
          <div class="divider w-full" />
          <div class="py-2" />
          <p class="h-full card-light-body">La partie de 4 manches sur le thème du mois</p>
          <div class="py-2" />
          <Button
            text="Réserver"
            :onClick="
              () => {
                onClickReservations('Nice');
              }
            "
            className="px-12 yellow-button !h-[45px]"
          />
        </WhiteCard>
        <WhiteCard class="w-full md:!w-[310px] flex flex-col">
          <div class="text-white text-5xl font-bold">Sur devis</div>
          <div class="py-2" />
          <div class="divider w-full" />
          <div class="py-2" />
          <p class="h-full card-light-body">Vous êtes une entreprise ou une association ? Demandez un tarif sur mesure.</p>
          <div class="py-2" />
          <router-link class="w-full" to="/contact">
            <Button text="Contact" :onClick="() => {}" className="w-full px-12 yellow-button !h-[45px]" />
          </router-link>
        </WhiteCard>
      </div>
    </div>

    <div class="py-12 sm:py-16 xl:py-28" />

    <Separator>
      <div class="flex flex-col items-center gap-y-2">
        <h1 class="section-title text-center">Nos thèmes du moment</h1>
        <p class="section-body text-center">Quiz Master vous propose des thèmes variés pour des parties toujours plus fun et originales. Découvrez nos thèmes du moment et choisissez celui qui vous correspond !</p>
      </div>
    </Separator>

    <div class="py-12 sm:py-16" />

    <div class="px-12 md:px-24 xl:px-40">
      <div class="w-full flex flex-wrap gap-x-3 gap-y-3">
        <WhiteCard class="w-full md:!w-[310px] flex flex-col justify-center">
          <img alt="event-img-1" src="@/static/images/Events/netflix_december.png" class="rounded-lg" />
          <div class="py-2" />
          <h1 class="card-subtitle leading-7">Série Netflix</h1>
          <div class="py-1" />
          <p class="card-light-body">Pendant le mois de décembre, venez tester notre Quiz de 4 manches sur les séries Netflix.</p>
        </WhiteCard>
      </div>
    </div>

    <div class="py-12 sm:py-16 xl:py-28" />

    <Separator>
      <div class="flex flex-col items-center gap-y-2">
        <h1 class="section-title text-center">Nos Centres</h1>
      </div>
    </Separator>

    <div class="py-12 sm:py-16" />

    <div class="px-12 md:px-24 xl:px-40">
      <div class="w-full flex flex-wrap gap-x-3 gap-y-3">
        <WhiteCard class="w-full md:!w-[310px] flex flex-col justify-center">
          <div class="w-full !h-[200px]">
            <img alt="event-img-1" src="@/static/images/LGE/quiz_mougins.jpeg" class="w-full rounded-lg object-cover !h-[200px]" />
          </div>
          <div class="py-2" />
          <h1 class="card-subtitle leading-7">Mougins</h1>
          <div class="py-1" />
          <p class="card-light-body h-full">Situé dans le Laser Game Bowling de Mougins.<br />561 Rte de la Roquette, 06250 Mougins<br />04 92 28 16 53</p>
          <div class="py-2" />
          <div class="flex flex-row gap-x-3">
            <Button
              text="Réserver"
              :onClick="
                () => {
                  onClickReservations('Mougins');
                }
              "
              className="w-full px-6 !h-[60px] yellow-button"
            />
          </div>
        </WhiteCard>
        <WhiteCard class="w-full md:!w-[310px] flex flex-col justify-center">
          <div class="w-full !h-[200px]">
            <img alt="event-img-2" src="@/static/images/LGE/quiz_nice.jpeg" class="w-full rounded-lg object-cover !h-[200px]" />
          </div>
          <div class="py-2" />
          <h1 class="card-subtitle leading-7">Nice Lingostière</h1>
          <div class="py-1" />
          <p class="card-light-body h-full">Juste à côté du Cinéma Pathé Lingostière, vous trouverez nos 3 salles de Quiz Master.<br />604 Bd du Mercantour, 06200 Nice<br />04 23 32 01 55</p>
          <div class="py-2" />
          <div class="flex flex-row gap-x-3">
            <Button
              text="Réserver"
              :onClick="
                () => {
                  onClickReservations('Nice');
                }
              "
              className="w-full px-6 !h-[60px] yellow-button"
            />
          </div>
        </WhiteCard>
      </div>
    </div>

    <div class="py-20" />

    <Footer blurColorClassName="yellow-important" />
  </div>

  <div v-show="isOpen" class="modal-overlay w-full flex justify-center items-center" @click="isOpen = false">
    <div class="w-2/3 relative" @click="$event.stopPropagation()">
      <img alt="quizz-master-img-1" src="@/static/images/QuizzMaster/1.png" class="rounded-lg w-full object-cover" />
    </div>
  </div>
  
  <div v-show="isOpen2" class="modal-overlay w-full flex justify-center items-center" @click="isOpen2 = false">
    <div class="w-2/3 relative" @click="$event.stopPropagation()">
      <img alt="quizz-master-img-1" src="@/static/images/QuizzMaster/2.jpeg" class="rounded-lg w-full object-cover" />
    </div>
  </div>
  
  <div v-show="isOpen3" class="modal-overlay w-full flex justify-center items-center" @click="isOpen3 = false">
    <div class="w-2/3 relative" @click="$event.stopPropagation()">
      <img alt="quizz-master-img-1" src="@/static/images/QuizzMaster/3.jpeg" class="rounded-lg w-full object-cover" />
    </div>
  </div>
  
  <div v-show="isOpen4" class="modal-overlay w-full flex justify-center items-center" @click="isOpen4 = false">
    <div class="w-2/3 relative" @click="$event.stopPropagation()">
      <img alt="quizz-master-img-1" src="@/static/images/QuizzMaster/4.jpeg" class="rounded-lg w-full object-cover" />
    </div>
  </div>
</template>

<script setup>
import Button from "@/components/button/Button.vue";
import WhiteCard from "~/components/card/WhiteCard.vue";
import Separator from "~/components/separator.vue";
import Footer from "~/components/Footer.vue";
import Navbar from "~/components/navbar.vue";

const isOpen = ref(false);
const isOpen2 = ref(false);
const isOpen3 = ref(false);
const isOpen4 = ref(false);

const onClickReservations = (center) => {
  if (center == "Mougins") {
    window.open("https://lasergame-evolution.resasoft.fr/FR/Centre-v2.awp?P1=141", "_blank");
  } else {
    window.open("https://lasergame-evolution.resasoft.fr/FR/Reservation-v2.awp?P1=33&P2=1748804030303305730", "_blank");
  }
};
</script>

<style scoped>
.modal-overlay {
  z-index: 1000;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  background-color: #000000da;
}
</style>
