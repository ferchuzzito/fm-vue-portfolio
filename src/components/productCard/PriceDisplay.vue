<script setup>
defineProps({
  price: Object
});
</script>


<template>
  <div class="product-card__price">
    <p class="product-card__price-discount">{{ price.current }}</p>
    <p class="product-card__price-before">{{ price.before }}</p>
  </div>
</template>

<style scoped>
.product-card__price {
  @apply mt-[17px] flex items-center;
  @apply lg:mt-[23px];
}
.product-card__price-discount {
  @apply text-DarkCyan font-Fraunces text-[32px] font-bold;
}
.product-card__price-before {
  @apply ml-[1.2rem] line-through font-Montserrat text-sm text-DarkGrayishBlue;
}
</style>