
<script setup>
import { ref, onMounted } from "vue"
import { useScrollPositionValue } from "../pinia-store/scrollPositionStore";
const store = useScrollPositionValue();

// const scrollPosition = ref(0);

window.addEventListener('scroll', () => {
    store.setScrollPosition(window.scrollY)
//   scrollPosition.value = ;
});
</script>

<style scoped>

</style>