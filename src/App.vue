<template>
  <div id="app-container" v-if="store.hasLoaded">
    <!-- Desktop -->
    <header
      class="desktop-header"
      :class="{ 'scrolled-header': isScrolled }"
      v-if="!isMobile"
    >
      <div class="header-background">
        <ul>
          <a href="#home"><li class="nav-link active-nav-link" @click="toggleLink">Acasa</li></a>
          <a href="#services"><li class="nav-link" @click="toggleLink">Servicii</li></a>
          <a href="#contact"><li class="nav-link" @click="toggleLink">Contact</li></a>
        </ul>
      </div>
    </header>

    <div class="header-logo-container" :class="{ 'scrolled-logo': isScrolled }">
      <svg-icon
        class="header-logo"
        :iconPath="Icons.logoIcon"
        :viewBox="`0 0 40 40`"
      />
    </div>

    <main>
      <router-view />
    </main>
    <footer></footer>
  </div>
  <div class="preload" v-if="!store.hasLoaded">
    <div class="preload-logo-container">
      <svg-icon
        class="preload-logo"
        :iconPath="Icons.logoIcon"
        :viewBox="`0 0 40 40`"
      ></svg-icon>
    </div>
    <div class="preload-logo-title" ref="preloadTitle">Avada Energy</div>
  </div>
</template>
<script setup>
import { computed, onMounted, ref } from "vue";
import { useAppStore } from "./store/index.js";
import Icons from "./assets/modules/Icons";
import SvgIcon from "./components/SvgIcon.vue";

const store = useAppStore();
let preloadTitle = ref(null);
let isScrolled = ref(false);

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
  let logo = document.querySelector(".preload-logo");
  setTimeout(() => {
    logo.classList.add("preload-logo-loaded");
  }, 1500);
  setTimeout(() => {
    preloadTitle.value.classList.add("preload-logo-loaded");
  }, 2000);
  setTimeout(() => {
    store.toggleHasLoaded();
  }, 3000);
  window.addEventListener("scroll", () => {
    handleScroll();
  });
});
function handleScroll() {
  isScrolled.value = window.pageYOffset > 0;
}

function toggleLink(event){
  let navLinks = document.querySelectorAll(".nav-link");
  for (const link of navLinks) {
    link.classList.remove("active-nav-link");
  }
  let nav = event.target
  nav.classList.add("active-nav-link");
}

</script>
<style>
@import "./assets/css/preload.css";
@import "./assets/css/sidebar.css";

.mobile-header {
  width: 100%;
  position: fixed;
  top: 0;
}

.desktop-header {
  width: 50%;
  height: 50px;
  margin: 1rem;
  position: absolute;
  left: 9rem;
  z-index: 12;
  filter: drop-shadow(3px 3px 3px rgba(0, 0, 0, 0.2));
  transition: width 0.2s ease-in-out;
}

.scrolled-header {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  margin: 0;
}

.scrolled-header .header-background{
  clip-path: none;
}
.scrolled-header .header-background ul{
  margin-left: 6rem;
}

.scrolled-logo{
  width: 40px !important;
  height: 40px !important;
  position: fixed !important;
  z-index: 12 !important;
  top: 5px !important;
  box-shadow: none !important;
}

.scrolled-logo .header-logo{
  width: 25px !important;
  width: 25px !important;
}

.header-background {
  width: 100%;
  height: 100%;
  background: var(--accent);
  clip-path: polygon(100% 0%, 97.8% 50%, 100% 100%, 0 100%, 0 0);
  border-radius: 2px;
  position: absolute;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 2rem;
}

.header-background ul {
  margin: 0;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: center;
  list-style: none;
  gap: 5rem;
  font-size: 1.3rem;
}

.header-background ul a {
  text-decoration: none;
  color: white;
  font-family: "Poppins Italic", sans-serif;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
}
.header-background ul li:hover {
  color: var(--highlight);
}

.active-nav-link {
  color: var(--highlight);
}

.menu-bar {
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  gap: 2rem;
  align-items: center;
  background: var(--dark);
  box-shadow: 0px 1px 1px 1px rgba(0, 0, 0, 0.2);
}

.header-logo-container {
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10%;
  background: var(--main);
  padding: 0.3rem;
  margin-left: 2rem;
  position: absolute;
  left: 1.5rem;
  top: 1rem;
  z-index: 1;
  cursor: pointer;
  box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.2);
}

.header-logo {
  width: 30px;
  height: 30px;
  fill: var(--highlight);
  filter: drop-shadow(1px 1px 1px var(--dark));
}

.menu-icon {
  width: 45px;
  fill: var(--main);
  position: absolute;
  left: 1rem;
}

.logo-container {
  width: 35px;
  margin-top: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 100%;
  display: flex;
}

.logo {
  widows: 35px;
}

.logo-title {
  font-family: "Poppins Semi Bold Italic", sans-serif;
  margin-top: 0.2rem;
  font-size: 1.5rem;
  color: var(--main);
}
</style>
