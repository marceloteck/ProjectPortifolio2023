<script setup>
    const { classes } = defineProps(['classes']);
</script>

<template>  
    <section :class="classes">
        <slot />
    </section>
</template>