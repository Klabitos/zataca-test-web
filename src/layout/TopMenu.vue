<template>
    <div class="top-menu-layout">
        <div class="top-menu-layout--img">
            <img src="../assets/logo.png" alt="logo-vue" width="150" height="50">
        </div>
        <div class="top-menu-search-bar">
            <SearchBar />
        </div>
        <div class="top-menu-profile">
            <h2>Pablo Cruz</h2>
        </div>
    </div>
</template>
<script>
import SearchBar from '@/components/inputs/SearchBar.vue';
export default {
    components:{
        SearchBar
    }
}
</script>
<style lang="scss" scoped>
    .top-menu-layout{
        width: 95%;
        margin-left: auto;
        margin-right: auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        min-height: 100px !important;
    }
    .top-menu-search-bar{
        width: 60%;
    }

    .top-menu-profile{
        border-radius: 10px;
        background-color: orange;
        padding: 5px;
        padding-left: 35px;
        padding-right: 35px;
    }
</style>