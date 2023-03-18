<template>
    <div>
        <StardardCardGallery v-if="allItemsData.length > 0" :items="getFilteredItems" />
    </div>
</template>
<script>
import { getItemsData } from '@/service/defaultItems';
import StardardCardGallery from '@/components/cardsGallery/StandardCardGallery.vue';

export default {
    name: 'Home-View',
    components: {
        StardardCardGallery
    },
    data() {
        return {
            allItemsData: [],
            itemsFiltered: [],
        }
    },
    created() {
        getItemsData().then(result => {
            this.allItemsData = result.data
        })
    },
    computed:{
        getFilteredItems(){
            return this.allItemsData.filter(item => item.title.includes(this.$globals.filter))
        }
    }

}
</script>
<style lang="scss" scoped></style>