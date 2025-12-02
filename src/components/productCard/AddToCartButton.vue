<template>
  <div class="product-card__btn" @click="addToCart">
    <img src="/productcard/icon-cart.svg" alt="Ícono de Carrito" />
    <a href="#">Add to Cart</a>
  </div>
</template>

<script setup>
// Aquí iría la lógica (método) para añadir el producto al carrito
const addToCart = () => {
  console.log("Producto añadido!");
  // Emitir un evento al padre o usar un Store (Pinia)
}
</script>

<style scoped>
.product-card__btn {
  @apply mt-[19px] py-3 bg-DarkCyan hover:bg-DarkCyanD hover:cursor-pointer text-white text-center rounded-lg flex items-center justify-center space-x-2;
}
</style>