import { createRouter, createWebHashHistory } from 'vue-router';

// 1. Importa tus componentes de desafío
import Home from '@/views/Home.vue';
import OrderSummary from '@/views/OrderSummary.vue';
import ProductCard from '@/Views/ProductCard.vue';
import QrCodeCard from '../Views/QrCodeCard.vue';

const routes = [
  {
    path: '/',                 // Cuando la URL es la raíz (/)
    name: 'Home',
    component: Home,
    redirect: '/order-summary-component',
  },
  {
    path: '/order-summary-component',
    name: 'OrderSummaryChallenge',
    component: OrderSummary,
  },
  {
    path: '/product-card-component',
    name: 'ProductCardChallenge',
    component: ProductCard,
  },
    {
    path: '/qrcode-card-component',
    name: 'QrCodeCardChallenge',
    component: QrCodeCard,
  },
];

// 2. Crea y configura el router
const router = createRouter({
  // Necesario para GitHub Pages: usa hash (#) en la URL
  history: createWebHashHistory('/nombre-de-tu-repositorio/'),
  routes
});

export default router;