<template>
  <div class="service-type">
    <img
      class="service-bg"
      src="../assets/img/american-public-power-association-XGAZzyLzn18-unsplash.jpg"
    />
    <div class="separator-container" v-if="!isMobile">
      <svg
        id="wave"
        style="transform: rotate(180deg); transition: 0.3s"
        viewBox="0 0 1440 130"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
            <stop stop-color="var(--dark)" offset="0%"></stop>
            <stop stop-color="var(--dark)" offset="100%"></stop>
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

    <div id="services" class="service">
      <h1>Tipuri de instalatii</h1>
      <div class="service-card-container">
        <Card class="service-card">
          <template #header>
            <img class="service-card-image" src="../assets/img/solar.svg" />
          </template>
          <template #title>
            <div class="service-card-title">Off Grid</div>
          </template>
          <template #content>
            <div class="service-card-content">
              Un sistem independent de generare a energiei electrice utilizând
              panouri solare fotovoltaice, fără a fi conectată la rețeaua
              electrică principală. Energia este stocată în baterii pentru a fi
              utilizată în perioadele fără soare sau noaptea.
            </div>
          </template>
        </Card>
        <Card class="service-card">
          <template #header>
            <img class="service-card-image" src="../assets/img/tower.svg" />
          </template>
          <template #title>
            <div class="service-card-title">On Grid</div>
          </template>
          <template #content>
            <div class="service-card-content">
              Un sistem de generare a energiei electrice utilizand panouri
              solare fotovoltaice, conectate direct la reteaua electrica
              principala, permitand producerea si furnizarea de energie in
              retea, cu posibilitatea de a compensa sau vinde surplusul de
              energie.
            </div>
          </template>
        </Card>
        <Card class="service-card">
          <template #header>
            <div class="hybrid-container">
              <img
                class="service-card-image-hybrid img-solar"
                src="../assets/img/solar.svg"
              />
              <div class="img-separator"></div>
              <img
                class="service-card-image-hybrid img-tower"
                src="../assets/img/tower.svg"
              />
            </div>
          </template>
          <template #title>
            <div class="service-card-title">Hibrid</div>
          </template>
          <template #content>
            <div class="service-card-content">
              Un sistem hibrid oferă flexibilitate și siguranță în furnizarea de
              energie electrică. În perioadele în care nu există suficientă
              lumină solară sau bateriile sunt descărcate, sistemul poate comuta
              automat la alimentarea din rețeaua electrică.
            </div>
          </template>
        </Card>
      </div>
    </div>

    <div class="separator-container-bottom" v-if="!isMobile">
      <svg
        id="wave"
        style="transform: rotate(0deg); transition: 0.3s"
        viewBox="0 0 1440 130"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
            <stop stop-color="rgba(62, 243, 151.018, 1)" offset="0%"></stop>
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
</template>
<script setup>
import Card from "primevue/card";
import { computed } from "vue";
import Icons from "../assets/modules/Icons";

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

</script>
<style>

.service-type{
  height: 120vh;
}

.service-bg{
  position: absolute;
  z-index: -1;
  opacity: 0.5;
  width: 100vw;
  height: 120vh;
}

.service-type h1 {
  color: var(--accent);
  font-family: "Poppins Semi Bold", sans-serif;
  font-size: 3rem;
  text-align: center;
  text-shadow: 1px 1px 3px var(--dark);
}

.service-card-container {
  margin-top: 4rem;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  gap: 5rem;
}

.service-card {
  width: 20%;
  box-shadow: var(--box-shadow) !important;
  color: var(--light) !important;
  background: var(--accent) !important;
}

.service-card .p-card-header {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
}
.service-card-title {
  font-size: 2rem;
  text-align: center;
}

.service-card-image {
  width: 200px;
}

.hybrid-container {
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.service-card-image-hybrid {
  width: 120px;
  position: relative;
}

.img-solar {
  top: -20px;
}

.img-tower {
  bottom: -20px;
}

.img-separator {
  width: 100%;
  height: 3px;
  background: var(--light);
  transform: rotateZ(125deg);
  margin-left: -60px;
  margin-right: -60px;
}

.service-card-content {
  text-align: justify;
  text-justify: distribute;
}

.separator-container-bottom {
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: -20%;
}

.separator-container-bottom #wave{
  position: absolute;
  bottom: 0;
}

@media screen and (max-width: 1366px) {
  .service-card {
    width: 26%;
    margin: auto;
  }
}

@media screen and (max-width: 1024px) {

  .service-type{
    position: absolute;
  }

  .service{
    background: linear-gradient(var(--dark), var(--accent));
    padding: 2rem 0;
  }

  .service h1{
    color: var(--main);
  }

  .service-card {
    width: 35%;
  }

  .service-bg {
    width: auto;
    height: 100%;
    display: none;
  }
}

@media screen and (max-width: 414px) and (orientation: portrait) {
  .service-card-container {
    flex-flow: column wrap;
  }

  .service-card {
    width: 90%;
    margin: auto;
  }
}

@media screen and (max-width: 915px) and (orientation: landscape) {
  .service-card {
    width: 40%;
    margin: auto;
  }
}
</style>