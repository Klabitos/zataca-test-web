<template>
    <div class="search-bar-container">
        <div class="search-bar-input">
            <input v-model="inputText" class="search-bar" @keyup="filterTextChanged" type="text"
            :placeholder="$t('components.search-bar.placeholder')">
            <i v-if="isRouteHome" class="fa-solid fa-lg fa-eraser icon-input-bar" @click="cleanFilter"></i>
            <i v-else class="fa-solid fa-lg fa-magnifying-glass icon-input-bar" @click="goHome"></i>
        </div>
        <div class="search-bar-options">
            <input v-model="isTitleActive" disabled type="checkbox"> {{$t('components.search-bar.title')}}
            <input v-model="isDescriptionActive" @change=" () => this.$globals.isDescriptionActive = isDescriptionActive" type="checkbox"> {{$t('components.search-bar.description')}}
        </div>
    </div>
</template>
<script>
import Vue from 'vue';
export default {
    name: "SearchBar",
    data() {
        return {
            inputText: '',
            isTitleActive: true,
            isDescriptionActive: false
        }
    },
    created() {
        Vue.prototype.$globals = Vue.observable({
            filter: '',
            isDescriptionActive: false
        });
    },
    methods: {
        filterTextChanged() {
            this.$globals.filter =  this.inputText;
        },
        cleanFilter(){
            this.$globals.filter =  '';
            this.inputText = ''
        },
        goHome(){
            this.$router.push('/')
        }
    },
    computed:{
        isRouteHome(){
            return this.$route.path == '/'
        }
    }

}
</script>
<style lang="scss" scoped>
.search-bar {
    width: 100%;
    padding: 15px;
    border-radius: 20px;
    background-color: var(--primary-body-color);
    color: var(--primary-dark-color-font);
    font-weight: bold;
}

.search-bar-input{
    display: flex;
}
.icon-input-bar{
    position: relative;
    left: -35px;
    top: 25px;
    cursor: pointer;
}

.search-bar-options {
    margin-top: 0.5rem;
}


@media (max-width:550px) {
    .search-bar-options {
        display: none;
    }

    .icon-input-bar{
        left: 10px;
    }
}
</style>