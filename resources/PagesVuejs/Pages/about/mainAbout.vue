<template>
    <div class="container-fluid">
        <LayoutTopPages>
            <particlesCircles />
            <div class="circleProfile "></div>
        </LayoutTopPages>

        <div class="row userTitle">
            <div class="col-12">
                <h2 class="text-center">Marcelo de Sousa Henrique</h2>
                <div class="text-center descriptions">Desenvolvedor Full-stack Júnior</div>
            </div>
        </div>
        <div class="col-12 itens-align-center d-flex justify-content-center">
            <buttonsSocialsquare  />
        </div>
        <div class="container">
            <div class="row">
                <div class="col-12 col-lg-7 textAbout">
                    <h3>Sobre Mim</h3>
                        <p>Desenvolvedor web apaixonado com especialização em programação back-end e experiência sólida em PHP, HTML, CSS, JavaScript e outra linguagens. <br>

                        Altamente motivado a aprender novas tecnologias e frameworks, estou em busca de oportunidades que me permitam aplicar minha expertise e criar soluções eficientes. <br>

                        Com habilidades tanto em front-end quanto em back-end, sou comprometido, autodidata e movido por desafios. Pronto para contribuir em projetos estimulantes e colaborar com equipes talentosas, busco um ambiente dinâmico onde possa impulsionar resultados excepcionais.</p>
                </div>
                <div class="col-5 imgComputer itens-align-center d-flex justify-content-center">
                    <imagensWeb class="imgSobre" ImgSrc="/Assets/image/index/dev2.png" />
                </div>
            </div>
        </div>
        <div class="row Skills">
            <div class="col-12">
                <div class="container">
                    <cardSkills />
                </div>
            </div>
        </div>
        
    </div>
</template>

<style lang="scss" scoped>
    .container-fluid {
        .circleProfile{
            width: 18rem;
            height: 18rem;
            border-radius: 18rem;
            background-color: rgb(53, 53, 53);
            background-image: url("Assets/image/index/users/perfil.jpg");
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center;
            margin-top: 13rem;
            position: absolute;
            border: 4px solid #fda543;
            box-shadow: 0 0 20px 5px rgba(32, 32, 32, 0.5);
            transition: all 0.4s ease-in-out;
            z-index: 3;

            @media screen and (max-width: 660px){ width: 15rem; height: 15rem; }
        }
        .circleProfile:hover{
            width: 18.5rem;
            height: 18.5rem;
            cursor: pointer;
        }
        .circleProfile img{
            align-items: center;
            justify-content: center;
            position: absolute;
            width: 100%;
            height: 100%;
        }
       /* .topUser {
            .col-12 {
                width: 100%;
                height: 45vh;
                background: rgb(24, 26, 55);
                background: linear-gradient(36deg, rgba(24, 26, 55, 1) 0%, rgba(2, 15, 38, 1) 100%);
                background-image: url(https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80);
                background-size: cover;
                background-attachment: fixed;
                display: flex;
                align-items: center;
                justify-content: center;
                position: relative;
                float: left;

                .circleProfile{
                    width: 18rem;
                    height: 18rem;
                    border-radius: 18rem;
                    background-color: rgb(53, 53, 53);
                    background-image: url("Assets/image/index/users/perfil.jpg");
                    background-size: cover;
                    background-repeat: no-repeat;
                    background-position: center;
                    margin-top: 13rem;
                    position: absolute;
                    border: 4px solid #fda543;
                    box-shadow: 0 0 20px 5px rgba(32, 32, 32, 0.5);
                    transition: all 0.4s ease-in-out;
                    z-index: 3;

                    @media screen and (max-width: 660px){ width: 15rem; height: 15rem; }
                }
                .circleProfile:hover{
                    width: 18.5rem;
                    height: 18.5rem;
                    cursor: pointer;
                }
                .circleProfile img{
                    align-items: center;
                    justify-content: center;
                    position: absolute;
                    width: 100%;
                    height: 100%;
                }
            }
        }*/
        .userTitle{
            .col-12 {
                margin-top: 3.5rem;
                h2{
                    color: black;
                    margin-top: 3rem;
                    font-size: 2.5rem;
                    font-family: 'Titillium Web', sans-serif;
                    font-weight: 700;
                    text-transform: uppercase;

                    @media screen and (max-width: 660px){ font-size: 2rem; }
                }
                .descriptions{
                    color: rgb(36, 35, 35);
                    font-size: 1.9rem;
                    font-family: 'Titillium Web', sans-serif;
                    font-weight: 500;
                }
            }
        }
        .textAbout{
            position: relative;
            flex-direction: column;
            font-family: 'Titillium Web', sans-serif;
            margin-top: 5rem;
            
            color: rgb(0, 0, 0);

            h3{
                font-weight: 600;
                font-size: 1.7rem;
                text-align: center;
            }
            p{
                font-weight: 500;
                font-size: 1.4rem;
                text-align: justify;
                @media screen and (max-width: 576px) { font-size: 1.3rem; text-align: left; }
                @media screen and (max-width: 576px) { font-size: 1.1rem; }
            }
        }
        .Skills{
            position: relative;
            margin-top: 6rem;
            margin-bottom: 6rem;
            .col-12{
                position: relative;
                display: flex;
                align-items: center;
                
                .container{
                    position: relative;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-wrap: wrap;
                    gap: 12px;
                }
            }
           
        }
        .imgComputer{
            @media screen and (max-width: 991px) { display: none !important; }
            .imgSobre{
                width: 100%;
            }
        }
    }
</style>