<template>
  <div class="home">
    <div id="home" class="home-wrapper">
      <div class="home-text">
        <h2>Lăsați Soarele să vă plătească facturile!</h2>
        <h1>
          Treceți la solar și începeți să câștigați bani din excesul de energie!
        </h1>
        <div class="cta-container">
          <div class="cta-card cta-services" @click="goToSection('/servicii')">
            Alege instalația potrivită pentru tine!
            <img class="cta-card-image" src="../assets/img/energy.svg">
          </div>
          <div class="cta-card cta-contact" @click="goToSection('/contact')">
            Contactati-ne pentru o oferta estimativa.
            <svg-icon class="cta-card-image" :iconPath="Icons.mailIcon"/>
          </div>
        </div>
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
  </div>
</template>
<script setup>
import { computed, onMounted, ref } from "vue";
import SvgIcon from "../components/SvgIcon.vue";
import Icons from "../assets/modules/Icons";
import router from "../router";

let textLoaded = ref(false);

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

function goToSection(path) {
  router.push(path);
}

</script>
<style>
.home-wrapper {
  height: 100vh;
  display: flex;
  flex-flow: row wrap;
  align-content: center;
  justify-content: space-between;
  padding: 0rem 10rem;
  background: linear-gradient(var(--dark), var(--accent));
}

.home-text{
  width: 40%;
}

.home-text h2{
  line-height: 10px;
  text-shadow: 1px 1px 1px #000;
}

.home-text h1{
  font-size: 3rem;
  margin: 0;
  line-height: 4rem;
    text-shadow: 1px 1px 1px #000;
}

.cta-container{
  display: flex;
  margin-top: 3rem;
  gap: 2rem;
}

.cta-card{
  width: 45%;
  font-size: 1.5rem;
  background: var(--accent);
  text-align: center;
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
  padding: 1rem 2rem;
  position: relative;
  cursor: pointer;
}

.cta-card-image{
  width: 40px;
  height: 40px;
  position: absolute;
  left: 0.25rem;
  top: 0.25rem;
  fill: #dfdfdf;
}

.home-image-container {
  width: 50vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  right: 0;
  filter: drop-shadow(-5px 0px 5px rgba(0, 0, 0, 0.25));
}

.home-image {
  width: 50vw;
  height: 100vh;
  object-fit: cover;
  position: absolute;
  opacity: 0.9;
  clip-path: polygon(25% 0%, 100% 0, 100% 100%, 25% 100%, 0% 50%);
  filter: blur(3px);
}

.home-image-content {
  position: relative;
  z-index: 1;
  right: -3rem;
  text-shadow: 1px 1px 1px #000;
  opacity: 0;
  transition: all 0.8s ease-in-out;
}

.home-image-content-active {
  right: 0;
  opacity: 1;
}

.home-image-content h1 {
  font-size: 4rem;
  width: 30vw;
  margin: 0;
}

.home-image-content h2 {
  margin: 0.5rem 0;
}

@media screen and (max-width: 1366px) {
  .home-image-container {
    width: 35vw;
  }
}
@media screen and (max-width: 1024px) {
  .home-image-container {
    display: none;
  }

  .home-wrapper{
    padding: 2rem 1rem;
    box-sizing: content-box;
  }

  .home-text{
    width: 100%;
  }

  .home-text h1{
    font-size: 2rem;
    line-height: initial;
    text-align: center;
  }
  .home-text h2{
    font-size: 2rem;
    text-align: center;
    line-height: initial;
  }

  .cta-container{
    flex-flow: row wrap;
  }

  .cta-card{
    width: 100%;
    font-size: 1rem;
  }

  .cta-card-image{
    width: 30px;
    left: .5rem;
  }
}
</style>