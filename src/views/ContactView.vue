<template>
  <div id="contact" class="home-contact">
    <div class="contact-wrapper">
      <h2 v-if="isMobile">Nu ezita sa ne contactezi</h2>

      <div class="contact-image-wrapper" v-if="!isMobile">
        <div class="contact-image"></div>
        <div class="contact-image-content">
          <div class="contact-supratitle">Ai intrebari sau nelamuriri?</div>
          <div class="contact-title">
            Nu ezita sa ne contactezi pe social media, mail sau telefon!
          </div>
        </div>
      </div>
      <div class="contact-container">
        <div class="contact-container-bg"></div>
        <contact-form />
      </div>
    </div>
  </div>
</template>
<script setup>
import ContactForm from "../components/ContactForm.vue";
import { computed, ref } from "vue";

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
.home-contact {
  width: 100%;
  height: 100vh;
  /* background: var(--accent); */
  background: linear-gradient(var(--dark), var(--accent));
}
.home-contact {
  position: relative;
}

.contact-top-shadow {
  width: 55%;
  height: 1vh;
  top: -5px;
  position: absolute;
  z-index: 2;
  background: var(--accent);
  filter: drop-shadow(0px 3px 2px rgba(0, 0, 0, 0.5));
}

.contact-container {
  width: 65%;
  height: 100vh;
  position: absolute;
  z-index: 2;
  top: 0;
  right: 0;
  filter: drop-shadow(-5px 0px 2px rgba(0, 0, 0, 0.5));
  display: flex;
  justify-content: center;
  align-items: center;
}

.contact-container-bg {
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: -1;
  background: linear-gradient(var(--dark), var(--accent));
  clip-path: polygon(25% 0%, 100% 0%, 100% 100%, 25% 100%, 0% 50%);
}

.contact-image-wrapper {
  width: 100%;
  height: 100vh;
  background-size: contain;
  position: relative;
  z-index: 0;
}

.contact-image {
  width: 100%;
  height: 100vh;
  background-image: url("../assets/img/michael-wilson-Wp7wotWlbBk-unsplash.jpg");
  position: absolute;
  filter: blur(3px);
}

.contact-image-content {
  width: 30%;
  position: absolute;
  top: 35%;
  left: 7%;
  z-index: 5;
  text-align: left;
  text-shadow: 1px 1px 1px #000;
}

.contact-supratitle {
  color: white;
  font-size: 2rem;
}

.contact-title {
  color: white;
  font-size: 3rem;
}
/* 
.contact-card-wrapper {
  width: 65%;
  display: flex;
  flex-flow: row wrap;
  position: absolute;
  top: 20%;
  right: 1rem;
  gap: 5rem;
}

.contact-card {
  width: 250px;
  height: 300px;
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
  display: flex;
  flex-flow: column;
  align-items: center;
  gap: 1rem;
  position: relative;
  z-index: 2;
}

.contact-card h2 {
  margin: 1rem 0 0 0;
}

.facebook-card {
  background-color: #3b5998;
}

.wapp-card {
  background-color: #25d366;
}

.mail-card {
  background-color: #00acee;
}

.phone-card {
  background-color: #dd4b39;
}

.contact-svg {
  width: 150px;
  height: auto;
  fill: #fff;
}

.contact-card-text {
  width: 100%;
  text-align: center;
} */


@media screen and (max-width: 1366px) {
  .contact-card-wrapper {
    gap: 1rem;
    top: 10%;
  }
  .contact-card {
    width: 200px;
    height: 250px;
    padding-bottom: 1rem;
  }
}
@media screen and (max-width: 1024px) {
  .contact-supratitle {
    font-size: 1.5rem;
  }
  .contact-title {
    font-size: 2.3rem;
  }
}


@media screen and (max-width: 414px) and (orientation: portrait),
  screen and (max-width: 915px) and (orientation: landscape) {
  .home-contact {
    
    display: flex;
  }

  .contact-wrapper h2 {
    width: 135%;
    text-align: center;
  }

  .contact-container-bg {
    height: initial;
  }

  .contact-container {
    width: 100%;
  }
  .contact-container-bg {
    clip-path: none !important;
  }

  .contact-card {
    width: 170px;
    height: 200px;
    padding-bottom: 1rem;
  }

  .contact-card-wrapper {
    width: 90%;
    gap: 1rem;
  }

  .contact-card-text {
    font-size: 0.8rem;
  }
}


@media screen and (max-width: 384px) and (orientation: portrait) {
  .contact-card {
    width: 160px;
    height: 200px;
    padding-bottom: 1rem;
  }
}
</style>