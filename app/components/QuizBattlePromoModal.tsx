"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Carousel } from "@once-ui-system/core";
import Button from "./button/Button";
import ChronoIcon from "./icon/ChronoIcon";

const LOCALSTORAGE_KEY = "quizBattlePromoLastSeen";
const EXPIRY_DATE = new Date("2026-03-03T23:59:59");
const COOLDOWN_MS = 12 * 60 * 60 * 1000; // 12 hours
const IS_DEV = process.env.NODE_ENV === "development";

const QUIZ_BATTLE_IMAGES = [
  { src: "/images/quiz_battle/Ecran titre.png", alt: "i-Quiz Battle - Écran titre" },
  { src: "/images/quiz_battle/Choix avatar.png", alt: "i-Quiz Battle - Choix d'avatar" },
  { src: "/images/quiz_battle/Choix manche.png", alt: "i-Quiz Battle - Choix de manche" },
  { src: "/images/quiz_battle/Manche 1 theme.png", alt: "i-Quiz Battle - Thème de manche" },
  { src: "/images/quiz_battle/Prediction 2.png", alt: "i-Quiz Battle - Prédiction" },
  { src: "/images/quiz_battle/Bonus manche 1.png", alt: "i-Quiz Battle - Bonus" },
  { src: "/images/quiz_battle/Utiliser bonus.png", alt: "i-Quiz Battle - Utiliser un bonus" },
  { src: "/images/quiz_battle/Scores.png", alt: "i-Quiz Battle - Scores" },
];

export default function QuizBattlePromoModal() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const now = new Date();

    // Don't show after expiry date (always show in dev)
    if (!IS_DEV && now > EXPIRY_DATE) return;

    if (!IS_DEV) {
      const lastSeen = localStorage.getItem(LOCALSTORAGE_KEY);
      if (lastSeen) {
        const elapsed = now.getTime() - parseInt(lastSeen, 10);
        if (elapsed < COOLDOWN_MS) return;
      }
    }

    // Small delay so the page loads first
    const timer = setTimeout(() => setIsVisible(true), 800);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    localStorage.setItem(LOCALSTORAGE_KEY, Date.now().toString());
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="promo-modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={handleClose}
        >
          <motion.div
            className="promo-modal-card"
            initial={{ opacity: 0, scale: 0.85, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 40 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button className="promo-modal-close" onClick={handleClose}>
              ✕
            </button>

            {/* Badge + Title */}
            <div className="flex flex-col items-center gap-y-2">
              <span className="promo-badge">🎮 NOUVEAU</span>
              <h2 className="text-white text-3xl md:text-4xl joyful-font text-center uppercase">
                i-Quiz <span className="text-yellow">Battle</span>
              </h2>
              <p className="text-white satoshi-font text-sm md:text-base text-center opacity-80 max-w-[500px]">
                Découvrez notre tout nouveau mode de jeu ! Choisissez votre avatar, affrontez vos amis dans des manches épiques et utilisez vos bonus pour prendre l'avantage !
              </p>
            </div>

            <div className="h-[1rem]" />

            {/* Image Carousel */}
            <div className="w-full promo-carousel-wrapper">
              <Carousel
                sizes="l"
                radius="m"
                indicator="thumbnail"
                play={{
                  auto: true,
                  interval: 4000,
                }}
                items={QUIZ_BATTLE_IMAGES.map((img) => ({
                  slide: (
                    <div className="w-full flex items-center justify-center">
                      <img
                        src={img.src}
                        alt={img.alt}
                        className="w-full h-auto object-contain rounded-md"
                        style={{ maxHeight: "320px" }}
                      />
                    </div>
                  ),
                }))}
              />
            </div>

            <div className="h-[1.5rem]" />

            {/* Pricing */}
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="promo-price-card">
                <div className="flex flex-col items-start gap-y-1">
                  <h4 className="text-base text-white satoshi-font-medium">Partie complète</h4>
                  <span className="text-3xl text-white satoshi-font-bold">18€ <span className="text-base joyful-font">/PERSONNE</span></span>
                </div>
                <div className="h-[0.5rem]" />
                <div className="flex flex-row gap-x-2 items-center">
                  <ChronoIcon width={18} height={18} color={"#FFFFFF"} />
                  <span className="text-sm text-white satoshi-font">7 manches · <span className="text-yellow">1 heure</span></span>
                </div>
              </div>

              <div className="promo-price-card">
                <div className="flex flex-col items-start gap-y-1">
                  <h4 className="text-base text-white satoshi-font-medium">Partie express</h4>
                  <span className="text-3xl text-white satoshi-font-bold">12€ <span className="text-base joyful-font">/PERSONNE</span></span>
                </div>
                <div className="h-[0.5rem]" />
                <div className="flex flex-row gap-x-2 items-center">
                  <ChronoIcon width={18} height={18} color={"#FFFFFF"} />
                  <span className="text-sm text-white satoshi-font">4 manches · <span className="text-yellow">30 min</span></span>
                </div>
              </div>
            </div>

            <div className="h-[1.5rem]" />

            {/* CTA */}
            <div className="flex justify-center">
              <Button
                title={"Réserver"}
                onClick={() => {
                  window.open("https://quizmaster-nice.resasoft.fr/FR/Centre-v2.awp?P1=QM1", "_blank");
                  handleClose();
                }}
                color={"primary"}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
