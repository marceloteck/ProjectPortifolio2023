<template>
    <article>
        <AppHead title="inicio" />
        <header>
            <NavBar />
        </header>

        <LayoutSectionIndex classes="section01">
            <particles />
            <mainIndex />
        </LayoutSectionIndex>

        <LayoutSectionIndex>
            pagina 2 aqui
        </LayoutSectionIndex>
    </article>
</template>

<style lang="scss" scoped>
    .section01{
        background: rgb(24, 26, 55);
        background: linear-gradient(36deg, rgba(24, 26, 55, 1) 0%, rgba(2, 15, 38, 1) 100%);
        background-image: url('Assets/image/index/backgrounds/background_dark.avif');
        background-size: cover;
        background-attachment: fixed;
        background-blend-mode: multiply;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .section01::before {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.6);
        background-blend-mode: multiply;
    }
</style>