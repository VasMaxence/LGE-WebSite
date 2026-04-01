"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "./button/Button";
import ChronoIcon from "./icon/ChronoIcon";

const LOCALSTORAGE_KEY = "closingAnnouncementSeen";

export default function QuizBattlePromoModal() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const alreadySeen = localStorage.getItem(LOCALSTORAGE_KEY);
    if (!alreadySeen) {
      const timer = setTimeout(() => setIsVisible(true), 800);
      return () => clearTimeout(timer);
    }
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
            <div className="flex flex-col items-center gap-y-3">
              <span className="promo-badge promo-badge-closing">⚠️ ANNONCE IMPORTANTE</span>
              <h2 className="text-white text-3xl md:text-4xl joyful-font text-center uppercase">
                C'est déjà <span className="text-yellow">fini</span> !
              </h2>
              <p className="text-white satoshi-font text-sm md:text-base text-center opacity-90 max-w-[550px]">
                Après une aventure incroyable, <strong>Quiz Master</strong> fermera définitivement ses portes le <strong className="text-yellow">27 avril 2026</strong>.
              </p>
              <p className="text-white satoshi-font text-sm md:text-base text-center opacity-70 max-w-[550px]">
                Il vous reste encore quelques semaines pour profiter de l'expérience ! Venez vivre une dernière partie mémorable avec vos proches 🎉
              </p>
            </div>

            <div className="h-[1.5rem]" />

            {/* Special pricing */}
            <div className="flex flex-col items-center gap-y-2">
              <h3 className="text-white text-xl md:text-2xl joyful-font text-center uppercase">
                Nos tarifs <span className="text-yellow">spéciaux</span>
              </h3>
            </div>

            <div className="h-[1rem]" />

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
            <div className="flex flex-col items-center gap-y-2">
              <Button
                title={"Réserver une dernière partie"}
                onClick={() => {
                  window.open("https://quizmaster-nice.resasoft.fr/FR/Centre-v2.awp?P1=QM1", "_blank");
                  handleClose();
                }}
                color={"primary"}
              />
              <p className="text-white satoshi-font text-xs text-center opacity-50 mt-1">
                Merci à tous pour cette belle aventure ❤️
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
