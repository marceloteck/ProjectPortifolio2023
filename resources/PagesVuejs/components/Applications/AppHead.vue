<template>
  <Head v-if="fullTitle" :title="fullTitle">
    <link v-if="fullUrl" rel="canonical" :href="fullUrl">
    <meta v-if="fullDescription" name="description" :content="fullDescription">
    <meta v-if="fullKeywords" name="keywords" :content="fullKeywords">
    <meta v-if="fullAuthor" name="author" :content="fullAuthor">
    <!-- Facebook -->
    <meta v-if="fullTitle && facebook" property="og:title" :content="fullTitle">
    <meta v-if="fullDescription && facebook" property="og:description" :content="fullDescription">
    <meta v-if="fullImageUrl && facebook" property="og:image" :content="fullImageUrl">
    <meta v-if="fullUrl && facebook" property="og:url" :content="fullUrl">
    <meta v-if="NameApp && facebook" property="og:site_name" :content="NameApp">
    <meta v-if="typeWebSite && facebook" property="og:type" :content="typeWebSite">
    <!-- Twitter -->
    <meta v-if="twitterCard && twitter" name="twitter:card" :content="twitterCard">
    <meta v-if="fullTitle && twitter" name="twitter:title" :content="fullTitle">
    <meta v-if="fullDescription && twitter" name="twitter:description" :content="fullDescription">
    <meta v-if="fullImageUrl && twitter" name="twitter:image" :content="fullImageUrl">
    <!-- Config -->
    <link v-if="iconRel" rel="icon" type="image/x-icon" :href="iconRel" />
    <meta v-if="ColorScheme" name="color-scheme" :content="ColorScheme" />
    <meta v-if="themeColor" name="theme-color" :content="themeColor" />
    <meta v-if="isIOS && themeColor" name="apple-mobile-web-app-status-bar-style" :content="themeColor">
    <slot />
  </Head>
</template>

<script setup>
import { ref, computed, defineProps } from 'vue';
import { Head } from '@inertiajs/vue3';

const { title, description, keywords, imageSrc, facebook, twitter } =
  defineProps(['title', 'description', 'keywords', 'imageSrc', 'facebook', 'twitter']);

// Valores padrão para as metatags
const NameApp = (import.meta.env.VITE_APP_NAME).replaceAll(/[_-]/g, ' ');
const defaultTitle = 'Portifólio Marcelo henrique';
const defaultDescription = 'Portifólio do Marcelo de sousa Henrique - desenvolvedor Full Stack Junior | Analista de sistemas';
const defaultKeywords = 'dev, php, laravel, vue.js, inertia.js, mysql, ajax';
const defaultAuthor = 'Marcelo henrique';
const defaultImageUrl = '';
const defaultUrl = window.location.href;
const typeWebSite = 'website'; // website
const twitterCard = ''; // summary_large_image

// config
const ColorScheme = "#fda543";
const themeColor = "#fda543";
const iconRel = "https://sb-ui-kit-pro.startbootstrap.com/assets/img/favicon.png";

// Calcula os valores finais das metatags combinando com os valores padrão
const fullTitle = title ? title : defaultTitle;
const fullDescription = description ? description : defaultDescription;
const fullKeywords = keywords ? keywords : defaultKeywords;
const fullAuthor = defaultAuthor;
const fullImageUrl = imageSrc ? imageSrc : defaultImageUrl;
const fullUrl = defaultUrl;

const userAgent = ref(navigator.userAgent);
const isIOS = computed(() => /iPhone|iPad/i.test(userAgent.value));
</script>


<!--
CHAMADA:

<template>
  <AppHead :title="title" :description="description" :keywords="keywords" :imageSrc="imageSrc" facebook="true" twitter="true" />
  
  /// cod ...
</template>

<script setup>
import { ref } from 'vue';

const title = ref('Título da Página');
const description = ref('Descrição da Página');
const keywords = ref('Palavras-chave, relevantes');
const imageSrc = ref('link da imagem');
</script>
-->