<script setup>
import CardHeader from '@/components/order-summary/CardHeader.vue';
import PlanDetails from '@/components/order-summary/PlanDetails.vue';
import ActionButtons from '@/components/order-summary/ActionButtons.vue';
import { ref } from 'vue'; 

const orderData = ref({
  title: "Order Summary",
  description: "You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!",
  plan: {
    name: "Annual Plan",
    price: "$59.99/year",
    linkText: "Change"
  }
});

const handleProceed = () => {
    // Aquí iría la lógica para enviar el pago, navegar a otra página, etc.
    alert('¡Procediendo al pago!');
};

const handleCancel = () => {
    // Aquí iría la lógica para cancelar la orden o mostrar una confirmación.
    alert('Orden cancelada.');
};
</script>

<template>
  <main class="page-container">
  <section class="order-summary-card">
    <CardHeader /> 
    <div class="card">
      <div class="card_text">
        <h1 class="tittle_text">{{ orderData.title }}</h1>
        <p class="paragraph_text">{{ orderData.description }}</p>
      </div>
      
      <PlanDetails :plan="orderData.plan" />
      
      <ActionButtons @proceed="handleProceed" @cancel="handleCancel" />
    </div>
  </section>
  </main>
</template>


<style scoped>
/* Estilos que centran el contenido y definen el fondo de la pantalla (BODY) */
.page-container {
  @apply min-h-screen flex flex-col items-center justify-center 
         sm:bg-Pattern-mobile lg:bg-Pattern-desktop bg-no-repeat bg-Paleblue font-RedHats;
}

/* Estilos de la tarjeta principal (MAIN/SECTION) */
.order-summary-card {
  @apply text-center rounded-2xl sm:max-w-xs max-w-sm m-5 bg-white text-base shadow-xl;
}

/* Estilos de margen interior de la tarjeta (DIV) */
.card {
  @apply m-4 p-2;
}

/* Estilos de títulos y párrafos específicos de esta tarjeta */
.tittle_text {
  @apply text-Darkblue font-bold text-3xl font-RedHats mb-4
}

.paragraph_text {
  @apply text-Desaturatedblue font-RedHats text-base px-3
}

</style>