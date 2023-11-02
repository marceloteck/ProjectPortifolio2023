<template>
    <nav
        :class="['navbar navbar-dark navbar-expand-lg  p-3 font-master position-fixed top-0 start-0 end-0', { 'is-sticky': isSticky }]">
        <div class="container-xl">
            <div class="d-flex w-50">
                <Link class="navbar-brand" :href="route('index.home')">
                <img :src="logo" :class="['logo', {'noIndexLogo': !route().current('index.home')}]" alt="Portifólio" />
                </Link>
            </div>

            <button @click="MenuBar" :class="['navbar-toggler', {'closeMenu': MenuToggle}]" type="button">
                <iconMenuSvg v-if="!MenuToggle" />
                <iconCloseSvg v-if="MenuToggle" />
            </button>

            <div class="collapse navbar-collapse justify-content-end">
                <ul class="navbar-nav">
                    <li class="nav-item" v-for="Nav in NavRouterLink" :key="Nav">
                        <Link :href="route(Nav.route)" :class="['nav-link', Active(Nav.route)]">
                        {{ Nav.title }}
                        </Link>
                    </li>
                </ul>
            </div>

            <div :class="['topnavbar', { 'topnavbarOpen': MenuToggle, 'topnavbarClose': MenuToggleClose }]">
                <div class="MenuResponsivo d-flex flex-column flex-shrink-0 p-3 bg-light" style="width: 280px;">
                    <a :href="route('index.home')" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
                        <span class="fs-4"><img :src="logodark" class="logo" alt="Portifólio" /></span>
                    </a>
                    <hr>
                    <ul class="nav nav-pills flex-column mb-auto">
                        <li class="nav-item"  v-for="Nav in NavRouterLink" :key="Nav">
                            <Link :href="route(Nav.route)" :class="['nav-link', Active(Nav.route)]" aria-current="page">
                                {{ Nav.title }}
                            </Link>
                        </li>
                    </ul> 
                </div>
            </div>
            <div @click="MenuBar" :class="['backgroundMenu', {'backgroundMenuOpen': MenuToggle}]"></div>
        </div>
    </nav>
</template>

<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue';
import NavRouterLink from '@resources/plugins/NavRouterLink.js';

const logo = ref('/Assets/image/index/logo2_l.png');
const logodark = ref('/Assets/image/index/logo2_b.png');
const isSticky = ref(false);
const MenuToggle = ref(false);
const MenuToggleClose = ref(false);

const handleScroll = () => {
    const scrollTop = document.documentElement.scrollTop;
    isSticky.value = scrollTop > 0 && route().current('index.home');

    if (isSticky.value) logo.value = '/Assets/image/index/logo2_b.png';
    else logo.value = '/Assets/image/index/logo2_l.png';
};

const MenuBar = () => {
    if (MenuToggle.value === true) MenuToggle.value = false, MenuToggleClose.value = true; else
        if (MenuToggle.value === false) MenuToggle.value = true, MenuToggleClose.value = false;;
}

onMounted(() => { window.addEventListener('scroll', handleScroll); });
onBeforeUnmount(() => { window.removeEventListener('scroll', handleScroll); });

const Active = (routeActive) => { if (route().current(routeActive)) return 'active'; }

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
    transition: all .4s ease-in-out;

    .navbar-toggler {
        width: 50px;
        height: 50px;
        fill: #fff;
        border: 1px solid #cccccc;
        border-radius: 50px;
        z-index: 4;
    }

    .navbar-toggler:focus {
        box-shadow: none;
        fill: $hoverNavLink;
        border: 1px solid $hoverNavLink;
    }
    .closeMenu{
        background-color: rgba(0, 0, 0, 0.8);
        fill: $hoverNavLink;
        border: 1px solid $hoverNavLink;
    }

    .topnavbar {
        width: 0;
        height: 0;
        max-width: 250px;
        max-height: 100vh;
        background-color: #ffffff;
        position: absolute;
        overflow: hidden;
        top: 0;
        left: 0;
        border-radius: 0px 0px 200px 0px;
        transition: all 0.8ms ease-in-out;
        font-family: $fontePrimary;
        color: #000;
        z-index: 8;

        @media screen and (max-height: 670px) { overflow-y: auto !important;}       

        ul li a{
            font-family: $fontePrimary;
            color: #000;
        }
        .nav-link {
            text-shadow: none;
        }
        .active{
            background: linear-gradient(90deg, #c4853e 0%, #fb3640 100%);
            color: #fff !important;
        }
        
    }

    .topnavbarOpen {
        width: 250px;
        height: 100vh;
        border-radius: 0px;
        animation: menuOpen 0.4s ease-in-out;
    }

    .topnavbarClose {
        width: 0;
        height: 0;
        border-radius: 0px;
        animation: menuClose 0.4s ease-in-out;
    }
    .backgroundMenu{
        position: absolute;
        background-color: rgba(0, 0, 0, 0.7);
        width: 0;
        height: 0;
        z-index: 2;
        top: 0;
        left: 0;
        backdrop-filter: blur(3px);
        opacity: 0;
        
    }
    .backgroundMenuOpen{
        animation: backgroundOpen 1s ease-in-out;
        width: 100%;
        height: 100vh;
        opacity: 1;
    }

    .logo {
        width: 180px;

        @media screen and (max-width: 700px) {
            width: 120px;
        }
    }
    .noIndexLogo{
        width: 120px;
    }

    .nav-link {
        color: $ColorNavLinkLigth;
        text-shadow: 0px 0px 5px #000000;

        @media screen and (max-width: 700px) {
            text-shadow: none;
        }
    }

    .nav-link:hover {
        color: $hoverNavLink;
        text-shadow: none;
    }
}

.is-sticky {
    background-color: $backgroundSticky;
    transition: all .4s ease-in-out;
    border-bottom: 2px solid #fda543;

    .logo {
        width: 150px;

        @media screen and (max-width: 700px) {
            width: 120px;
        }
    }

    .nav-link {
        color: $ColorNavLinkDark;
        text-shadow: none;
    }

    .nav-link:hover {
        color: $hoverNavLink;
    }
    .navbar-toggler {
        box-shadow: none;
        fill: #000;
        border: 1px solid #000;
    }
    .active{
            color: #b9803f !important;
        }

}

@keyframes menuOpen {
    from {
        width: 0;
        height: 0;
        border-radius: 0px 0px 200px 0px;
    }

    to {
        width: 250px;
        height: 100vh;
        border-radius: 0px;
    }
}

@keyframes menuClose {
    from {
        width: 250px;
        height: 100vh;
        border-radius: 0px;
    }

    to {
        width: 0;
        height: 0;
        border-radius: 0px 0px 200px 0px;
    }
}
@keyframes backgroundOpen {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}
</style>