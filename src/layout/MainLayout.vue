<template>
    <div class="main-layout">
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
    },
}
</script>
<style lang="scss" scoped>
.top-menu {
    position: fixed;
    top: 0px;
    left: 0px;
    z-index: 2;
    min-height: 100px;
    max-height: 100px;
    width: 100%;
    background-color: var(--primary-yellow-color) !important;
    border-bottom: 3px solid var(--primary-footer-color);
}

.main-content-page {
    position: absolute;
    left: 0px;
    top: 60px;
    width: 100vw;
    height: auto;
    background-color: var(--primary-body-color) !important;
}

.main-content-page__centered {
    position: relative;
    top: 5rem;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 160px;
    width: 80%;
    background-color: var(--primary-body-color) !important;

}


.footer-info {
    position: fixed;
    bottom: 0px;
    left: 0px;
    width: 100%;
    min-height: 50px;
    max-height: 50px;
    border-top: 2px solid var(--primary-yellow-color);
    background-color: var(--primary-footer-color) !important;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}
</style>