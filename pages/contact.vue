<template>
  <div class="w-full relative overflow-x-hidden">
    <Navbar />

    <!-- Main Image -->
    <div class="hidden lg:flex">
      <img src="@/static/images/main_home.png" alt="Loisir 06 Main Image" class="absolute top-0 z-0 w-[100wh]" width="100%" />
    </div>

    <div class="w-full h-[85vh] hidden lg:flex relative items-center justify-center px-24">
      <div class="absolute top-[50%] z-0 transform right-1/2 translate-x-1/2 -translate-y-1/2 z-0 w-[300px] h-[300px] rounded-full yellow blured-box" />
      <WhiteCard className="w-full grid grid-cols-[48%_4%_48%] z-[100] items-center">
        <div class="flex flex-col lg:px-12 xl:px-20">
          <h1 class="sm-main-title">Contactez nous</h1>
          <div class="py-1" />
          <p class="white-body">Une question particulière ? Contactez nous directement par téléphone ou par email.</p>
          <div class="py-3" />
          <h2 class="main-subtitle">Appelez-nous</h2>
          <a href="tel:+330423320155" class="card-body underline">Nice Lingostière: 04 23 32 01 55</a>
          <a href="tel:+330492281653" class="card-body underline">Mougins: 04 92 28 16 53</a>
          <a href="mailto:lgnice@lasergamenice.fr" class="card-body underline">lgnice@lasergamenice.fr</a>
        </div>
        <div class="h-full flex flex-col items-center justify-center">
          <div class="h-full w-[2px] color-low-white" />
        </div>
        <div class="flex flex-col lg:px-12 xl:px-20">
          <FormField v-model="formData.name" placeholder="John Doe" fieldName="Prénom et Nom" />
          <div class="py-0.5" v-if="isError" />
          <p className="error-text" v-if="isError">Veuillez entrer un nom valide.</p>
          <div class="py-2"></div>
          <FormField v-model="formData.email" placeholder="john@gmail.com" fieldName="Adresse E-mail" @blur="validateField('email')" />
          <div class="py-0.5" v-if="isError" />
          <p className="error-text" v-if="isError">Veuillez entrer un email valide.</p>
          <div class="py-2"></div>
          <FormField v-model="formData.message" placeholder="Ecrivez-votre message..." fieldName="Votre message" multiline :rows="5" @blur="validateField('message')" />
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
            className="yellow-button w-full"
          />
          <div class="py-0.5" v-if="isSuccess" />
          <p className="success-text" v-if="isSuccess">Votre message a été envoyé avec succès.</p>
        </div>
      </WhiteCard>
    </div>

    <div class="w-full flex lg:hidden relative py-24 lg:py-0 items-center justify-center px-12">
      <div class="absolute top-[50%] z-0 transform right-1/2 translate-x-1/2 -translate-y-1/2 z-0 w-[150px] h-[150px] rounded-full red sm-blured-box" />
      <div class="absolute top-0 z-0 transform right-0 z-0 w-[100px] h-[100px] rounded-full yellow sm-blured-box" />
      <div class="absolute top-[50%] z-0 transform left-0 z-0 w-[120px] h-[120px] rounded-full yellow sm-blured-box" />
      <WhiteCard className="w-full flex flex-col z-[100] gap-y-6 items-center">
        <div class="flex flex-col lg:px-12 xl:px-20 items-center">
          <h1 class="sm-main-title">Contactez nous</h1>
          <div class="py-1" />
          <p class="white-body">Une question particulière ? Contactez nous directement par téléphone ou par email.</p>
          <div class="py-3" />
          <h2 class="main-subtitle">Appelez-nous</h2>
          <a href="tel:+330423320155" class="card-body underline">Nice Lingostière: 04 23 32 01 55</a>
          <a href="tel:+330492281653" class="card-body underline">Mougins: 04 92 28 16 53</a>
          <a href="mailto:lgnice@lasergamenice.fr" class="card-body underline">lgnice@lasergamenice.fr</a>
        </div>
        <div class="w-full flex flex-col items-center justify-center">
          <div class="w-full h-[2px] color-low-white" />
        </div>
        <div class="w-full flex flex-col lg:px-12 xl:px-20">
          <FormField v-model="formData.name" placeholder="John Doe" fieldName="Prénom et Nom" />
          <div class="py-0.5" v-if="isError" />
          <p className="error-text" v-if="isError">Veuillez entrer un nom valide.</p>
          <div class="py-2"></div>
          <FormField v-model="formData.email" placeholder="john@gmail.com" fieldName="Adresse E-mail" @blur="validateField('email')" />
          <div class="py-0.5" v-if="isError" />
          <p className="error-text" v-if="isError">Veuillez entrer un email valide.</p>
          <div class="py-2"></div>
          <FormField v-model="formData.message" placeholder="Ecrivez-votre message..." fieldName="Votre message" multiline :rows="5" @blur="validateField('message')" />
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
            className="yellow-button w-full"
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
    //TODO !!!!
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
