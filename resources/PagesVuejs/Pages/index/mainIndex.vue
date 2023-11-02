<template>
    <div class="geral container-xl">
        <div class="row text-light">
            <div class="col-12 col-lg-7">
                <div class="leftMain">
                    <div class="row">
                        <div class="col-12">
                            <buttonsSocial class="buttonsSocial" />
                        </div>
                        <div class="col-12">
                            <h3 class="d-block">Olá, {{ message }}</h3>
                        </div>
                        <EfeitoDigitacao />
                    </div>
                </div>
            </div>
            <div class="col-12 btnMobile">
                <a
                    href="/Assets/files/Curriculo_Marcelo_Henrique.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <button class="btn">Download CV</button>
                </a>
            </div>
            <div class="col-12 imgEfects col-lg-5">
                <imgEfects
                    classes="imgIndex"
                    ImgSrc="/Assets/image/index/programador1.0.png"
                />
            </div>
        </div>
        <BarraBottomUser />
    </div>
</template>

<style lang="scss" scoped>
$fontePrimary: "Titillium Web", sans-serif;

.geral {
    z-index: 2;

    .col-12 {
        position: relative;

        @media screen and (max-width: 991px) {
            display: flex;
            justify-content: center;
            align-items: center;
        }

        h3 {
            font-family: $fontePrimary;
            font-weight: 300;
            font-size: 3rem;
            color: #dbdbdb;
            text-shadow: 0px 0px 13px #000000;

            @media screen and (max-width: 1199px) {
                font-size: 2rem;
            }
            @media screen and (max-width: 576px) {
                font-size: 1.9rem;
            }
            @media screen and (max-width: 320px) {
                font-size: 1.8rem;
            }
        }
    }
    .btnMobile {
        position: absolute;
        margin-top: 14rem;

        @media (min-width: 700px) {
            display: none;
        }

        .btn {
            color: #fff;
            border: 1px solid #4d4d4d;
            margin-top: 40px;
            padding: 15px;
            background: linear-gradient(90deg, #c4853e 0%, #fb3640 100%);
            font-size: 1.5rem;
            font-family: $fontePrimary;
        }
    }
    .buttonsSocial {
        margin-top: -4rem;
    }
    .leftMain {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        margin-top: 25px;

        @media screen and (max-width: 576px) {
            margin-top: 0px;
        }
        @media screen and (max-width: 991px) {
            text-align: center;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
    .imgEfects {
        @media screen and (max-width: 991px) {
            display: none;
        }
    }
}
</style>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const message = ref("");

const updateMessage = () => {
    const now = new Date();
    const hour = now.getHours();

    if (hour >= 0 && hour < 12) message.value = "Bom dia!";
    else if (hour >= 12 && hour < 18) message.value = "Boa tarde!";
    else if (hour >= 18 && hour < 24) message.value = "Boa noite!";
};

onMounted(() => {
    window.addEventListener("mousemove", updateMessage);
    updateMessage();
});

onBeforeUnmount(() => {
    window.removeEventListener("mousemove", updateMessage);
});
</script>
