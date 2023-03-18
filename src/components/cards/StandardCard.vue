<template>
    <div class="card" :style="{backgroundColor: `${backgroundColorCard}`}">
        <div>
            <h1>Title</h1>
        </div>
        <div class="card-body" >
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, architecto. Placeat esse error atque
                beatae omnis ipsum modi, delectus provident suscipit minus ea voluptatem? Aperiam, aliquam laboriosam. Ut,
                officiis optio.</p>
        </div>
        <div class="card-link" @mouseover="() => backgroundColorCard='#FFC857'" @mouseleave="() => backgroundColorCard=''">
            <h2 class="card-link-text">More information</h2>
        </div>
    </div>
</template>
<script>
export default {
    name: 'StandardCard',
    data(){
        return{
            backgroundColorCard:''
        }
    },

}
</script>
<style lang="scss" scoped>
@import '../../style/colors.scss';

.card {
    transition: 2s;
    border: 3px solid $primary-dark-color-font;
    border-radius: 15px;
    max-width: 300px;
    padding: 25px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}

.card-link {
    position: relative;
    bottom: -30px;
    left: -9%;
    width: 118%;
    min-height: 50px;
    border-radius: 0px 0px 15px 15px;
    background-color: $primary-dark-color-font;
    cursor: pointer;
}
.card-link-text {
    min-width: 100%;
    text-align: center;
    color: white;
    padding-top: 10px;
}

.card-link:hover .card-link-text {
    transition: 0.2s;
    color: $primary-yellow-color;
}



</style>