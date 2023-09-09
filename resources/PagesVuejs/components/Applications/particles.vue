<script>
export default {
    name: 'ParticlesComponent',
    mounted() {
        this.loadParticles();
    },
    methods: {
        loadParticles() {
            particlesJS('particles-js', this.particlesConfig);
        },
        sizeScreen(input){
            const larguraJanela = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
            const alturaJanela = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

            if(input === 'lg') return larguraJanela; else
            if(input === 'at') return alturaJanela;
        },
        handleResize() {
            this.loadParticles();
        },
    },
    computed: {
        particlesConfig() {
            return {
                particles: {
                    number: {
                        value: (this.sizeScreen('lg') < 992) ? 30 : 120,
                        density: { enable: false, value_area: 6654.160052591919 }
                    },
                    color: { value: "#ffffff" },
                    shape: {
                        type: "circle",
                        stroke: { width: 0, color: "#000000" },
                        polygon: { nb_sides: 3 },
                        image: { src: "img/github.svg", width: 100, height: 100 }
                    },
                    opacity: {
                        value: 0.25782952832645453,
                        random: false,
                        anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false }
                    },
                    size: {
                        value: 3,
                        random: true,
                        anim: {
                            enable: true,
                            speed: 4.872463273808071,
                            size_min: 0.8120772123013452,
                            sync: false
                        }
                    },
                    line_linked: {
                        enable: true,
                        distance: 150,
                        color: "#ffffff",
                        opacity: 0.4,
                        width: 1
                    },
                    move: {
                        enable: true,
                        speed: 2.9,
                        direction: "none",
                        random: false,
                        straight: false,
                        out_mode: "out",
                        bounce: false,
                        attract: { enable: false, rotateX: 600, rotateY: 1200 }
                    }
                },
                interactivity: {
                    detect_on: "canvas",
                    events: {
                        onhover: { enable: true, mode: "grab" },
                        onclick: { enable: true, mode: "push" },
                        resize: true
                    },
                    modes: {
                        grab: { distance: 207.079689136843, line_linked: { opacity: 1 } },
                        bubble: {
                            distance: 97.44926547616143,
                            size: 186.7777588293094,
                            duration: 0.48724632738080703,
                            opacity: 0.3329516570435515,
                            speed: 3
                        },
                        repulse: { distance: 200, duration: 0.4 },
                        push: { particles_nb: 4 },
                        remove: { particles_nb: 2 }
                    }
                },
                retina_detect: true
            };
        },
    },
};
</script>

<template>
    <div id="particles-js"></div>
</template>

<style>
canvas {
    display: block;
    vertical-align: bottom;
}

/* ---- particles.js container ---- */

#particles-js {
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: url("");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50% 50%;
    z-index: 1;
}

/* ---- stats.js ---- */

.count-particles {
    background: #000022;
    position: absolute;
    top: 48px;
    left: 0;
    width: 80px;
    color: #13E8E9;
    font-size: .8em;
    text-align: left;
    text-indent: 4px;
    line-height: 14px;
    padding-bottom: 2px;
    font-family: Helvetica, Arial, sans-serif;
    font-weight: bold;
}

.js-count-particles {
    font-size: 1.1em;
}

#stats,
.count-particles {
    -webkit-user-select: none;
}

#stats {
    border-radius: 3px 3px 0 0;
    overflow: hidden;
}

.count-particles {
    border-radius: 0 0 3px 3px;
}
</style>