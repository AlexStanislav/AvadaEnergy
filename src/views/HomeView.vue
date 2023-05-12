<template>
  <div class="home">
    <div id="home" class="home-form-wrapper">
      <div class="home-form">
        <h1>Solicita o oferta estimativa</h1>
        <div class="personal-content">
          <InputText
            v-for="(formInput, index) of formValues.personalInfo"
            :key="index"
            :id="formInput.label"
            v-model="formInput.value"
            :placeholder="formInput.label"
          />
        </div>
        <div class="project-content">
          <InputText
            v-for="(formInput, index) of formValues.projectInfo"
            :key="index"
            :class="formInput.class"
            :id="formInput.label"
            v-model="formInput.value"
            :placeholder="formInput.label"
          />
        </div>
        <div class="details-content">
          <div class="budget-wrapper">
            <label for="budget-input">Buget - lei</label>
            <div class="input-wrapper-budget">
              <InputText
                id="budget-input"
                v-model.number="budget"
                class="w-full"
              />
              <Slider v-model="budget" :min="1000" :max="10000" />
            </div>
          </div>
          <div class="term-wrapper">
            <label for="term-input">Termeni instalare</label>
            <Dropdown
              class="term-select"
              :options="terms"
              v-model="formValues.selectedTerm"
              placeholder="Alege termen"
            />
          </div>
        </div>
        <span class="p-float-label">
          <Textarea v-model="value" :rows="isMobile ? 5 : 2" :cols="isMobile ? 33 : 50" />
          <label>Alte detalii</label>
        </span>
        <Button label="Trimite" />
      </div>
      <div class="home-image-container" v-if="!isMobile">
        <div
          class="home-image-content"
          :class="{ 'home-image-content-active': textLoaded }"
        >
          <h2>Panouri fotovoltaice</h2>
          <h1>Mai multa energie, mai putine costuri</h1>
        </div>
        <img
          class="home-image"
          src="../assets/img/sungrow-emea-ceTSHQ0qars-unsplash.jpg"
        />
      </div>
    </div>
    <div class="service-type">
      <img
        class="service-bg"
        src="../assets/img/american-public-power-association-XGAZzyLzn18-unsplash.jpg"
      />
      <div class="separator-container">
        <svg
          id="wave"
          style="transform: rotate(180deg); transition: 0.3s"
          viewBox="0 0 1440 130"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
              <stop stop-color="var(--accent)" offset="0%"></stop>
              <stop stop-color="var(--accent)" offset="100%"></stop>
            </linearGradient>
          </defs>
          <path
            style="transform: translate(0, 0px); opacity: 1"
            fill="url(#sw-gradient-0)"
            d="M0,91L480,0L960,91L1440,26L1920,39L2400,104L2880,78L3360,39L3840,0L4320,104L4800,39L5280,39L5760,78L6240,26L6720,65L7200,78L7680,78L8160,104L8640,91L9120,13L9600,78L10080,65L10560,104L11040,104L11520,13L11520,130L11040,130L10560,130L10080,130L9600,130L9120,130L8640,130L8160,130L7680,130L7200,130L6720,130L6240,130L5760,130L5280,130L4800,130L4320,130L3840,130L3360,130L2880,130L2400,130L1920,130L1440,130L960,130L480,130L0,130Z"
          ></path>
        </svg>
        <!-- <svg-icon class="wave-separator" :iconPath="Icons.waveTop" viewBox="0 0 500 150"/> -->
      </div>
      <DeferredContent>
        <ServiceSection />
      </DeferredContent>
      <div class="separator-container-bottom">
        <svg
          id="wave"
          style="transform: rotate(0deg); transition: 0.3s"
          viewBox="0 0 1440 130"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
              <stop
                stop-color="rgba(62, 243, 151.018, 1)"
                offset="0%"
              ></stop>
              <stop
                stop-color="rgba(141.578, 121.023, 75.586, 1)"
                offset="100%"
              ></stop>
            </linearGradient>
          </defs>
          <path
            style="transform: translate(0, 0px); opacity: 1"
            fill="url(#sw-gradient-0)"
            d="M0,91L480,0L960,91L1440,26L1920,39L2400,104L2880,78L3360,39L3840,0L4320,104L4800,39L5280,39L5760,78L6240,26L6720,65L7200,78L7680,78L8160,104L8640,91L9120,13L9600,78L10080,65L10560,104L11040,104L11520,13L11520,130L11040,130L10560,130L10080,130L9600,130L9120,130L8640,130L8160,130L7680,130L7200,130L6720,130L6240,130L5760,130L5280,130L4800,130L4320,130L3840,130L3360,130L2880,130L2400,130L1920,130L1440,130L960,130L480,130L0,130Z"
          ></path>
        </svg>
        <!-- <svg-icon class="wave-separator-bottom" :iconPath="Icons.waveBottom" viewBox="0 0 500 150"/> -->
      </div>
    </div>
    <div id="contact" class="home-contact">
      <DeferredContent>
        <ContactSection />
      </DeferredContent>
    </div>
  </div>
