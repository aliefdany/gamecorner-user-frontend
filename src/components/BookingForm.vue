<template>

    <h1>{{ slug }}</h1>

</template>
<script>
export default {
    computed: {
        slug() {
            return this.$route.params.slug;
        }
    }
}
</script>