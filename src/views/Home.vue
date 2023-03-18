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
            const arrayWithItems = this.allItemsData.map(item => {
                item.body = item.body.replace('\n', ' ') //In 'body' we can find both \n and spaces
                return item
            })
            if(this.$globals.isDescriptionActive){
                return arrayWithItems.filter(item => item.body.includes(this.$globals.filter) || item.title.includes(this.$globals.filter))
            }
            return arrayWithItems.filter(item => item.title.includes(this.$globals.filter))
        }
    }

}
</script>
<style lang="scss" scoped></style>