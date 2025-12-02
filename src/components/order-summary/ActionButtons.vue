<template>
  <div class="buttons">
    <button class="payment" @click="$emit('proceed')">
      Proceed to Payment
    </button>
    
    <span class="cancel" @click="$emit('cancel')">
      Cancel Order
    </span>
  </div>
</template>

<script setup>
// 3. Declaración de Eventos: 
// Esto es crucial. Indica explícitamente qué eventos pueden salir de este componente.
defineEmits(['proceed', 'cancel']); 
</script>

<style scoped>
/* 4. Estilos de los Botones: Solo los estilos relevantes para este componente */
.buttons {
  @apply flex flex-col;
}

.payment {
  /* Estilos del botón principal */
  @apply bg-Darkblue text-white rounded-xl py-3 font-bold shadow-lg shadow-Desaturatedblue cursor-pointer hover:bg-Brightblue;
}

.cancel {
  /* Estilos del enlace de cancelación */
  @apply text-Desaturatedblue font-bold m-4 hover:cursor-pointer hover:text-Darkblue;
}
</style>