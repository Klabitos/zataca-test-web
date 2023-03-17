<template>
    <div class="top-menu-layout">
        <div class="top-menu-layout--img">
            <img src="../assets/logo.png" alt="logo-vue" width="150" height="50">
        </div>
        <div>
            buscador
        </div>
        <div>
            nombre
        </div>
    </div>
</template>
<script>
export default {
    
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
    .top-menu-layout--img{

    }
</style>