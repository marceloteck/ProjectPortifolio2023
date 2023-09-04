<template>
    <nav :class="['navbar navbar-dark navbar-expand-lg  p-3 font-master position-fixed top-0 start-0 end-0', {'is-sticky': isSticky }]">
        <div class="container">
            <div class="d-flex w-50">
                <Link class="navbar-brand" :href="route('index.home')">
                <img :src="logo" class="logo" />
                </Link>
            </div>

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item" v-for="Nav in NavRouterLink" :key="Nav">
                        <Link :href="route(Nav.route)" :class="['nav-link', Active(Nav.route)]">
                        {{ Nav.title }}
                        </Link>
                    </li>
                </ul>
            </div>

        </div>
    </nav>
</template>

<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue';

const NavRouterLink = [
    { title: 'Inicio', route: 'index.home' },
    { title: 'Sobre', route: 'index.about' },
    { title: 'Experiencias', route: 'index.experiences' },
    { title: 'Projetos', route: 'index.project' },
    { title: 'Educação', route: 'index.education' },
    { title: 'Contatos', route: 'index.contact' },
];
const logo = ref('Assets/image/index/logo2_l.png');
const isSticky = ref(false);

const handleScroll = () => {
  const scrollTop = document.documentElement.scrollTop;
  isSticky.value = scrollTop > 0 && route().current('index.home');

  if (isSticky.value) logo.value = 'Assets/image/index/Logo2_b.png';
  else logo.value = 'Assets/image/index/Logo2_l.png';
};

onMounted(() => { window.addEventListener('scroll', handleScroll); });
onBeforeUnmount(() => { window.removeEventListener('scroll', handleScroll); });

const Active = (routeActive) => { if(route().current(routeActive)) return 'active'; }

</script>
<style lang="scss" scoped>
    $hoverNavLink: #fda543;
    $ColorNavLinkDark: #000000;
    $ColorNavLinkLigth: #cccccc;
    $backgroundSticky: #ffffff;
    $fontePrimary: 'Titillium Web', sans-serif;

    nav {
        font-family: $fontePrimary;
        font-weight: 600;
        z-index: 5;
        .logo {
            width: 200px;
        }
        .nav-link{
            color: $ColorNavLinkLigth;
            text-shadow: 0px 0px 10px #000000;
        }
        .nav-link:hover{
            color: $hoverNavLink;
            text-shadow: none;
        }
    }
    .is-sticky {
        background-color: $backgroundSticky;
        transition: all .4s;
        border-bottom: 2px solid #fda543;

        .nav-link{
            color: $ColorNavLinkDark;
            text-shadow: none;
        }
        .nav-link:hover{
            color: $hoverNavLink;
        }
    }
</style>