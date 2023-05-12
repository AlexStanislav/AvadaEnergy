<template>
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
            Un sistem de generare a energiei electrice utilizand panouri solare
            fotovoltaice, conectate direct la reteaua electrica principala,
            permitand producerea si furnizarea de energie in retea, cu
            posibilitatea de a compensa sau vinde surplusul de energie.
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
            energie electrică. În perioadele în care nu există suficientă lumină
            solară sau bateriile sunt descărcate, sistemul poate comuta automat
            la alimentarea din rețeaua electrică.
          </div>
        </template>
      </Card>
    </div>
  </div>
</template>
<script setup>
import Card from "primevue/card";
import Icons from "../assets/modules/Icons";
import SvgIcon from "./SvgIcon.vue";
</script>
<style>
.service{
  padding: 5rem 0;
}
.service-type h1 {
  color: var(--accent);
  font-family: "Poppins Semi Bold", sans-serif;
  font-size: 3rem;
  text-align: center;
  text-shadow: 1px 1px 3px var(--dark);
}

.service-card-container {
  margin-top: 8rem;
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
</style>