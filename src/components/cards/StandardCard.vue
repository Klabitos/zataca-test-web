<template>
    <div class="card" :style="{backgroundColor: `${backgroundColorCard}`}">
        <div>
            <h1>{{title}}</h1>
        </div>
        <div class="card-body" >
            <p>{{description}}</p>
        </div>
        <div class="card-link" @mouseover="() => backgroundColorCard='#FFC857'" @mouseleave="() => backgroundColorCard=''">
            <h2 class="card-link-text">{{$t('components.cards.more-information')}}</h2>
        </div>
    </div>
</template>
<script>
export default {
    name: 'StandardCard',
    props:{
        title:{
            type:String,
            default:'Lorem'
        },
        description:{
            type:String,
            default:'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
        }
    },
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
    position: relative;
    top: 0px;
    transition: 2s;
    border: 3px solid var(--primary-dark-color-font);
    border-radius: 15px;
    max-width: 300px;
    min-height: 400px;
    padding: 25px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    overflow: hidden;
}


.card-link {
    position: absolute;
    bottom: -3px;
    left: 0px;
    width: 100%;
    min-height: 50px;
    border-radius: 0px 0px 15px 15px;
    background-color: var(--primary-dark-color-font);
    cursor: pointer;
}
.card-link-text {
    min-width: 100%;
    text-align: center;
    color: var(--primary-light-color-font);
    padding-top: 4px;
}

.card-link:hover .card-link-text {
    transition: 0.2s;
    color: $primary-yellow-color;
}



</style>