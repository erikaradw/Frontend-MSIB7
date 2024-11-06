import { createRouter, createWebHistory } from 'vue-router';
import { ref } from 'vue';
// import AppLayout from '@/layouts/AppLayout.vue'
const AppLayout = ()=>import("@/layouts/AppLayout.vue")
const Dashboard = ()=>import("@/components/Dashboard-component/Dashboard.vue")
// import Dashboard from '@/components/Dashboard-component/Dashboard.vue'
// const DashboardEachOrder = ()=>import('@/components/Dashboard-component/Dashboard-OrderList-component/dashboard-eachOrder.vue')
const Notfound = ()=>import('@/components/Notfound.vue');
import { useScrollPositionValue } from "../pinia-store/scrollPositionStore";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition){
    if(to.hash){
      return {
        el: to.hash,
        behavior: 'smooth'
      }
    }
    if(savedPosition){
        return {
          savedPosition,
          behavior: 'smooth'
        }
    }
    const scrollStore = useScrollPositionValue();
    const scrollPosition = scrollStore.getScrollPosition
    console.log(scrollPosition)
    return { left: 0, top: scrollPosition, behavior: 'smooth'}
  },
  routes: [
    {
      path: '/',
      name: 'app-layout',
      component: AppLayout,
      redirect: { name: 'dashboard'},
      children: [
        {
          path: 'dashboard',
          name: 'dashboard',
          component: Dashboard
        },
        {
          path: '/:pathMatch(.*)*',
          name: '404-page',
          component: Notfound
        }
    
      ],
    },
  ],
});

// Define a ref to track the loading state
const loading = ref(true);

// Hook into navigation events to manage loading state
router.beforeEach((to, from, next) => {
  loading.value = true; // Set loading to true on navigation start
  next();
});

router.afterEach(() => {
  loading.value = false; // Set loading to false on navigation complete
});

export {router, loading };
