<template>
    <div class="standard-gallery">
        <h1>Frequently Asked Questions:</h1>
        <div class="standard-gallery-cards">
            <StandardCard v-for="(item) in items" :key="item.id" :title="item.title" :description="item.description">
            </StandardCard>
        </div>
    </div>
</template>
<script>
import StandardCard from '../cards/StandardCard.vue';
export default {
    name: 'StardardCardGallery',
    components: {
        StandardCard
    },
    props: {
        items: {
            type: Array,
            default() {
                return []
            }
        }
    }
}
</script>
<style lang="scss" scoped>
.standard-gallery-cards {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 20px;
    grid-auto-rows: minmax(100px, auto);
}

@media (max-width:800px) {
    .standard-gallery-cards {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width:550px) {
    .standard-gallery-cards {
        grid-template-columns: repeat(1, 1fr);
    }
}
</style>