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
@import '../style/colors.scss';
.top-menu {
    position: absolute;
    top: 0px;
    left: 0px;
    min-height: 120px;
    max-height: 120px;
    width: 100%;
    background-color: $primary-yellow-color;
}

.main-content-page {
    position: absolute;
    left: 0px;
    top: 100px;
    width: 100vw;
    height: calc(100vh - 120px);
    background-color: $primary-body-color;
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
    background-color: $primary-footer-color;
}
</style>