<template>
    <div class="game-slider">
        <v-slide-group show-arrows>
            <v-slide-item v-for="game in games" :key="game.id">
                <v-card class="game-card">
                    <v-card-text>
                        <v-img :src="game.imageUrl" aspect-ratio="16:9"></v-img>
                        <v-card-title>{{ game.title }}</v-card-title>
                        <v-subheader>{{ game.genre }}</v-subheader>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn text rounded small color="primary">Play Now</v-btn>
                        <v-icon small>mdi-star</v-icon>
                        <v-text>{{ game.rating }}</v-text>
                    </v-card-actions>
                </v-card>
            </v-slide-item>
        </v-slide-group>
    </div>
</template>

<script>
export default {
    data() {
        return {
            games: [{
                id: 1,
                imageUrl: "https://placehold.co/300x400",
                title: "spider-man",
                genre: "action",
                rating: 4.5
            },
            {
                id: 2,
                imageUrl: "https://placehold.co/300x400",
                title: "fifa",
                genre: "sport",
                rating: 4.2
            }
          /* ... */,
            ],
        };
    },
    methods: {
        prev() {
            this.$refs.carousel.prev();
        },
        next() {
            this.$refs.carousel.next();
        },
    },
};
</script>

<style scoped>
.game-slider {
    display: flex;
    overflow-x: scroll;
    scroll-snap-type: x mandatory;
    white-space: nowrap;
}

.game-card {
    /* Add custom styles for card appearance here */
    scroll-snap-align: start;
    width: 340px;
    /* Adjust card width as needed */
    margin-right: 20px;
    /* Adjust spacing between cards */
}
</style>