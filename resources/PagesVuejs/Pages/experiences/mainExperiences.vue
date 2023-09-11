<template>
    <div class="container-fluid">
        <LayoutTopPages>
            <particlesCircles />
            <template #titlePage>
                Experiências
            </template>
        </LayoutTopPages>
        <div class="row">
            <div class="col-12 col-lg-6 cardEx" v-for="Ex in Experiences" :key="Ex">
                <div class="container-md">
                    <div class="cardExperiencias">
                        <img :src="Ex.img" alt="Imagem adepará">
                        <h2>{{ Ex.title }}</h2>
                        <span class="function_Active">{{ Ex.cargo }}</span> <br>
                        <span class="periodo">{{ Ex.periodo }}</span> <br><br>
                        <span class="description">
                            {{ Ex.description }}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const Experiences = [
    {
        title: 'Adepará (Agência de Defesa Agropecuária do Pará)',
        img: 'Assets/image/index/users/adepara.jpg',
        cargo: 'Auxiliar Administrativo',
        periodo: 'Set/2020 até o momento',
        description: 'Atualmente, estou trabalhando como terceirizado na empresa Norte Service para a Agência de Defesa Agropecuária do Estado do Pará, ocupando o cargo de Auxiliar Administrativo. Minha principal prioridade é fornecer um atendimento de qualidade ao cliente, ao mesmo tempo em que utilizo minha criatividade para desenvolver ferramentas que facilitam as tarefas diárias de trabalho.'
    },
    {
        title: 'Freelancer com Manutenção de computadores e TI',
        img: 'Assets/image/index/users/freelancer.png',
        cargo: 'Analista de Sistemas',
        periodo: 'Jan/2018 até o momento',
        description: 'Logo após concluir minha graduação, iniciei minha carreira como freelancer, realizando serviços de manutenção de computadores e sistemas em minha cidade. Além disso, dediquei-me à criação de projetos pessoais utilizando PHP, CSS, JavaScript e HTML.'
    }
]
</script>

<style lang="scss" scoped>
$fontePrimary: 'Titillium Web', sans-serif;
    .container-fluid {
        .cardEx {
            position: relative;
            margin-top: 3rem;
            margin-bottom: 3rem;

            @media screen and (max-width: 420px) { margin-bottom: 1.5rem; }

            .cardExperiencias {
                padding: 5rem;
                border-radius: 4px;
                border: 2px solid rgb(243, 243, 243);
                cursor: pointer;
                box-shadow: rgba(142, 142, 142, 0.3) 0px 30px 30px -10px;
                font-family: $fontePrimary;

                @media screen and (max-width: 532px) { padding: 2rem; }
                @media screen and (max-width: 420px) { padding: 1rem; }

                img{
                    width: 250px;
                    border-radius: 4px;
                    margin-bottom: 10px;

                    @media screen and (max-width: 420px) {  width: 220px; }
                    @media screen and (max-width: 300px) {  width: 200px; }
                }

                h2{
                    font-weight: 800;
                }

                .function_Active{
                    font-weight: 600;
                    font-size: 1.3rem;
                }

                .periodo{
                    font-size: 1rem;
                    font-weight: 400;
                    color: rgb(71, 71, 71);
                    display: inline-block;
                }

                .description{
                    font-size: 1.1rem;
                    font-weight: 500;
                }

                
            }
        }
    }
</style>