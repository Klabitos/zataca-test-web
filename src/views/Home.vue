<template>
    <div>
        <StardardCardGallery :items="allItemsData" />
    </div>
</template>
<script>
import { getItemsData } from '@/service/defaultItems';
import StardardCardGallery from '@/components/cardsGallery/StandardCardGallery.vue';
export default {
    name: 'Home-View',
    components:{
        StardardCardGallery
    },
    data(){
        return{
            allItemsData:[]
        }
    },
    created(){
        getItemsData().then(result =>{
            this.allItemsData = result.data
        })
    }
}
</script>
<style lang="scss" scoped>
    
</style>