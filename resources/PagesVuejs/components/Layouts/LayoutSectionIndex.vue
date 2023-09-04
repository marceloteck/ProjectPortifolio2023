<script setup>
    const { classes } = defineProps(['classes']);
</script>

<template>  
    <section :class="classes">
        <slot />
    </section>
</template>

<style lang="css" scoped>
section{
    width: 100%;
    min-height: 100vh;
}
</style>