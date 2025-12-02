<script setup>
import PriceDisplay from './PriceDisplay.vue';
import AddToCartButton from './AddToCartButton.vue';

// 1. Definimos las PROPS que esperamos recibir del padre (ProductCard.vue)
defineProps({
  type: String,
  name: String,
  description: String,
  price: Object
});
</script>

<template>
  <div class="px-4 pb-5">
    <p class="product-card__type">{{ type }}</p>
    <h1 class="product-card__name">{{ name }}</h1>
    <p class="product-card__description">{{ description }}</p>
    
    <PriceDisplay :price="price" />
    <AddToCartButton />
  </div>
</template>

<style scoped>
.product-card__type {
  @apply uppercase tracking-[0.42em] mt-4 text-DarkGrayishBlue;
}
.product-card__name {
  @apply mt-[10px] leading-[2.1rem] font-Fraunces text-[32px] font-bold;
  @apply lg:mt-[19px] lg:leading-[2rem];
}
.product-card__description {
  @apply mt-[17px] font-Montserrat text-sm leading-[1.4rem] text-DarkGrayishBlue;
  @apply lg:mt-[20px];
}
</style>