<template>
    <div>
        <BackArrowBtn></BackArrowBtn>
        <h3 v-if="item=='loading'">{{$t('components.data.being-loaded')}}</h3>
        <DetailCard v-else-if="item!=''" :itemInfo="item"></DetailCard>
        <h3 v-if="item==null">{{$t('components.data.no-detail-data')}}</h3>

    </div>
</template>
<script>
import { getItemDataById } from '@/service/defaultItems';
import BackArrowBtn from '@/components/navigation/BackArrowBtn.vue';
import DetailCard from '@/components/cards/DetailCard.vue';
export default {
    name:"CardDetail",
    components:{
        DetailCard, BackArrowBtn
    },
    data(){
        return{
            item:'loading'
        }
    },
    created(){
        getItemDataById(this.$route.params.id).then(result =>{
            this.item = result.data
        }).catch(() =>{
            this.item = null
        })
    }
}
</script>
<style lang="scss" scoped>

</style>