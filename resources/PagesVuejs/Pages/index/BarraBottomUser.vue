<script setup>
import { ref } from "vue";
import { router } from "@inertiajs/vue3";

const IsLoading = ref(false);
const content = [
    ['Conhecimento', 'Conhecimento', 'Veja minha base de conhecimento.', 'index.about'],
    ['Projetos', 'Meus Projetos', 'Clique para ver meus projetos.', 'index.project'],
    ['Currículo', 'Meu Currículo', 'Clique para ver meu currículo.', 'index.contact'],
];
function linkClick(linkRota) {
    router.visit(route(linkRota), {
        preserveState: false,
        preserveScroll: false,
        onStart: visit => {
            IsLoading.value = true;
        },
        onFinish: visit => {
            IsLoading.value = false;
        },
    });
}
</script>

<template>
    <div class="container-xl">
        <div class="geral row">
            <div class="col-4 d-flex align-items-center justify-content-center" v-for="item in content" :key="item[0]">
                <div class="card-container">
                    <LoadingContainerDiv v-if="IsLoading" />
                    <div class="card" @click="linkClick(item[3])">
                        <div class="front-content">
                            <span>{{ item[0] }}</span>
                        </div>
                        <div class="content">
                            <span class="heading">{{ item[1] }}</span>
                            <span>{{ item[2] }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.geral{
    @media screen and (max-width: 576px) {
        position: absolute;
        left: 0px;
        margin: 0;
        bottom: 0px;
    }


    @media (max-height: 490px) { display: none; }
    @media (max-width: 700px) { display: none; }
    
}
.card-container {
    width: 300px;
    height: 110px;
    position: absolute;
    border-radius: 11px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    overflow: hidden;
    bottom: 30px;

    @media screen and (max-width: 991px) {
        width: 220px;
        height: 98px;
    }
    
    .card {
        width: 100%;
        height: 95%;
        border-radius: inherit;
        cursor: pointer;
        background-color: #f7f7f7;

        .front-content {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.6s cubic-bezier(0.23, 1, 0.320, 1);
       
            span {
                font-size: 2rem;
                font-weight: 700;
                opacity: 1;
                background: linear-gradient(-45deg, #c4853e 0%, #fb3640 100%);
                background-clip: text;
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                transition: all 0.6s cubic-bezier(0.23, 1, 0.320, 1);

                @media screen and (max-width: 992px) { font-size: 1.7rem; }

            }
        }
        .content {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-align: center;
            gap: 10px;
            background: linear-gradient(-45deg, #c4853e 0%, #fb3640 100%);
            color: #e8e8e8;
            padding: 10px;
            line-height: 1.5;
            border-radius: 11px;
            pointer-events: none;
            transform: translateX(-96%);
            transition: all 0.6s cubic-bezier(0.23, 1, 0.320, 1);

            .heading {
                font-size: 30px;
                font-weight: 700;

                @media screen and (max-width: 992px) { font-size: 25px; }
            }
        }
    }
    .card:hover .content {
        transform: translateY(0);
    }
    .card:hover .front-content {
        transform: translateX(-30%);
    }
    .card:hover .front-content span {
        opacity: 0;
    }
}
</style>