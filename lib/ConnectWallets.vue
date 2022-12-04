<script setup lang="ts">
import { ref, watchEffect } from 'vue';
import { supportWallets } from './config';
import { useConnectWallets } from './hooks/useConnectWallets';
import { wait } from './utils';
import Wallets from './components/Wallets.vue';
import { fadeDuration } from '@astar-network/astar-ui';
import '@astar-network/astar-ui/dist/style.css';
import 'animate.css';

useConnectWallets();

// defineProps({
// msg: { type: String },
// });

const isOpen = ref<boolean>(false);
const isClosingModal = ref<boolean>(false);

const closeModal = async (): Promise<void> => {
  isClosingModal.value = true;
  // await wait(fadeDuration);
  await wait(fadeDuration);
  // await wait(1000);
  isOpen.value = false;
  isClosingModal.value = false;
};
</script>

<template>
  <div>
    <div>
      <button @click="isOpen = true">
        Connect Wallet
      </button>

      <Wallets
        v-if="isOpen"
        :isOpen="isOpen"
        :isClosingModal="isClosingModal"
        :closeModal="closeModal"
      />
    </div>
  </div>
</template>

<style scoped></style>
