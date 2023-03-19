<template>
    <div class="card" :style="{ backgroundColor: `${backgroundColorCard}` }">
        <div class="card-header">
            <h1>{{ itemInfo.title }}</h1>
        </div>
        <div class="card-body">
            <p>{{ itemInfo.body }}</p>
        </div>
    </div>
</template>
<script>
export default {
    name: 'StandardCard',
    props: {
        itemInfo: {
            type: Object,
            default() {
                return {
                    id: '0',
                    title: 'Lorem',
                    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
                }
            }
        }
    },
    data() {
        return {
            backgroundColorCard: ''
        }
    },

}
</script>
<style lang="scss" scoped>
@import '../../style/colors.scss';

.card {
    position: relative;
    top: 0px;
    border: 3px solid var(--primary-dark-color-font);
    border-radius: 15px;
    padding: 25px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    overflow: hidden;
}

.card-header{
    min-height: 10vh;
}



</style>