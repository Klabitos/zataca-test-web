<template>
    <div>
        <div class="top-menu">
            <top-menu />
        </div>
        <div class="main-content-page">
            <div class="main-content-page__centered">
                <router-view />
            </div>
        </div>
        <div class="footer-info">
            <div>
                <footer-info />
            </div>
        </div>
    </div>
</template>
<script>

import TopMenu from './TopMenu.vue';
import FooterInfo from './FooterInfo.vue';

export default {
    name: 'main-layout',
    components: {
        TopMenu, FooterInfo
    }
}
</script>
<style lang="scss" scoped>
.top-menu {
    position: absolute;
    top: 0px;
    left: 0px;
    min-height: 100px;
    max-height: 100px;
    width: 100%;
    background-color: aquamarine;
    border-bottom: 1px solid gray;
}

.main-content-page {
    position: absolute;
    left: 0px;
    top: 100px;
    width: 100vw;
    height: calc(100vh - 100px);
    background-color: bisque;
}

.main-content-page__centered {
    position: relative;
    top: 5rem;
    margin-left: auto;
    margin-right: auto;
    width: 80%;
}


.footer-info {
    position: fixed;
    bottom: 0px;
    left: 0px;
    width: 100%;
    min-height: 50px;
    max-height: 50px;
    border-top: 1px solid black;
    background-color: greenyellow;
}
</style>