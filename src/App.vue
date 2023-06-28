<template>
  <div id="app-container" v-if="store.hasLoaded">
    <!-- Mobile -->
    <header class="mobile-header" v-if="isMobile && (store.noShow === false)">
      <svg-icon
        class="mobile-menu-button"
        :iconPath="Icons.menuIcon"
        @click="sidebarVisible = !sidebarVisible"
      />
      <div class="mobile-logo-container">
        <svg-icon
          class="header-logo"
          :iconPath="Icons.logoIcon"
          :viewBox="`0 0 40 40`"
        />
      </div>
    </header>
    <Sidebar v-model:visible="sidebarVisible">
      <div class="sidebar-container">
        <div class="sidebar-logo-container">
          <svg-icon
            class="header-logo"
            :iconPath="Icons.logoIcon"
            :viewBox="`0 0 40 40`"
          />
        </div>
        <ul @click="sidebarVisible = false">
          <li>
            <router-link to="/" class="mobile-nav">Acasa</router-link>
          </li>
          <li>
            <router-link to="/servicii" class="mobile-nav">Informatii Servicii</router-link>
          </li>
          <li>
            <router-link to="/contact" class="mobile-nav">Contact</router-link>
          </li>
        </ul>
      </div>
    </Sidebar>
    <!-- Desktop -->
    <header
      class="desktop-header"
      :class="{ 'scrolled-header': isScrolled }"
      v-if="!isMobile && (store.noShow === false)"
    >
      <div class="header-background">
        <ul>
          <router-link to="/" class="nav-link">Acasa</router-link>
          <router-link to="/servicii" class="nav-link"
            >Informatii Servicii</router-link
          >
          <router-link to="/contact" class="nav-link">Contact</router-link>
        </ul>
      </div>
    </header>

    <div
      class="header-logo-container"
      :class="{ 'scrolled-logo': isScrolled }"
      v-if="!isMobile && (store.noShow === false)"
    >
      <svg-icon
        class="header-logo"
        :iconPath="Icons.logoIcon"
        :viewBox="`0 0 40 40`"
      />
    </div>

    <main>
      <router-view />
    </main>
    <footer v-if="store.noShow === false">
      <div class="footer-container">
        <div class="footer-logo-container">
          <svg-icon
            class="footer-logo"
            :iconPath="Icons.logoIcon"
            :viewBox="`0 0 40 40`"
          />
        </div>
        <div class="footer-title">Fotovoltaice On Grid</div>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque dolore facere quibusdam cum molestias, perferendis architecto ipsum, mollitia totam, iusto impedit aut quam consectetur harum laborum fugiat qui maxime. Possimus?</p>
      </div>
      <div class="footer-container">
        <ul>
          <li><svg-icon class="footer-icon" :iconPath="Icons.phoneIcon"/> 0755 555 555</li>
          <li><svg-icon class="footer-icon" :iconPath="Icons.mailIcon"/> fotovoltaice@example.com</li>
          <li><svg-icon class="footer-icon" :iconPath="Icons.fbIcon"/> facebook.com/fotovoltaice_on_grid</li>
          <li><svg-icon class="footer-icon" :iconPath="Icons.wappIcon"/> 0755 555 555</li>  
        </ul>
      </div>
      <div class="footer-container">
        <ul>
          <router-link to="/" class="footer-link">Acasa</router-link>
          <router-link to="/servicii" class="footer-link">Informatii Servicii</router-link>
          <router-link to="/contact" class="footer-link">Contact</router-link>
        </ul>
      </div>
    </footer>
    <ScrollTop />
  </div>
  <div class="preload" v-if="!store.hasLoaded && (store.noShow === false)">
    <div class="preload-logo-container">
      <svg-icon
        class="preload-logo"
        :iconPath="Icons.logoIcon"
        :viewBox="`0 0 40 40`"
      ></svg-icon>
    </div>
    <div class="preload-logo-title" ref="preloadTitle">Fotovoltaice On Grid</div>
  </div>
</template>
<script setup>
import { computed, onMounted, ref } from "vue";
import { useAppStore } from "./store/index.js";
import Icons from "./assets/modules/Icons";
import SvgIcon from "./components/SvgIcon.vue";
import ScrollTop from "primevue/scrolltop";
import Sidebar from "primevue/sidebar";

const store = useAppStore();
let preloadTitle = ref(null);
let isScrolled = ref(false);
let sidebarVisible = ref(false);

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
  if (isMobile.value === false) {
    window.addEventListener("scroll", () => {
      handleScroll();
    });
  }
});
function handleScroll() {
  isScrolled.value = window.pageYOffset > 0;
}

function toggleLink(event) {
  let navLinks = document.querySelectorAll(".nav-link");
  for (const link of navLinks) {
    link.classList.remove("active-nav-link");
  }
  let nav = event.target;
  nav.classList.add("active-nav-link");
}

function toggleNav(event) {
  let navLinks = document.querySelectorAll(".mobile-nav");
  for (const link of navLinks) {
    link.classList.remove("active-nav");
  }
  let nav = event.target;
  nav.classList.add("active-nav");
}
</script>
<style>
@import "./assets/css/preload.css";
@import "./assets/css/sidebar.css";
@import "./assets/css/mobile-nav.css";
@import "./assets/css/footer.css";

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
  margin: 0 !important;
}

.scrolled-header .header-background {
  clip-path: none;
}
.scrolled-header .header-background ul {
  margin-left: 6rem;
}

.scrolled-logo {
  width: 40px !important;
  height: 40px !important;
  position: fixed !important;
  z-index: 12 !important;
  top: 5px !important;
  box-shadow: none !important;
}

.scrolled-logo .header-logo {
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

.router-link-exact-active {
  color: var(--highlight) !important;
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

@media screen and (max-width: 1366px) {
  .header-logo-container {
    top: 0.5rem;
  }
  .desktop-header {
    margin: 0.5rem;
  }
}
</style>
