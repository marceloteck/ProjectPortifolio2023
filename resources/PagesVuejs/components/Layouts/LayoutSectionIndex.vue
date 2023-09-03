<script setup>
    const { title } = defineProps(['title']);
</script>

<template>  
    <section>
        <slot />
    </section>
</template>

<style lang="scss" scoped>
section{
    width: 100%;
    min-height: 100vh;
    background-color: rgb(46, 100, 100);
}
</style>