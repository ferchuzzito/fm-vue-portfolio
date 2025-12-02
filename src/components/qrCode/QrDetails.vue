<script setup>
defineProps({
  imageSrc: String,
  imageAlt: String,
  title: String,
  paragraph: String
});
</script>

<template>
  <div class="qrcard">
    <img
      class="qrlogo"
      :src="imageSrc"
      :alt="imageAlt"
    />
    <h1 class="title">
      {{ title }}
    </h1>
    <p class="paragraph">
      {{ paragraph }}
    </p>
  </div>
</template>

<style scoped>
/* Las clases con @apply se aplican aquí usando el estilo SCALED (puedes usar div en lugar de main) */
.qrcard {
  /* Añadimos padding y margen al texto para separación (p-4 es del CSS original) */
  @apply text-center m-4 p-4 rounded-2xl bg-white max-w-[296px]; 
}

.qrlogo {
  /* Ajustamos el margen para que no esté pegada al borde superior */
  @apply rounded-lg mt-0; 
}

.title {
  /* Aquí aplicamos tus custom font sizes: text-title */
  @apply mt-4 px-2 text-title-custom text-DarkBlue;
}

.paragraph {
  /* Aquí aplicamos tus custom font sizes: text-paragraph */
  @apply mt-4 px-2 text-paragraph-custom text-GrayishBlue; 
}
</style>