</template>
<script setup>
import InputText from "primevue/inputtext";
import Slider from "primevue/slider";
import { computed, onMounted, ref } from "vue";
import Dropdown from "primevue/dropdown";
import Textarea from "primevue/textarea";
import Button from "primevue/button";
import ServiceSection from "../components/ServiceSection.vue";
import ContactSection from "../components/ContactSection.vue";
import DeferredContent from "primevue/deferredcontent";
import SvgIcon from "../components/SvgIcon.vue";
import Icons from "../assets/modules/Icons";

let budget = ref(1000);
let terms = ref(["Imediat", "3 luni", "6 luni", "9 luni", "1 an"]);
let textLoaded = ref(false);
let formValues = {
  personalInfo: [
    {
      label: "Nume",
      value: "",
    },
    {
      label: "Companie (optional)",
      value: "",
    },
    {
      label: "Email",
      value: "",
    },
    {
      label: "Telefon",
      value: "",
    },
  ],
  projectInfo: [
    {
      label: "Localitate",
      value: "",
      class: "",
    },
    {
      label: "Judet",
      value: "",
      class: "",
    },
    {
      label: "Adresa instalare",
      value: "",
      class: "address-input",
    },
  ],
  selectedTerm: "",
};

let isMobile = computed(() => {
  if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  ) {
    return true;
  } else {
    return false;
  }
});


onMounted(() => {
  setTimeout(() => {
    textLoaded.value = true;
  }, 1000);
});
</script>
<style>
@import "../assets/css/home-form.css";
@import "../assets/css/home-image.css";

.separator-container {
  width: 100%;
  margin-top: -10px;
  filter: drop-shadow(0px 3px 2px rgba(0, 0, 0, 0.5));
  position: relative;
  z-index: -1;
}
.separator-container-bottom {
  width: 100%;
  margin-bottom: -10px;
  filter: drop-shadow(0px -3px 2px rgba(0, 0, 0, 0.5));
  position: relative;
  z-index: 3;
}

.wave-separator {
  width: 100%;
  fill: var(--accent);
}

.wave-separator-bottom {
  width: 100%;
  fill: var(--accent);
}

.service-type {
  position: relative;
}

.service-bg {
  width: 100%;
  height: 100%;
  position: absolute;
  object-fit: cover;
  opacity: 0.2;
  top: 0;
  left: 0;
  z-index: -1;
}

.home-form-wrapper {
  height: 100vh;
  display: flex;
  flex-flow: row wrap;
  align-content: center;
  justify-content: space-between;
  padding: 10rem;
  background: linear-gradient(var(--dark), var(--accent));
}

.home-form {
  width: 500px;
  padding: 2rem;
  box-sizing: content-box;
  border-radius: var(--border-radius);
  background: #fff;
  box-shadow: var(--box-shadow);
  color: var(--accent);
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  gap: 2rem;
}
</style>