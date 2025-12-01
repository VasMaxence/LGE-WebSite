"use client";

import Image from "next/image";
import Button from "./components/button/Button";
import CwdRightIcon from "./components/icon/cubeWithDot/CwdRightIcon";
import FamilyIcon from "./components/icon/FamilyIcon";
import QuestionIcon from "./components/icon/QuestionIcon";
import EffectIcon from "./components/icon/EffectIcon";
import GameModeCard from "./components/GameModeCard";
import RunIcon from "./components/icon/RunIcon";
import ChronoIcon from "./components/icon/ChronoIcon";
import FiveStarIcon from "./components/icon/FiveStarIcon";
import CasinoIcon from "./components/icon/CasinoIcon";
import ThunderIcon from "./components/icon/ThunderIcon";
import LoveIcon from "./components/icon/LoveIcon";
import MultiplyIcon from "./components/icon/MultIcon";
import VoleurIcon from "./components/icon/VoleurIcon";
import TrophyIcon from "./components/icon/TrophyIcon";
import PricingCard from "./components/PricingCard";
import BirthdayIcon from "./components/icon/BirthdayIcon";
import TableIcon from "./components/icon/TableIcon";
import DrinkIcon from "./components/icon/DrinkIcon";
import CwdTopIcon from "./components/icon/cubeWithDot/CwdTopIcon";
import CwdBottomIcon from "./components/icon/cubeWithDot/CwdBottomIcon";
import ReviewCard from "./components/ReviewCard";

import { Carousel } from "@once-ui-system/core";

