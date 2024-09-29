<template>
  <div class="w-full relative overflow-x-hidden">
    <Navbar />

    <!-- Main Image -->
    <div class="hidden lg:flex">
      <img src="@/static/images/main_home.png" alt="Loisir 06 Main Image" class="absolute top-0 z-0 w-[100wh]" width="100%" />
    </div>

    <div class="w-full h-[85vh] hidden lg:flex relative items-center justify-center px-24">
      <div class="absolute top-[50%] z-0 transform right-1/2 translate-x-1/2 -translate-y-1/2 z-0 w-[300px] h-[300px] rounded-full blue blured-box" />
      <WhiteCard className="w-full grid grid-cols-[48%_4%_48%] z-[100] items-center">
        <div class="flex flex-col lg:px-12 xl:px-20">
          <h1 class="sm-main-title">Contactez nous</h1>
          <div class="py-1" />
          <p class="white-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dapibus nibh ut nisi gravida dictum.</p>
          <div class="py-3" />
          <h2 class="main-subtitle">Appelez-nous</h2>
          <a href="tel:+330492291900" class="card-body underline">04 00 00 00 00</a>
          <a href="mailto:lgnice@laser-game-nice.fr" class="card-body underline">commercial@laser-game-nice.fr</a>
        </div>
        <div class="h-full flex flex-col items-center justify-center">
          <div class="h-full w-[2px] color-low-white" />
        </div>
        <div class="flex flex-col lg:px-12 xl:px-20">
          <FormField v-model="formData.name" placeholder="Prénom et Nom" fieldName="John Doe" />
          <div class="py-0.5" v-if="isError" />
          <p className="error-text" v-if="isError">Veuillez entrer un nom valide.</p>
          <div class="py-2"></div>
          <FormField v-model="formData.email" placeholder="Adresse E-mail" fieldName="john@gmail.com" @blur="validateField('email')" />
          <div class="py-0.5" v-if="isError" />
          <p className="error-text" v-if="isError">Veuillez entrer un email valide.</p>
          <div class="py-2"></div>
          <FormField v-model="formData.message" placeholder="Votre message" fieldName="Ecrivez-votre message..." multiline :rows="5" @blur="validateField('message')" />
          <div class="py-0.5" v-if="isError" />
          <p className="error-text" v-if="isError">Veuillez entrer un message.</p>
          <div class="py-4"></div>
          <Button
            text="Réserver"
            :onClick="
              () => {
                handleSubmit();
              }
            "
            className="blue-button w-full"
          />
          <div class="py-0.5" v-if="isSuccess" />
          <p className="success-text" v-if="isSuccess">Votre message a été envoyé avec succès.</p>
        </div>
      </WhiteCard>
    </div>

    <div class="w-full flex lg:hidden relative py-24 lg:py-0 items-center justify-center px-12">
      <div class="absolute top-[50%] z-0 transform right-1/2 translate-x-1/2 -translate-y-1/2 z-0 w-[150px] h-[150px] rounded-full red sm-blured-box" />
      <div class="absolute top-0 z-0 transform right-0 z-0 w-[100px] h-[100px] rounded-full blue sm-blured-box" />
      <div class="absolute top-[50%] z-0 transform left-0 z-0 w-[120px] h-[120px] rounded-full yellow sm-blured-box" />
      <WhiteCard className="w-full flex flex-col z-[100] gap-y-6 items-center">
        <div class="flex flex-col lg:px-12 xl:px-20 items-center">
          <h1 class="sm-main-title text-center">Contactez nous</h1>
          <div class="py-1" />
          <p class="white-body text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dapibus nibh ut nisi gravida dictum.</p>
          <div class="py-3" />
          <h2 class="main-subtitle">Appelez-nous</h2>
          <a href="tel:+330492291900" class="card-body underline">04 00 00 00 00</a>
          <a href="mailto:lgnice@laser-game-nice.fr" class="card-body underline">commercial@laser-game-nice.fr</a>
        </div>
        <div class="w-full flex flex-col items-center justify-center">
          <div class="w-full h-[2px] color-low-white" />
        </div>
        <div class="w-full flex flex-col lg:px-12 xl:px-20">
          <FormField v-model="formData.name" placeholder="Prénom et Nom" fieldName="John Doe" />
          <div class="py-0.5" v-if="isError" />
          <p className="error-text" v-if="isError">Veuillez entrer un nom valide.</p>
          <div class="py-2"></div>
          <FormField v-model="formData.email" placeholder="Adresse E-mail" fieldName="john@gmail.com" @blur="validateField('email')" />
          <div class="py-0.5" v-if="isError" />
          <p className="error-text" v-if="isError">Veuillez entrer un email valide.</p>
          <div class="py-2"></div>
          <FormField v-model="formData.message" placeholder="Votre message" fieldName="Ecrivez-votre message..." multiline :rows="5" @blur="validateField('message')" />
          <div class="py-0.5" v-if="isError" />
          <p className="error-text" v-if="isError">Veuillez entrer un message.</p>
          <div class="py-4"></div>
          <Button
            text="Réserver"
            :onClick="
              () => {
                handleSubmit();
              }
            "
            className="blue-button w-full"
          />
          <div class="py-0.5" v-if="isSuccess" />
          <p className="success-text" v-if="isSuccess">Votre message a été envoyé avec succès.</p>
        </div>
      </WhiteCard>
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
              className="px-6 !h-[60px] w-full md:w-auto red-button"
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
                  onClickReservations('Mougins');
                }
              "
              className="px-6 !h-[60px] w-full md:w-auto red-button"
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
import FormField from "~/components/FormField.vue";

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

const formData = reactive({
  name: "",
  email: "",
  message: "",
});

const fieldErrors = reactive({
  name: false,
  email: false,
  message: false,
});

const isLoading = ref(false);
const isError = ref(false);
const isSuccess = ref(false);

const validateField = (field) => {
  if (!formData[field].trim()) {
    fieldErrors[field] = true;
    return false;
  } else {
    fieldErrors[field] = false;
    return true;
  }
};

const validateForm = () => {
  const fields = ["name", "email", "message"];
  const isValid = fields.every((field) => validateField(field));
  return isValid;
};

const handleSubmit = async () => {
  if (isLoading.value) return;
  isLoading.value = true;
  if (validateForm()) {
    isError.value = false;
    await sendMessage();
  } else {
    isError.value = true;
  }
  isLoading.value = false;
};

const sendMessage = async () => {
  try {
    isSuccess.value = false;
    //TODO
    // const url = "https://us-central1-coachly-dev.cloudfunctions.net/contactEmail";

    // const response = await axios.post(url, {
    //   name: formData.name,
    //   email: formData.email,
    //   message: formData.message,
    // });

    // if (response.data.statusCode != 200) {
    //   throw new Error("Error while sending email");
    // }

    isSuccess.value = true;
    formData.name = "";
    formData.email = "";
    formData.message = "";
  } catch (e) {
    console.error(e);
  }
};
</script>
