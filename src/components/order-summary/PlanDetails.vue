<script setup>
// 1. Definición de Props: Indica que este componente espera un objeto llamado 'plan'
//    que contendrá el nombre, precio y texto del enlace.
defineProps({
  plan: {
    type: Object,
    required: true // Es crucial para este componente tener los datos del plan
  }
});
</script>

<template>
  <div class="Plan">
    <img class="icon_music" src="/ordersummary/icon-music.svg" alt="Music icon" />
    
    <div>
      <h4 class="Plan_tittle">{{ plan.name }}</h4>
      <p class="Plan_price">{{ plan.price }}</p>
    </div>
    
    <a class="Plan_change-link" href="#">{{ plan.linkText }}</a>
  </div>
</template>

<style scoped>
/* 5. Estilos Aislados: Estilos que solo afectan a este bloque de detalles del plan */
.Plan {
  @apply flex flex-row bg-Verypaleblue items-center justify-around rounded-2xl p-3 m-4;
}

.Plan_tittle {
  @apply text-Darkblue font-semibold;
}

.Plan_price {
  @apply text-Desaturatedblue font-medium;
}

.Plan_change-link {
  @apply text-Darkblue underline text-xs hover:no-underline hover:text-Brightblue;
}
</style>