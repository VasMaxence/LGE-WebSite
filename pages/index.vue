<template>
  <div class="w-full relative overflow-x-hidden">
    <Navbar />

    <!-- Main Image -->
    <img src="@/static/images/main_home.png" alt="Loisir 06 Main Image" class="absolute top-0 z-0 w-[100wh]" />

    <div class="w-full h-[85vh] hidden sm:relative">
      <div class="absolute top-[50%] z-0 transform right-1/2 translate-x-1/2 -translate-y-1/2 z-0 w-[300px] h-[300px] rounded-full blue blured-box" />
      <div class="relative flex flex-col items-center justify-center h-full z-[50]">
        <!-- <h2 class="main-subtitle">Loisir 06</h2> -->
        <h1 class="w-1/2 main-title text-center leading-[70px]">Démarrez une expérience inédite</h1>
      </div>
    </div>

    <div class="px-40">
      <div class="flex flex-row gap-x-10">
        <WhiteCard class="flex flex-col flex-grow w-[30%]">
          <h1 class="white-title robot">Laser Game</h1>
          <p class="white-body robot">Visez l'émotion 100% Laser Game.</p>
          <div class="py-3 h-full" />
          <div class="grid grid-cols-2 gap-x-8 items-center">
            <Button text="Réserver" :onClick="() => {}" className="red-button" />
            <a href="/activity/laser-game" class="link">En savoir plus</a>
          </div>
          <div class="py-4" />
          <div class="grid grid-cols-2 gap-x-3">
            <img alt="laser-game-img-1" src="@/static/images/LGE/1.png" class="rounded-lg" />
            <img alt="laser-game-img-2" src="@/static/images/LGE/2.png" class="rounded-lg" />
          </div>
        </WhiteCard>
        <WhiteCard class="flex flex-col flex-grow w-[30%]">
          <h1 class="white-title robot">Bowling</h1>
          <p class="white-body robot">Visez l'émotion 100% Bowling.</p>
          <div class="py-3 h-full" />
          <div class="grid grid-cols-2 gap-x-8 items-center">
            <Button text="Réserver" :onClick="() => {}" className="blue-button" />
            <a href="/activity/bowling" class="link">En savoir plus</a>
          </div>
          <div class="py-4" />
          <div class="grid grid-cols-2 gap-x-3">
            <img alt="bowling-img-1" src="@/static/images/Bowling/1.png" class="rounded-lg" />
            <img alt="bowling-img-2" src="@/static/images/Bowling/2.png" class="rounded-lg" />
          </div>
        </WhiteCard>
        <WhiteCard class="flex flex-col flex-grow w-[30%]">
          <h1 class="white-title robot">Quizz Master</h1>
          <p class="white-body robot">Venez vous éclatez entre amis ou en famille.</p>
          <div class="py-3 h-full" />
          <div class="grid grid-cols-2 gap-x-8 items-center">
            <Button text="Réserver" :onClick="() => {}" className="yellow-button" />
            <a href="/activity/quizz-master" class="link">En savoir plus</a>
          </div>
          <div class="py-4" />
          <div class="grid grid-cols-2 gap-x-3">
            <img alt="quizz-master-img-1" src="@/static/images/QuizzMaster/1.png" class="rounded-lg" />
            <img alt="quizz-master-img-2" src="@/static/images/QuizzMaster/2.png" class="rounded-lg" />
          </div>
        </WhiteCard>
      </div>

      <div class="py-4" />

      <div class="!w-full flex flex-row justify-center gap-x-10">
        <div class="w-[32%]">
          <WhiteCard class="w-full flex flex-col flex-grow">
            <h1 class="white-title robot">Billard</h1>
            <p class="white-body robot">Visez l'émotion 100% Billard.</p>
            <div class="py-3 h-full" />
            <div class="grid grid-cols-2 gap-x-8 items-center">
              <Button text="Réserver" :onClick="() => {}" className="green-button" />
              <a href="/activity/billard" class="link">En savoir plus</a>
            </div>
            <div class="py-4" />
            <div class="grid grid-cols-2 gap-x-3">
              <img alt="billard-img-1" src="@/static/images/Billard/1.png" class="rounded-lg" />
              <img alt="billard-img-2" src="@/static/images/Billard/2.png" class="rounded-lg" />
            </div>
          </WhiteCard>
        </div>
        <div class="w-[32%]">
          <WhiteCard class="w-full flex flex-col flex-grow">
            <h1 class="white-title robot">Karting</h1>
            <p class="white-body robot">Visez l'émotion 100% Karting.</p>
            <div class="py-3 h-full" />
            <div class="grid grid-cols-2 gap-x-8 items-center">
              <Button text="Réserver" :onClick="() => {}" className="purple-button" />
              <a href="/activity/karting" class="link">En savoir plus</a>
            </div>
            <div class="py-4" />
            <div class="grid grid-cols-2 gap-x-3">
              <img alt="karting-img-1" src="@/static/images/Karting/1.png" class="rounded-lg" />
              <img alt="karting-img-2" src="@/static/images/Karting/2.png" class="rounded-lg" />
            </div>
          </WhiteCard>
        </div>
      </div>
    </div>

    <div class="py-28" />

    <Separator>
      <div class="flex flex-col items-center gap-y-2">
        <h1 class="section-title text-center">Faites le plein d’aventure</h1>
        <p class="section-body text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porta nibh a bibendum tincidunt. Sed non volutpat lectus, non lacinia leo. Nunc vel nulla velit. Nullam congue vehicula ultricies. Nunc nec auctor purus. Pellentesque gravida magna
          vestibulum, aliquet metus rhoncus, finibus ligula. Pellentesque imperdiet dapibus odio.
        </p>
      </div>
    </Separator>

    <div class="py-28" />

    <!-- LGE -->
    <div class="px-24">
      <div class="relative w-full items-center justify-center">
        <div class="absolute top-1/2 transform -translate-y-1/2 left-[-300px] z-0 w-[400px] h-[400px] rounded-full red blured-box" />
        <WhiteCard className="relative z-[50] grid grid-cols-2 gap-x-40">
          <div class="flex flex-col">
            <h1 class="card-title">Laser Game Évolution</h1>
            <div class="py-3" />
            <p class="card-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porta nibh a bibendum tincidunt. Sed non volutpat lectus, non lacinia leo. Nunc vel nulla velit. Nullam congue vehicula ultricies.</p>
            <div class="py-3" />
            <Button text="En savoir plus sur l'activité" :onClick="() => {}" className="!w-fit px-10 white-button" />
            <div class="py-8" />
            <div class="flex flex-wrap gap-x-3 gap-y-3">
              <img alt="laser-game-img-1" src="@/static/images/LGE/1.png" class="rounded-lg" />
              <img alt="laser-game-img-2" src="@/static/images/LGE/2.png" class="rounded-lg" />
              <img alt="laser-game-img-3" src="@/static/images/LGE/3.png" class="rounded-lg" />
              <!-- <img alt="laser-game-img-4" src="@/static/images/LGE/4.png" class="rounded-lg" /> -->
            </div>
          </div>
          <div class="h-full flex flex-col">
            <h3 class="card-subtitle">Nos centres</h3>
            <div class="flex-1 flex flex-col items-center justify-center gap-y-3">
              <CenterCard title="Laser Game Évolution" subtitle="Pathé lingostière, 06200 Nice" buttonClassName="red-button" />
              <CenterCard title="Laser Game / Bowling" subtitle="Mougins" buttonClassName="red-button" />
            </div>
          </div>
        </WhiteCard>
      </div>
    </div>

    <div class="py-8" />

    <!-- Bowling -->
    <div class="px-24">
      <div class="relative w-full items-center justify-center">
        <div class="absolute top-1/2 transform -translate-y-1/2 right-[-300px] z-0 w-[400px] h-[400px] rounded-full blue blured-box" />
        <WhiteCard className="relative z-[50] grid grid-cols-2 gap-x-40">
          <div class="flex flex-col">
            <h1 class="card-title">Bowling</h1>
            <div class="py-3" />
            <p class="card-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porta nibh a bibendum tincidunt. Sed non volutpat lectus, non lacinia leo. Nunc vel nulla velit. Nullam congue vehicula ultricies.</p>
            <div class="py-3" />
            <Button text="En savoir plus sur l'activité" :onClick="() => {}" className="!w-fit px-10 white-button" />
            <div class="py-8" />
            <div class="flex flex-wrap gap-x-3 gap-y-3">
              <img alt="bowling-img-1" src="@/static/images/Bowling/1.png" class="rounded-lg" />
              <img alt="bowling-img-2" src="@/static/images/Bowling/2.png" class="rounded-lg" />
            </div>
          </div>
          <div class="h-full flex flex-col">
            <h3 class="card-subtitle">Nos centres</h3>
            <div class="flex-1 flex flex-col items-center justify-center gap-y-3">
              <CenterCard title="Laser Game / Bowling" subtitle="Mougins" buttonClassName="blue-button" />
            </div>
          </div>
        </WhiteCard>
      </div>
    </div>

    <div class="py-8" />

    <!-- Quizz Master -->
    <div class="px-24">
      <div class="relative w-full items-center justify-center">
        <div class="absolute top-1/2 transform -translate-y-1/2 left-[-300px] z-0 w-[400px] h-[400px] rounded-full yellow blured-box" />
        <WhiteCard className="relative z-[50] grid grid-cols-2 gap-x-40">
          <div class="flex flex-col">
            <h1 class="card-title">Quizz Master</h1>
            <div class="py-3" />
            <p class="card-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porta nibh a bibendum tincidunt. Sed non volutpat lectus, non lacinia leo. Nunc vel nulla velit. Nullam congue vehicula ultricies.</p>
            <div class="py-3" />
            <Button text="En savoir plus sur l'activité" :onClick="() => {}" className="!w-fit px-10 white-button" />
            <div class="py-8" />
            <div class="flex flex-wrap gap-x-3 gap-y-3">
              <img alt="quizz-master-img-1" src="@/static/images/QuizzMaster/1.png" class="rounded-lg" />
              <img alt="quizz-master-img-2" src="@/static/images/QuizzMaster/2.png" class="rounded-lg" />
            </div>
          </div>
          <div class="h-full flex flex-col">
            <h3 class="card-subtitle">Nos centres</h3>
            <div class="flex-1 flex flex-col items-center justify-center gap-y-3">
              <CenterCard title="Laser Game / Bowling" subtitle="Mougins" buttonClassName="yellow-button" />
            </div>
          </div>
        </WhiteCard>
      </div>
    </div>
    <div class="py-8" />

    <!-- Billard -->
    <div class="px-24">
      <div class="relative w-full items-center justify-center">
        <div class="absolute top-1/2 transform -translate-y-1/2 right-[-300px] z-0 w-[400px] h-[400px] rounded-full green blured-box" />
        <WhiteCard className="relative z-[50] grid grid-cols-2 gap-x-40">
          <div class="flex flex-col">
            <h1 class="card-title">Billard</h1>
            <div class="py-3" />
            <p class="card-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porta nibh a bibendum tincidunt. Sed non volutpat lectus, non lacinia leo. Nunc vel nulla velit. Nullam congue vehicula ultricies.</p>
            <div class="py-3" />
            <Button text="En savoir plus sur l'activité" :onClick="() => {}" className="!w-fit px-10 white-button" />
            <div class="py-8" />
            <div class="flex flex-wrap gap-x-3 gap-y-3">
              <img alt="billard-img-1" src="@/static/images/Billard/1.png" class="rounded-lg" />
              <img alt="billard-img-2" src="@/static/images/Billard/2.png" class="rounded-lg" />
            </div>
          </div>
          <div class="h-full flex flex-col">
            <h3 class="card-subtitle">Nos centres</h3>
            <div class="flex-1 flex flex-col items-center justify-center gap-y-3">
              <CenterCard title="Laser Game / Bowling" subtitle="Mougins" buttonClassName="green-button" />
            </div>
          </div>
        </WhiteCard>
      </div>
    </div>

    <div class="py-28" />

    <Separator>
      <div class="flex flex-col items-center gap-y-2">
        <h1 class="section-title text-center">Nos Événements</h1>
        <p class="section-body text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porta nibh a bibendum tincidunt.</p>
      </div>
    </Separator>

    <div class="py-20" />

    <div class="px-40">
      <div class="w-full flex flex-wrap gap-x-3 gap-y-3">
        <WhiteCard class="!w-[310px] flex flex-col justify-center">
          <img alt="event-img-1" src="@/static/images/Events/1.png" class="rounded-lg" />
          <div class="py-2" />
          <h1 class="card-subtitle leading-7">Soirée Exemple</h1>
          <div class="py-1" />
          <p class="card-light-body">Lorem Ipsum, Lorem Ipsum, Lorem Ipsum, Lorem Ipsum, Lorem Ipsum, Lorem Ipsum, Lorem Ipsum, Lorem Ipsum, Lorem Ipsum, Lorem Ipsum, Lorem Ipsum, Lorem Ipsum,</p>
        </WhiteCard>
        <WhiteCard class="!w-[310px] flex flex-col justify-center">
          <img alt="event-img-1" src="@/static/images/Events/1.png" class="rounded-lg" />
          <div class="py-2" />
          <h1 class="card-subtitle leading-7">Soirée Exemple</h1>
          <div class="py-1" />
          <p class="card-light-body">Lorem Ipsum, Lorem Ipsum, Lorem Ipsum, Lorem Ipsum, Lorem Ipsum, Lorem Ipsum, Lorem Ipsum, Lorem Ipsum, Lorem Ipsum, Lorem Ipsum, Lorem Ipsum, Lorem Ipsum,</p>
        </WhiteCard>
        <WhiteCard class="!w-[310px] flex flex-col justify-center">
          <img alt="event-img-1" src="@/static/images/Events/1.png" class="rounded-lg" />
          <div class="py-2" />
          <h1 class="card-subtitle leading-7">Soirée Exemple</h1>
          <div class="py-1" />
          <p class="card-light-body">Lorem Ipsum, Lorem Ipsum, Lorem Ipsum, Lorem Ipsum, Lorem Ipsum, Lorem Ipsum, Lorem Ipsum, Lorem Ipsum, Lorem Ipsum, Lorem Ipsum, Lorem Ipsum, Lorem Ipsum,</p>
        </WhiteCard>
        <WhiteCard class="!w-[310px] flex flex-col justify-center">
          <img alt="event-img-1" src="@/static/images/Events/1.png" class="rounded-lg" />
          <div class="py-2" />
          <h1 class="card-subtitle leading-7">Soirée Exemple</h1>
          <div class="py-1" />
          <p class="card-light-body">Lorem Ipsum, Lorem Ipsum, Lorem Ipsum, Lorem Ipsum, Lorem Ipsum, Lorem Ipsum, Lorem Ipsum, Lorem Ipsum, Lorem Ipsum, Lorem Ipsum, Lorem Ipsum, Lorem Ipsum,</p>
        </WhiteCard>
        <WhiteCard class="!w-[310px] flex flex-col justify-center">
          <img alt="event-img-1" src="@/static/images/Events/1.png" class="rounded-lg" />
          <div class="py-2" />
          <h1 class="card-subtitle leading-7">Soirée Exemple</h1>
          <div class="py-1" />
          <p class="card-light-body">Lorem Ipsum, Lorem Ipsum, Lorem Ipsum, Lorem Ipsum, Lorem Ipsum, Lorem Ipsum, Lorem Ipsum, Lorem Ipsum, Lorem Ipsum, Lorem Ipsum, Lorem Ipsum, Lorem Ipsum,</p>
        </WhiteCard>
      </div>
    </div>

    <div class="py-20" />

    <Footer />
  </div>
</template>

<script setup>
import Button from "@/components/button/Button.vue";
import WhiteCard from "~/components/card/WhiteCard.vue";
import Separator from "~/components/separator.vue";
import CenterCard from "~/components/card/CenterCard.vue";
import Footer from "~/components/Footer.vue";
import Navbar from "~/components/navbar.vue";
</script>
