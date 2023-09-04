<template>
    <div id="container itens-align-center justify-content-center" ref="containerRef">
      <div id="element" ref="elementRef">
        <img :src="ImgSrc" ref="elementRefImg" class="image-shadow img-fluid">
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  const { ImgSrc, effect } =  defineProps(['ImgSrc', 'effect']);
  
  const containerRef = ref(null);
  const elementRef = ref(null);
  const elementRefImg = ref(null);
  
  onMounted(() => {
    const container = containerRef.value;
    const element = elementRef.value;
    const elementImg = elementRefImg.value;
    
    container.addEventListener('mousemove', (e) => {
    const x = e.clientX / container.offsetWidth;
    const y = e.clientY / container.offsetHeight;

    const offsetX = (x - 0.8) * 2; 
    const offsetY = ((x + 0.8) * (y - 0.8)) * 2; 

    const maxRotation = 5; // Ângulo máximo de rotação

    const rotateY = offsetX * maxRotation;
    const rotateX = offsetY * maxRotation;

    element.style.transform = `perspective(1000px) rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;
    element.style.transition = 'transform 0s ease';
    if(effect === "null") elementImg.style.animation = 'none';
    });

    container.addEventListener('mouseleave', () => {
        element.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg)';
        element.style.transition = 'transform 0.3s ease';
    });
});

  </script>
  
  <style scoped>
  .image-shadow{
    position:relative;
    top:0px;
    bottom:0px;
    -webkit-filter: drop-shadow(0px 0px 20px rgba(0, 0, 0, 0.9)); 
    filter: drop-shadow(0px 0px 20px rgb(0, 0, 0));
    animation: shoes 1s ease infinite alternate;
    transition: all .9s ease-in;
    filter: drop-shadow(3px 3px 5px #18181815);
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

  @keyframes shoes {
  from {
    top: 10px;
  }

  to {
    top: 15px;
  }
}

  </style>