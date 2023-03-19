<template>
    <div>
        <router-link to="/">
            <div class="go-back-container">
                <button class="go-back-container--btn">
                    <i class="fa-sharp fa-solid fa-arrow-left"></i>
                    
                </button>
                <h4 class="go-back-message">{{$t('components.home.home')}}</h4>
            </div>
        </router-link>
        <h3 v-if="item=='loading'">{{$t('components.data.being-loaded')}}</h3>
        <DetailCard v-else-if="item!=''" :itemInfo="item"></DetailCard>
        <h3 v-if="item==null">{{$t('components.data.no-detail-data')}}</h3>

    </div>
</template>
<script>
import { getItemDataById } from '@/service/defaultItems';
import DetailCard from '@/components/cards/DetailCard.vue';
export default {
    name:"CardDetail",
    components:{
        DetailCard
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
    .go-back-container{
        position: relative;
        left: -100px;
        max-width: 130px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        transition: 2s;
        cursor: pointer;
    }
    .go-back-container--btn{
        border: 1px solid var(--primary-footer-color);
        background-color: var(--primary-yellow-color) !important;
        border-radius: 25px;
        padding: 15px;
        margin: 20px;
        cursor: pointer;

    }

    .go-back-message{
        transition: 1s;
        opacity: 0;
        cursor: pointer;

    }

    .go-back-container:hover {
        max-width: 150px;
    }

    .go-back-container:hover .go-back-message{
        opacity: 1;
    }
</style>