<template>
    <div class="top-menu-layout">
        <div class="top-menu-layout--img">
            <img src="../assets/logo.png" alt="logo-vue" width="150" height="50">
        </div>
        <div class="top-menu-search-bar">
            <SearchBar />
        </div>
        <div class="top-menu-language">
            <h2 @click="changeLanguage">{{this.$i18n.locale.toUpperCase()}}</h2>
        </div>
        <div class="top-menu-profile">
            <h2>Pablo Cruz</h2>
        </div>
    </div>
</template>
<script>
import SearchBar from '@/components/inputs/SearchBar.vue';
export default {
    components: {
        SearchBar
    },
    methods:{
        changeLanguage(){
            if(this.$i18n.locale == 'en'){ 
                this.$i18n.locale = 'es'
            }else{
                this.$i18n.locale = 'en'
            }
        }
    }
}
</script>
<style lang="scss" scoped>
.top-menu-layout {
    width: 95%;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 100px !important;
}

.top-menu-search-bar {
    width: 60%;
}

.top-menu-language{
    text-align: center;
    width: 70px;
    background-color: orange;
    border-radius: 50px;
    padding: 5px;
    cursor: pointer;
}

.top-menu-profile {
    border-radius: 10px;
    background-color: orange;
    padding: 5px;
    padding-left: 35px;
    padding-right: 35px;
}

@media (max-width:800px) {
    .top-menu-layout{
        justify-content: space-around;
    }
    .top-menu-search-bar {
        width: 30%;
    }

    .top-menu-profile {
        display: none;
    }
}
</style>