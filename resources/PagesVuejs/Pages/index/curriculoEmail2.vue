<template>
    <div class="container-fluid pt-10 text-light">
        <div class="row">
            <div class="col-6 d-flex justify-content-center">
                <imgEfects ImgSrc="Assets/image/index/dev.png" style="width: 85%;" />
            </div>

            <div class="col-6 d-flex justify-content-center flex-column">
                <div class="row row-col-12 text-center">
                    <h2>Tenha acesso ao meu currículo</h2>
                    <span>Escolha enviar por email ou baixar.</span>
                    <div class="row row-col-12">
                        <div class="col">

                            <div class="formButton">
                                <input type="email" :style="inputBtnStyles" v-model="emailUser" placeholder="Digite seu E-mail" class="inputBtn" />

                                <button type="button" class="btn button shadow-lg bg-body rounded">
                                <div v-if="emailUser !== ''">
                                    <div class="svg-wrapper-1">
                                        <div class="svg-wrapper">
                                            <svg class="svgiconUp" height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"></path><path d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z" fill="currentColor"></path></svg> 
                                             <span>Enviar Email</span>  
                                        </div>
                                    </div>
                                </div>
                                <div v-else>Passe o Mouse</div>
                                </button>

                                <button type="button" class="btn text-light DownBtn">
                                    <div class="Btn">
                                        <svg class="svgIcon" viewBox="0 0 384 512" height="1em" xmlns="http://www.w3.org/2000/svg"> <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"></path></svg>
                                        <span class="icon2"></span>
                                        <span class="tooltip">Download</span>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from "vue";
  
  const emailUser = ref("");
  
  const inputBtnStyles = computed(() => {
    return {
      marginLeft: emailUser.value !== "" ? "-250px" : "0px",
      opacity: emailUser.value !== "" ? "1" : "0",
      width: emailUser.value !== "" ? "255px" : "155px",
    };
  });
  
  </script>
  
  <style lang="scss" scoped>
  .container-fluid{
  z-index: 2;
  position: relative;

    .formButton{
        margin-top: 15px;
        transition: all 0.2s ease-in-out;
        position: relative;
        font-size: 19px;
        color: rgb(255, 255, 255);
        z-index: 1;

        .DownBtn{
            position: absolute;
            margin-top: 5px;
            margin-left: -90px;
            opacity: 0;
            padding: 18px 15px 15px 18px;
            border: 1px solid #fff;
            border-radius: 0px 5px 5px 0px;
            background-color: rgb(7, 16, 46);
            color: #FB3740;
            transition: all 0.3s ease-in-out;
        }
        .inputBtn{
            padding: 18px 15px 15px 18px;
            border: 1px solid #fff;
            border-radius: 5px 0px 0px 5px;
            position: absolute;
            margin-left: 0px;
            width: 155px;
            opacity: 0;
            margin-top: 2px;
            background-color: rgb(12, 15, 24);
            color: aliceblue;
            transition: all 0.3s ease-in-out;
        }
        .inputBtn:focus{
            outline: none;
        }
        
    }
    .formButton:hover{
        .inputBtn {
            opacity: 1 !important;
            margin-left: -250px !important;
            width: 255px !important;
        }
        .DownBtn {
            opacity: 1 !important;
            margin-left: -5px !important;
        }
    }
  
  }
  .Btn {
    width: 100%;
    height: 100%;
    border: none;
    border-radius: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    position: relative;
    transition-duration: .3s;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.11);
  }
  .svgIcon {
    fill: rgb(246, 255, 117);
  }
  .icon2 {
    width: 18px;
    height: 5px;
    border-bottom: 2px solid rgb(246, 255, 117);
    border-left: 2px solid rgb(246, 255, 117);
    border-right: 2px solid rgb(246, 255, 117);
  }
  .tooltip {
    position: absolute;
    right: -105px;
    opacity: 0;
    background: rgb(255, 255, 255);
    color: rgb(0, 0, 0);
    padding: 5px 10px;
    border-radius: 5px;
    border: 1px solid rgb(255, 255, 255);
    display: flex;
    align-items: center;
    justify-content: center;
    transition-duration: .2s;
    pointer-events: none;
    letter-spacing: 0.5px;
  }
  .tooltip::before {
    position: absolute;
    content: "";
    width: 10px;
    height: 10px;
    background-color: #ffffff;
    background-size: 1000%;
    background-position: center;
    transform: rotate(45deg);
    left: -5%;
    transition-duration: .3s;
  }
  .DownBtn:hover .tooltip {
    opacity: 1;
    transition-duration: .3s;
  }
  .DownBtn:hover {
    transition-duration: .3s;
  }
  .DownBtn:hover .icon2 {
    border-bottom: 2px solid rgb(235, 235, 235);
    border-left: 2px solid rgb(235, 235, 235);
    border-right: 2px solid rgb(235, 235, 235);
  }
  
  .DownBtn:hover .svgIcon {
    fill: rgb(255, 255, 255);
    animation: slide-in-top 0.6s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
  }
  
  @keyframes slide-in-top {
    0% {
      transform: translateY(-10px);
      opacity: 0;
    }
  
    100% {
      transform: translateY(0px);
      opacity: 1;
    }
  }
  
  .svgiconUp{
    transition: all 0.2s ease-in-out;
    margin: 0;
  }
   .button:hover  .svgiconUp{
    position: relative;
      rotate: 42deg;
  }
  
  .formButton .button:focus{
      border: 1px solid transparent;
  }
  .formButton .button {
      border: 1px solid #353535;
      display: inline-block;
      padding: 18px 24px;
      width: 180px;
      box-shadow: 2px #000;
      background: rgb(24, 26, 55);
      background: linear-gradient(36deg, #CB7C3E 0%, #FB3740 100%);
      position: relative;
      overflow: hidden;
      font-size: 19px;
      color: rgb(255, 255, 255);
      z-index: 1;
      transition: all 0.3s ease-in-out;
  }
  </style>
  