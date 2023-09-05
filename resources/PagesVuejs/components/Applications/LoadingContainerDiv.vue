<template>
  <div class="gif">
  <div class="containe">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
  </div>
</div>
</template>
<style lang="css" scoped>
.gif{
  position: absolute;
  border-radius: 6px;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(218, 218, 218, 0.8); /* Fundo turvo transparente */
  backdrop-filter: blur(1px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}
.containe {
  position: absolute;
  top: 50%;
  left: 50%;
  border-radius: 50%;
  height: 96px;
  width: 96px;
  animation: rotate_3922 1.2s linear infinite;
  background-color: #9b59b6;
  background-image: linear-gradient(#9b59b6, #84cdfa, #5ad1cd);
}

.containe span {
  position: absolute;
  border-radius: 50%;
  height: 100%;
  width: 100%;
  background-color: #9b59b6;
  background-image: linear-gradient(#9b59b6, #84cdfa, #5ad1cd);
}

.containe span:nth-of-type(1) {
  filter: blur(5px);
}

.containe span:nth-of-type(2) {
  filter: blur(10px);
}

.containe span:nth-of-type(3) {
  filter: blur(25px);
}

.containe span:nth-of-type(4) {
  filter: blur(50px);
}

.containe::after {
  content: "";
  position: absolute;
  top: 10px;
  left: 10px;
  right: 10px;
  bottom: 10px;
  background-color: #fff;
  border: solid 5px #ffffff;
  border-radius: 50%;
}

@keyframes rotate_3922 {
  from {
    transform: translate(-50%, -50%) rotate(0deg);
  }

  to {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}

</style>