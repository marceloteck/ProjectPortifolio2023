<template>
    <nav>
        <ul>
            <Link v-for="(nav, index) in menu" 
            :key="index" :href="route(nav.routeName)">
                <li>
                    {{ nav.name }}
                </li>
            </Link>
        </ul>
    </nav>
</template>
<script setup>
const menu = [
    { name: "Inicio", routeName: "index.home" },
    { name: "Sobre",routeName: "index.about" },
    { name: "Experiencias", routeName: "index.experiences" },
    { name: "projetos", routeName: "index.project" },
];
</script>
