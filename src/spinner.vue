<!-- LoadingSpinner.vue -->
<template>
    <div class="loading-spinner">
      <!-- Your custom spinner content goes here -->
      <div class="spinner"></div>
    </div>
  </template>
  
  <script>
//   export default {
//     name: 'LoadingSpinner'
//   };
  </script>
  
  <style scoped>
  .loading-spinner {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }
  
  .spinner {
    border: 4px solid rgba(0, 0, 0, 0.1);
    border-left-color: #444141;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    animation: spin 1s linear infinite;
  }
  
  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
  </style>
  