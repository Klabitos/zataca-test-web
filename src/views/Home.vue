<template>
    <div>
        <StardardCardGallery :items="getFilteredItems" />
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
        }).catch(() =>{
            this.allItemsData = null
        })
    },
    computed:{
        getFilteredItems(){
            if(this.allItemsData == null) return this.allItemsData
            const arrayWithItems = this.allItemsData.map(item => {
                item.body = item.body.replace('\n', ' ') //In 'body' we can find both \n and spaces
                return item
            })
            if(this.$globals.isDescriptionActive){
                return arrayWithItems.filter(item => item.body.toUpperCase().includes(this.$globals.filter.toUpperCase()) || item.title.toUpperCase().includes(this.$globals.filter.toUpperCase()))
            }
            return arrayWithItems.filter(item => item.title.toUpperCase().includes(this.$globals.filter.toUpperCase()))
        }
    }

}
</script>
<style lang="scss" scoped></style>