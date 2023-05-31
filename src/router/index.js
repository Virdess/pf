import { createRouter, createWebHistory } from '@ionic/vue-router';
import HomeView from "../views/HomeView.vue";
import CategoryView from "../views/CategoryView.vue";
import ProductView from "../views/ProductView.vue";
import CartView from "@/views/CartView.vue";
import LoginPage from "@/components/organisms/LoginPage.vue"

const routes = [
  {
    path:'/',
    redirect:'/login'
  },
  {
    path:'/login',
    name:"LoginPage",
    component:LoginPage
  },
  {
    path: "/home",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/category/:selectedCategory",
    name: "Category",
    component: CategoryView,
  },
  {
    path: "/products/:id",
    name: "Product",
    component: ProductView,
    props: true,
  },
  {
    path: "/cart",
    name: "Cart",
    component: CartView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
<script></script>;
export default router;
