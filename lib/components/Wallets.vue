<script setup lang="ts">
import { supportWallets } from '../config';

// <Wallets :isOpen="isOpen" :isClosingModal="isClosingModal" :closeModal="closeModal" />
defineProps({
  isOpen: { type: Boolean },
  isClosingModal: { type: Boolean },
  closeModal: { type: Function },
});
</script>

<template>
  <astar-default-modal
    :show="isOpen"
    title="Select wallet"
    :isClosingModal="isClosingModal"
    @close="closeModal"
    :width="500"
  >
    <div class="box--wallets">
      <div v-for="wallet in supportWallets" :key="wallet.name">
        <astar-button>
          <span>{{ wallet.name }}</span>
        </astar-button>
      </div>
    </div>
  </astar-default-modal>
</template>

<style lang="scss" scoped>
.box--wallets {
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 16px;
}
</style>
