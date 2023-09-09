<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-6 imgIlustration">
                <imgEfects ImgSrc="Assets/image/index/dev.png" class="imgEfects" />
            </div>
            <div class="col-12 col-md-6 ">
                <h2>Tenha acesso ao meu currículo</h2>
                <span>Escolha enviar por email ou baixar.</span>
                <div class="formBtn">
                    <input type="email" :style="inputBtnStyles" v-model="emailUser" class="inputBtn" placeholder="Digite seu E-mail">
                    <button type="button" class="btn button shadow-lg bg-body rounded">
                        <div v-if="emailUser !== ''">
                            <IconSendSvg classes="svgiconUp" />
                            <span>Enviar Email</span>
                        </div>
                        <div v-else>Passe o Mouse</div>
                    </button>
                    <button type="button" class="btn text-light DownBtn">
                        <div class="Btn">
                            <iconDownloadSvg class="svgIcon" />
                            <span class="icon2"></span>
                            <span class="tooltip">Download</span>
                        </div>
                    </button>
                </div>
                <div class="formEmail">
                    <input type="email" v-model="emailUser" class="inputBtn" placeholder="Digite seu E-mail">
                    <button type="button" class="btn sendbtn"><IconSendSvg classes="svgiconUp" /></button>
                </div>
                <div class="Linkcv"><Link href="#">Baixar curriculo</Link></div>


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
const svgIconBtn = {
    iconSend: '',
    iconDown: '',
}
</script>

<style lang="scss" scoped>
$corTexto: #ffffff;
.container-fluid{
    z-index: 2;

    @media (max-width: 768px) { height: 50vh; }

   .row {
    position: relative;
    height: 100%;
        .imgIlustration{
                position: relative;
                @media (max-width: 768px) { display: none; }
            
                .imgEfects{
                    width: 85%;

                    @media screen and (max-width: 992px){ width: 100%; }
                    
                }
            }
    }
    
    .col-12{
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        position: relative;
        color: #fff;

        span{
            @media (max-width: 768px) { display: none; }
        }

        .formBtn{
            margin-top: 15px;
            transition: all 0.2s ease-in-out;
            position: relative;
            font-size: 19px;
            color: rgb(255, 255, 255);
            z-index: 1;

            @media (max-width: 768px) { display: none; }

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

            .button {
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

                .svgiconUp{
                    transition: all 0.2s ease-in-out;
                    margin-right: 5px;
                }
            }
            .button:focus{
                border: 1px solid transparent;
            }
            .button:hover  .svgiconUp{
                position: relative;
                rotate: 42deg;
            }
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

                    .svgIcon {
                        fill: #d48e63;
                    }
                    .icon2 {
                        width: 18px;
                        height: 5px;
                        border-bottom: 2px solid #d48e63;
                        border-left: 2px solid #d48e63;
                        border-right: 2px solid #d48e63;
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
                }
            }
        }
        .formBtn:hover{
            .inputBtn {
                opacity: 1 !important;
                margin-left: -250px !important;
                width: 255px !important;
            }
            .DownBtn {
                opacity: 1 !important;
                margin-left: -5px !important;
            }
            .DownBtn:hover {
                transition-duration: .3s;

                .tooltip {
                    opacity: 1;
                    transition-duration: .3s;
                }
                .icon2 {
                    border-bottom: 2px solid rgb(235, 235, 235);
                    border-left: 2px solid rgb(235, 235, 235);
                    border-right: 2px solid rgb(235, 235, 235);
                }
                .svgIcon {
                    fill: rgb(255, 255, 255);
                    animation: slide-in-top 0.6s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
                }
            }
        }
        .formEmail{
            width: fit-content;
            display: flex;
            justify-content: center;
            flex-direction: column;
            align-items: center;
            margin-top: 15px;
            position: relative;

            @media screen and (min-width: 768px){ display: none;}
            .inputBtn{
                padding: 18px 15px 15px 18px;
                border: 1px solid #fff;
                border-radius: 5px;
                position: relative;
                width: 300px;
                margin-top: 2px;
                background-color: rgb(12, 15, 24);
                color: aliceblue;
                transition: all 0.3s ease-in-out;
            }
            .inputBtn:focus{
                outline: none;
            }
            .sendbtn{
                position: absolute;
                right: 4px;
                width: 50px;
                height: 50px;
                display: inline-block;
                background: linear-gradient(36deg, #CB7C3E 0%, #FB3740 100%);

                .svgiconUp{
                    fill: #fff;
                    color: #fff;
                }
            }
        }
        .Linkcv{
            margin-top: 15px;
            @media screen and (min-width: 768px){display: none;}
            a{
                text-decoration: none;
                color: #fff;
            }
            a:hover{
                text-decoration: underline;
            }
        }
    }
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
</style>