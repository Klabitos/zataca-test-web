<template>
    <div class="standard-gallery">
        <h1>{{$t('components.home.faq')}}</h1>
        <div v-if="items==null">
            <h2>{{$t('components.data.error-fetching')}}</h2>
        </div>
        <div v-else-if="items.length>0" class="standard-gallery-cards">
            <StandardCard v-for="(item) in items" :key="item.id" :itemInfo="item" >
            </StandardCard>
        </div>
        <div v-else>
            <h2>{{$t('components.data.no-data')}}</h2>
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