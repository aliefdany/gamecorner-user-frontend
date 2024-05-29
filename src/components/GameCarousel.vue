<template>
    <div>
        <v-carousel :cycle="autoplay" height="400">
            <v-carousel-item v-for="n in 4" :key="n">
                <v-img src="https://placehold.co/800x200"></v-img>
            </v-carousel-item>
            <v-btn icon @click="prev" slot="prev">
                <v-icon>mdi-chevron-left</v-icon>
            </v-btn>
            <v-btn icon @click="next" slot="next">
                <v-icon>mdi-chevron-right</v-icon>
            </v-btn>
        </v-carousel>
    </div>
</template>

<script>
export default {
    data() {
        return {
            autoplay: true,
            showNavigation: false,
        };
    },
    methods: {
        toggleNavigation() {
            this.showNavigation = !this.showNavigation;
        },
        prev() {
            this.$refs.carousel.prev();
        },
        next() {
            this.$refs.carousel.next();
        },
    },
};
</script>