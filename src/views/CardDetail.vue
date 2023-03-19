<template>
    <div>
        <router-link to="/">
            <div class="go-back-container">
                <button class="go-back-container--btn">
                    <i class="fa-sharp fa-solid fa-arrow-left"></i>
                    
                </button>
                <h4 class="go-back-message">Home</h4>
            </div>
        </router-link>
        <StandardCard></StandardCard>

    </div>
</template>
<script>
import StandardCard from '@/components/cards/StandardCard.vue';
export default {
    name:"CardDetail",
    components:{
        StandardCard
    }
}
</script>
<style lang="scss" scoped>
    .go-back-container{
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
    }

    .go-back-message{
        transition: 1s;
        opacity: 0;
    }

    .go-back-container:hover {
        max-width: 200px;
    }
    
    .go-back-container:hover .go-back-message{
        opacity: 1;
    }
</style>