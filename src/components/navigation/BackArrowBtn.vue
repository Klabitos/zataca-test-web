<template>
    <router-link to="/">
        <div class="go-back-container">
            <button class="go-back-container--btn">
                <i class="fa-sharp fa-solid fa-arrow-left"></i>

            </button>
            <h4 class="go-back-message">{{ $t('components.home.home') }}</h4>
        </div>
    </router-link>
</template>
<script>
export default {
    name: "BackArrowBtn"
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
    
    @media (max-width:850px) {
        .go-back-container{
            left: 0px;
        }
    }
    
</style>