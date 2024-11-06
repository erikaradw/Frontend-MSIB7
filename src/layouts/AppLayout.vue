<template>
  <div class="appLayout-wrapper" :style="{ backgroundColor: `${bgColor}` }">
    <Navbar />
    <div class="appLayout-display">
      <RouterView />
    </div>
  </div>
</template>

<script setup>
import Navbar from "@/components/Navbar-component/Navbar.vue";
import { ref, provide, watch, onBeforeMount, onMounted } from "vue";
import { useAppMode } from "../pinia-store/AppModeStore";
// import { useScrollPositionValue } from "../pinia-store/scrollPositionStore";
// const scrollStore = useScrollPositionValue();

const store = useAppMode();
const appMode = store.getAppMode;

const isLightMood = ref();
// const isNavbarWrapped = ref(false);

const bgColor = ref();

onBeforeMount(() => {
  const initialAppMode = localStorage.getItem("appMode");
  if (initialAppMode) {
    const jsonAppMode = JSON.parse(initialAppMode);
    store.setAppMode(jsonAppMode);
    isLightMood.value = jsonAppMode;
    return;
  }
  isLightMood.value = appMode;
});

onMounted(() => {
  if (isLightMood.value === true) {
    bgColor.value = `var(--color-set-30)`;
  } else if (isLightMood.value === false) {
    bgColor.value = `var(--color-set-31)`;
  }

  // window.addEventListener("scroll", () => {
  //   scrollStore.setScrollPosition(window.scrollY);
  // });
});

watch(isLightMood, (currentIconName, prevIconName) => {
  if (currentIconName === true) {
    bgColor.value = `var(--color-set-30)`;
  } else if (currentIconName === false) {
    bgColor.value = `var(--color-set-31)`;
  }
});

provide("isLightMood", isLightMood);
// provide("isNavbarWrapped", isNavbarWrapped);

provide("emitAppMood", (eventName, data) => {
  store.setAppMode(data);
  isLightMood.value = data;
});
// provide("emitNavStatus", (eventName, data) => {
//   isNavbarWrapped.value = data;
// });

// const handleDropDown = (e) => {
//   if (e === false) {
//     isNavbarWrapped.value = e;
//   }
// };
</script>

<style scoped>
.appLayout-wrapper {
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

@media screen and (max-width: 768px) {
  .appLayout-display {
    width: 100%;
    height: 100%;
    min-height: 100vh;
    padding-top: 5.125rem;
  }
}
@media screen and (min-width: 769px) {
  .appLayout-wrapper {
    width: 100%;
    height: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: row;
  }

  .appLayout-display {
    width: 100%;
    height: 100%;
    min-height: 100vh;
    padding-left: 5rem;
  }
}
</style>