export default function Home() {
  return (
    <div className="w-full">
      {/* Main Section */}
      <div className="h-[100vh] relative w-full overflow-hidden">
        <Image
          src="/images/main.png"
          alt="MainBackground"
          fill
          className="absolute top-0 left-0 object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>

        {/* Centered Text */}
        <div className="absolute top-1/2 px-[4rem] xl:px-[6rem] left-1/2 w-full transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center gap-y-2">
          <img alt="Quiz Master Logo" src="/images/main-logo.png" className="h-[140px] md:h-[160px] lg:h-[190px] 2xl:h-[240px] object-contain" />
          <h2 className="text-2xl lg:text-4xl 2xl:text-5xl text-white joyful-font font-normal text-center uppercase">
            Découvrez l’expérience ultime
            <br />
            un <strong className="text-yellow">JEU TV</strong> dans la <strong className="text-yellow">réalité</strong> !
          </h2>
          <Button title={"Réserver"} onClick={() => {
            window.open("https://quizmaster-nice.resasoft.fr/FR/Centre-v2.awp?P1=QM1", "_blank");
          }} color={"primary"} />
        </div>
        {/* TODO */}

        {/* Bottom Offer */}
        <div className="absolute bottom-0 left-0 w-full bottom-black-gradient h-[200px] flex items-end justify-center pb-10">
          <h2 className="px-[2rem] text-xl 2xl:text-3xl text-white joyful-font font-normal text-center">
            PROFITEZ DE NOS{" "}
            <strong onClick={() => {
              window.open("https://quizmaster-nice.resasoft.fr/FR/Centre-v2.awp?P1=QM1", "_blank");
            }} className="text-yellow underline text-xl md:text-2xl lg:text-3xl 2xl:text-5xl cursor-pointer">OFFRES DU LUNDI</strong>
            ,7 MANCHES AU PRIX DE 4.
          </h2>
        </div>
      </div>

      <div className="py-[2rem] lg:py-[3rem]" />

      {/* Main Game Desc */}
      <div className="px-[3rem] lg:px-[4rem] 2xl:px-[6rem] flex lg:flex-row items-center relative">
        <img className="absolute bottom-[-2rem] lg:bottom-[-10rem] 2x:bottom-[-10rem] right-0 w-[40%] lg:w-[30%] 2xl:w-[20%] object-cover" src="/images/questionRight.png" alt="GameBackground" />

        <div className="flex-1 z-[1]">
          <div className="flex flex-col w-[95%] lg:w-[85%] 2xl:w-[65%]">
            <div className="flex flex-row items-center gap-x-2">
              <h4 className="text-lg satoshi-font-bold text-primary-gradient">Comme sur un plateau TV !</h4>
              <CwdRightIcon height={12} />
            </div>
            <div className="h-[1rem]" />
            <h2 className="text-white text-4xl lg:text-5xl joyful-font">Jouez à un quiz,<br />comme à la télé !</h2>
            <div className="h-[1rem]" />
            <p className="text-white text-base satoshi-font">Préparez-vous à vivre une expérience unique où vous pourrez buzzer comme dans une véritable émission de TV.<br />Relevez les défis dans une ambiance survoltée en affrontant amis, famille ou collègues.</p>
            <div className="h-[1rem]" />
            <div className="flex flex-row items-center gap-x-[1.5rem]">
              <FamilyIcon width={58} height={58} color={"#FFF107"} />
              <span className="text-white text-2xl lg:text-3xl 2xl:text-4xl joyful-font uppercase">Pour toute la famille !</span>
            </div>
            <div className="h-[1rem]" />
            <div className="flex flex-row items-center gap-x-[1.5rem]">
              <QuestionIcon width={58} height={58} color={"#FFF107"} />
              <span className="text-white text-2xl lg:text-3xl 2xl:text-4xl joyful-font uppercase">Un jeu immersif</span>
            </div>
            <div className="h-[1.5rem]" />
            <div className="flex flex-row items-center gap-x-[0.8rem]">
              <EffectIcon width={24} height={24} color={"#FFF107"} />
              <span className="text-white text-base satoshi-font">9 manches, 9 modes de jeu, 9 défis.</span>
            </div>
            <div className="h-[.5rem]" />
            <div className="flex flex-row items-center gap-x-[0.8rem]">
              <EffectIcon width={24} height={24} color={"#FFF107"} />
              <span className="text-white text-base satoshi-font">+ de 500 thèmes, dans 25 thèmes différents.</span>
            </div>
            <div className="h-[.5rem]" />
            <div className="flex flex-row items-center gap-x-[0.8rem]">
              <EffectIcon width={24} height={24} color={"#FFF107"} />
              <span className="text-white text-base satoshi-font">Entre 2 et 36 joueurs en même temps.</span>
            </div>
            <div className="h-[1.5rem]" />
            <Button title={"Réserver"} onClick={() => {
              window.open("https://quizmaster-nice.resasoft.fr/FR/Centre-v2.awp?P1=QM1", "_blank");
            }} color={"primary"} />
          </div>
        </div>
        <div className="w-[20px] hidden lg:flex" />
        <div className="flex-1 hidden lg:flex">
          <div className="flex flex-col items-end">
            <div className="w-[85%] lg:w-[75%] 2xl:w-[60%] relative">
              <div className="absolute top-[16px] left-[16px] w-full h-full border bg-dark z-[0]" />
              <div className="relative z-[1]">
                <img alt="buzzer image" src="/images/buzzer.png" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="py-[2rem] lg:py-[3rem]" />

      {/* Game Mode Desc */}
      <div className="px-[3rem] lg:px-[4rem] 2xl:px-[6rem] flex lg:flex-row items-center relative">
        <img className="absolute bottom-[-2rem] lg:bottom-[-10rem] 2x:bottom-[-10rem] left-0 w-[40%] lg:w-[30%] 2xl:w-[20%] object-cover" src="/images/questionLeft.png" alt="GameBackground" />

        <div className="flex-1 z-[1]">
          <div className="flex flex-col w-[95%] lg:w-[85%] 2xl:w-[65%]">
            <div className="flex flex-row items-center gap-x-2">
              <h4 className="text-lg satoshi-font-bold text-primary-gradient">Plus de 500 thèmes, à travers 9 manches</h4>
              <CwdRightIcon height={12} />
            </div>
            <div className="h-[1rem]" />
            <h2 className="text-white text-4xl lg:text-5xl joyful-font">Découvrez nos thèmes,<br />
              et défiez vous dans 9 manches<br />
              totalement différentes</h2>
          </div>
          <div className="h-[2rem]" />
          <div className="w-full flex flex-col gap-y-5 md:hidden">
            <Carousel
              radius="none"
              indicator={false}
              play={{
                auto: true,
                interval: 5000,

              }}
              items={[
                {
                  slide:
                    <div className="w-full">
                      <GameModeCard title={"Top départ"} description={"Mettez vous en jambe avec le Top Départ.<br/>Une manche sans modificateur !"} icon={<RunIcon width={52} height={52} color={"#FFF107"} />} />
                      <div className="h-[1rem]" />
                      <GameModeCard title={"Chrono Sprint"} description={"Mettez vous en jambe avec le Top Départ.<br/>Une manche sans modificateur !"} icon={<ChronoIcon width={52} height={52} color={"#FFF107"} />} />
                      <div className="h-[1rem]" />
                      <GameModeCard title={"Objectif Five"} description={"Mettez vous en jambe avec le Top Départ.<br/>Une manche sans modificateur !"} icon={<FiveStarIcon width={52} height={52} color={"#FFF107"} />} />
                    </div>
                },
                {
                  slide: <div className="w-full">
                    <GameModeCard title={"Casino"} description={"Mettez vous en jambe avec le Top Départ.<br/>Une manche sans modificateur !"} icon={<CasinoIcon width={52} height={52} color={"#FFF107"} />} />
                    <div className="h-[1rem]" />
                    <GameModeCard title={"Top Réflexe"} description={"Mettez vous en jambe avec le Top Départ.<br/>Une manche sans modificateur !"} icon={<ThunderIcon width={52} height={52} color={"#FFF107"} />} />
                    <div className="h-[1rem]" />
                    <GameModeCard title={"Partage"} description={"Mettez vous en jambe avec le Top Départ.<br/>Une manche sans modificateur !"} icon={<LoveIcon width={52} height={52} color={"#FFF107"} />} />
                  </div>
                },
                {
                  slide: <div className="w-full">
                    <GameModeCard title={"Multiplicateur"} description={"Mettez vous en jambe avec le Top Départ.<br/>Une manche sans modificateur !"} icon={<MultiplyIcon width={52} height={52} color={"#FFF107"} />} />
                    <div className="h-[1rem]" />
                    <GameModeCard title={"Braquage"} description={"Mettez vous en jambe avec le Top Départ.<br/>Une manche sans modificateur !"} icon={<VoleurIcon width={52} height={52} color={"#FFF107"} />} />
                    <div className="h-[1rem]" />
                    <GameModeCard title={"Quitte ou Double"} description={"Mettez vous en jambe avec le Top Départ.<br/>Une manche sans modificateur !"} icon={<TrophyIcon width={52} height={52} color={"#FFF107"} />} />
                  </div>
                }
              ]}
            />
          </div>

          <div className="w-full hidden md:grid md:grid-cols-2 xl:grid-cols-3 gap-x-5 gap-y-5">
            <GameModeCard title={"Top départ"} description={"Mettez vous en jambe avec le Top Départ.<br/>Une manche sans modificateur !"} icon={<RunIcon width={52} height={52} color={"#FFF107"} />} />
            <GameModeCard title={"Chrono Sprint"} description={"Mettez vous en jambe avec le Top Départ.<br/>Une manche sans modificateur !"} icon={<ChronoIcon width={52} height={52} color={"#FFF107"} />} />
            <GameModeCard title={"Objectif Five"} description={"Mettez vous en jambe avec le Top Départ.<br/>Une manche sans modificateur !"} icon={<FiveStarIcon width={52} height={52} color={"#FFF107"} />} />
            <GameModeCard title={"Casino"} description={"Mettez vous en jambe avec le Top Départ.<br/>Une manche sans modificateur !"} icon={<CasinoIcon width={52} height={52} color={"#FFF107"} />} />
            <GameModeCard title={"Top Réflexe"} description={"Mettez vous en jambe avec le Top Départ.<br/>Une manche sans modificateur !"} icon={<ThunderIcon width={52} height={52} color={"#FFF107"} />} />
            <GameModeCard title={"Partage"} description={"Mettez vous en jambe avec le Top Départ.<br/>Une manche sans modificateur !"} icon={<LoveIcon width={52} height={52} color={"#FFF107"} />} />
            <GameModeCard title={"Multiplicateur"} description={"Mettez vous en jambe avec le Top Départ.<br/>Une manche sans modificateur !"} icon={<MultiplyIcon width={52} height={52} color={"#FFF107"} />} />
            <GameModeCard title={"Braquage"} description={"Mettez vous en jambe avec le Top Départ.<br/>Une manche sans modificateur !"} icon={<VoleurIcon width={52} height={52} color={"#FFF107"} />} />
            <GameModeCard title={"Quitte ou Double"} description={"Mettez vous en jambe avec le Top Départ.<br/>Une manche sans modificateur !"} icon={<TrophyIcon width={52} height={52} color={"#FFF107"} />} />
          </div>
        </div>
      </div>

      <div className="py-[3rem] lg:py-[7rem]" />

      {/* Game Second Desc */}
      <div className="px-[3rem] lg:px-[4rem] 2xl:px-[6rem] flex lg:flex-row items-center relative">
        <Image
          src="/images/room.png"
          alt="Salle de quiz"
          fill
          className="absolute top-0 left-0 object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full left-black-gradient"></div>

        <div className="py-[3rem] w-full flex flex-col z-[1]">
          <div className="flex flex-row items-center gap-x-2">
            <h4 className="text-lg satoshi-font-bold text-primary-gradient">Un quiz pour tous</h4>
            <CwdRightIcon height={12} />
          </div>
          <div className="h-[1rem]" />
          <h2 className="text-white text-4xl lg:text-5xl joyful-font">
            Quiz Master c’est pour tous,<br />Entre amis ou en famille !
          </h2>
          <div className="h-[1rem]" />
          <div className="flex">
            <div className="border-white flex flex-row px-3 py-3 gap-x-3 items-center">
              <span className="text-yellow text-base lg:text-xl satoshi-font">20 <span className="!text-sm">ou</span> 50 minutes</span>
              <div className="w-[2px] h-full bg-white" />
              <span className="text-white text-base lg:text-xl satoshi-font">Famille</span>
              <div className="w-[2px] h-full bg-white" />
              <span className="text-white text-base lg:text-xl satoshi-font">Amis</span>
              <div className="w-[2px] h-full bg-white" />
              <span className="text-white text-base lg:text-xl satoshi-font">EVJF - EVG</span>
            </div>
          </div>
          <div className="h-[1rem]" />
          <p className="text-white satoshi-font text-base">
            Préparez-vous à vivre une expérience unique où vous pourrez buzzer<br />
            comme dans une véritable émission de TV.
            <br /> Relevez les défis dans une ambiance survoltée en affrontant amis, famille ou collègues.
          </p>
          <div className="h-[1.5rem]" />
          <div className="flex">
            <Button title={"Réserver"} onClick={() => {
              window.open("https://quizmaster-nice.resasoft.fr/FR/Centre-v2.awp?P1=QM1", "_blank");
            }} color={"primary"} />
          </div>
        </div>
      </div>

      <div className="py-[2rem] lg:py-[4rem]" />

      <div className="px-[3rem] lg:px-[4rem] 2xl:px-[6rem] flex lg:flex-row items-center relative">
        <img className="absolute bottom-[-2rem] lg:bottom-[-10rem] 2x:bottom-[-10rem] left-0 w-[40%] lg:w-[30%] 2xl:w-[20%] object-cover" src="/images/questionLeft.png" alt="GameBackground" />
        <img className="absolute top-[2rem] lg:top-0 2x:top-0 right-0 w-[40%] lg:w-[30%] 2xl:w-[20%] object-cover" src="/images/questionRight.png" alt="GameBackground" />

        <div className="flex-1 z-[1]">
          <div className="flex flex-col w-[95%] lg:w-[85%] 2xl:w-[65%]">
            <div className="flex flex-row items-center gap-x-2">
              <h4 className="text-lg satoshi-font-bold text-primary-gradient">Rassemblez vos amis</h4>
              <CwdRightIcon height={12} />
            </div>
            <div className="h-[1rem]" />
            <h2 className="text-white text-4xl lg:text-5xl joyful-font">Plus vous êtes nombreux,<br />moins  c’est chers !</h2>
            <div className="h-[1rem]" />
            <p className="text-white text-base satoshi-font">Vivez une expérience unique en équipe avec des tarifs adaptés à tous les groupes.<br />Affrontez vos amis, votre famille ou vos collègues… et montrez-leur qui est le vrai champion !</p>
          </div>
          <div className="h-[2rem]" />
          <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-5 gap-y-5">
            <PricingCard title={"Petit groupe"} price={"22€"} priceSuffix={"/PERSONNE"} personText="2 à 4 joueurs" chronoText="50 minutes" />
            <PricingCard title={"Groupe Moyen"} price={"20€"} priceSuffix={"/PERSONNE"} personText="5 à 6 joueurs" chronoText="50 minutes" />
            <PricingCard title={"Grand groupe"} price={"18€"} priceSuffix={"/PERSONNE"} personText="7 joueurs et +" chronoText="50 minutes" />

            <PricingCard title={"Pour les petits plaisirs"} price={"15€"} priceSuffix={"/PERSONNE"} personText="à partir de 2 joueurs" chronoText="20 minutes" />
            <PricingCard title={"Tarif étudiant"} price={"20€"} priceSuffix={"/ÉTUDIANT"} checkText="Sur présentation de la carte étudiante" chronoText="50 minutes" />
            <PricingCard title={"Tarif enfant"} price={"15€"} priceSuffix={"/ENFANT"} personText="Pour les -10 ans" chronoText="50 minutes" />
          </div>

          <div className="py-[2rem] lg:py-[4rem]" />

          <div className="flex flex-col w-[95%] lg:w-[85%] 2xl:w-[65%]">
            <div className="flex flex-row items-center gap-x-2">
              <h4 className="text-lg satoshi-font-bold text-primary-gradient">Fêtez votre anniversaire</h4>
              <CwdRightIcon height={12} />
            </div>
            <div className="h-[1rem]" />
            <h2 className="text-white text-4xl lg:text-5xl joyful-font">Une expérience unique<br />pour votre anniversaire !</h2>
            <div className="h-[1rem]" />
            <p className="text-white text-base satoshi-font">Une expérience unique pour votre anniversaire !</p>
          </div>
          <div className="h-[2rem]" />
          <div className="w-full 2xl:w-1/2 flex flex-col bg-[#232323] border-white white-shadow px-[1rem] py-[0.5rem] hover-border-yellow hover-yellow-shadow transition-all duration-300">
            <div className="flex flex-col w-full items-start gap-y-1">
              <h4 className="text-lg text-white satoshi-font-medium font-normal text-start">Formule anniversaire</h4>
              <span className="text-3xl text-white satoshi-font-bold font-normal text-start">{"26€"}{" "}<span className="text-base joyful-font">{"/PERSONNE"}</span></span>
            </div>
            <div className="h-[1rem]" />
            <div className="mb-1 w-full flex flex-row gap-x-2 items-center">
              <BirthdayIcon width={20} height={20} color={"#FFFFFF"} />
              <span className="text-base text-white satoshi-font text-start">5 à 12 personnes</span>
            </div>

            <div className="mb-1 w-full flex flex-row gap-x-2 items-center">
              <ChronoIcon width={20} height={20} color={"#FFFFFF"} />
              <span className="text-base text-white satoshi-font text-start">2 parties de <span className="text-yellow">4 manches</span></span>
            </div>

            <div className="mb-1 w-full flex flex-row gap-x-2 items-center">
              <TableIcon width={20} height={20} color={"#FFFFFF"} />
              <span className="text-base text-white satoshi-font text-start">Table privatisé pendant 1h30</span>
            </div>

            <div className="mb-1 w-full flex flex-row gap-x-2 items-center">
              <DrinkIcon width={20} height={20} color={"#FFFFFF"} />
              <span className="text-base text-white satoshi-font text-start">Boissons à volonté</span>
            </div>

            <div className="h-[1rem]" />
            <div className="w-full flex flex-row justify-end">
              <div className="flex flex-row w-min">
                <button className="w-full flex flex-col gap-y-1 cursor-pointer">
                  <div className="h-[2px] w-full bg-white" />
                  <div className="flex flex-row items-center gap-x-5">
                    <CwdTopIcon height={45} color={"#ffffff"} />
                    <span className="text-yellow joyful-font text-xl uppercase">Réserver</span>
                    <CwdBottomIcon height={45} color={"#ffffff"} />
                  </div>
                  <div className="h-[2px] w-full bg-white" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-[2rem] lg:py-[4rem]" />

      <div className="px-[3rem] lg:px-[4rem] 2xl:px-[6rem] flex lg:flex-row items-center relative">
        <img className="absolute top-[2rem] lg:top-0 2x:top-0 right-0 w-[40%] lg:w-[30%] 2xl:w-[20%] object-cover" src="/images/questionRight.png" alt="GameBackground" />

        <div className="flex-1 z-[1]">
          <div className="flex flex-col w-[95%] lg:w-[85%] 2xl:w-[65%]">
            <div className="flex flex-row items-center gap-x-2">
              <h4 className="text-lg satoshi-font-bold text-primary-gradient">Ce qu’ils pensent de nous</h4>
              <CwdRightIcon height={12} />
            </div>
            <div className="h-[1rem]" />
            <h2 className="text-white text-4xl lg:text-5xl joyful-font">C’est vous qui avez testé !</h2>
          </div>
          <div className="h-[2rem]" />
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-5">
            <ReviewCard userName="Maxence" review="C'est super !" />
            <ReviewCard userName="Maxence" review="C'est super !" />
            <ReviewCard userName="Maxence" review="C'est super !" />
          </div>
        </div>
      </div>


      <div className="py-[5rem]" />
    </div>
  );
}
