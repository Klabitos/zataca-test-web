<template>
    <div class="top-menu-layout">
        <div class="top-menu-layout--img">
            <img src="../assets/logo.png" alt="logo-vue" width="150" height="50">
        </div>
        <div class="top-menu-search-bar">
            <SearchBar />
        </div>
        <div class="top-menu-dark-mode" @click="changeToDarkMode">
            <h2>
                <i v-if="isLightOff" class="fa-solid fa-sun"></i>
                <i v-else class="fa-solid fa-moon"></i>
            </h2>
        </div>
        <div class="top-menu-language" @click="changeLanguage">
            <h2>{{this.$i18n.locale.toUpperCase()}}</h2>
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
    data(){
        return{
            isLightOff: false
        }
    },
    methods:{
        changeLanguage(){
            if(this.$i18n.locale == 'en'){ 
                this.$i18n.locale = 'es'
            }else{
                this.$i18n.locale = 'en'
            }
        },
        changeToDarkMode(){
            document.body.classList.toggle("dark-mode");
            this.isLightOff = !this.isLightOff
        }
    },
    computed:{

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

.top-menu-language, .top-menu-dark-mode{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    max-height: 40px;
    background-color: var(--orange);
    border-radius: 40px;
    padding: 5px;
    cursor: pointer;
}

.top-menu-dark-mode{
    position: relative;
    left: 15px;
}

.top-menu-profile {
    border-radius: 10px;
    background-color: var(--orange);
    padding: 5px;
    padding-left: 35px;
    padding-right: 35px;
}

@media (max-width:1200px) {
    .top-menu-profile{
        font-size: small;
        max-width: 60px;
        max-height: 60px;
        overflow: hidden;
        padding: 5px;
    }
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

@media (max-width:550px){
    .top-menu-layout--img{
        display: none;
    }
}
</style>