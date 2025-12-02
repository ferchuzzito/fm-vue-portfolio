<template>
  <main class="body-wrapper">
    <QrDetails
      :imageSrc="cardData.imageSrc"
      :imageAlt="cardData.imageAlt"
      :title="cardData.title"
      :paragraph="cardData.paragraph"
    />
    <Attribution />
  </main>
</template>

<script setup>
import Attribution from '@/components/Attribution.vue';
import QrDetails from '@/components/qrCode/QrDetails.vue';
import { ref } from "vue";

const cardData = ref({
  imageSrc: '/qrcode/image-qr-code.png',
  imageAlt: 'QR Code Logo',
  title: 'Improve your front-end skills by building projects',
  paragraph: 'Scan the QR code to visit Frontend Mentor and take your coding skills to the next level'
});
</script>

<style scoped>
.body-wrapper {
  @apply h-screen bg-LightGray flex flex-col items-center justify-center font-Outfit;
}
</style>
