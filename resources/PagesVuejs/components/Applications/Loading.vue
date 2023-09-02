<template>
    <div  v-if="carregamento.isLoading" >
        <div class="loading-overlay">
            <div class="loading-spinner"></div>
        </div>
    </div>
</template>
  
<script setup>
import { reactive } from 'vue'
import { router } from '@inertiajs/vue3'

// Gif de carregamento
const carregamento = reactive({ isLoading: false });
const showLoading = () => { carregamento.isLoading = true; };
const hideLoading = () => { carregamento.isLoading = false; };
router.on('start', showLoading);
router.on('finish', hideLoading);
</script>
  
<style scoped>
.loading-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  backdrop-filter: blur(8px);
}

.loading-spinner {
  width: 40px;
  height: 40px;
  border: 4px solid #f3f3f3;
  border-top: 4px solid #3498db;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

</style>
  