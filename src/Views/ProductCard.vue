<script setup>
import ProductImage from '@/components/productcard/ProductImage.vue';
import ProductDetails from '@/components/productcard/ProductDetails.vue';
import { ref } from 'vue';

// 1. Definimos los datos (el texto de la tarjeta)
const product = ref({
  type: "PERFUME",
  name: "Gabrielle Essence Eau De Parfum",
  description: "A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.",
  price: {
    current: "$149.99",
    before: "$169.99"
  },
  // image: { desktop: '...', mobile: '...' } // Opcional, si lo gestionas con <img>
});
</script>

<template>
  <main class="page-container">
  <section class="product-card">
    <ProductImage /> 
    <ProductDetails 
      :type="product.type"
      :name="product.name"
      :description="product.description"
      :price="product.price"
    />
  </section>
  </main>
</template>

<style scoped>
.page-container {
@apply h-screen w-screen flex flex-col justify-center items-center font-Montserrat bg-Cream text-sm
}
.product-card {
  @apply bg-white max-w-[342px] rounded-lg mb-5;
  @apply lg:max-w-[600px] lg:flex lg:flex-row;
}
</style>