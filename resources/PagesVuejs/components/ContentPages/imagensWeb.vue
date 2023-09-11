<template>
    <div id="container itens-align-center justify-content-center" ref="containerRef">
      <div id="element" >
        <img :src="ImgSrc"  class="image-shadow img-fluid">
      </div>
    </div>
  </template>
  
  <script setup>
    const { ImgSrc } =  defineProps(['ImgSrc']);
  </script>
  
  <style scoped>
  .image-shadow{
    position:relative;
    top:0px;
    bottom:0px;
    transition: all .9s ease-in;
    }

  #container {
    perspective: 1000px;
    position:absolute;
    bottom:0px;
  }
  
  #element {
    width: 90%;
    position: relative;
    will-change: transform;
  }
 
  #element img:hover{
    animation: none;
  }
  </style>