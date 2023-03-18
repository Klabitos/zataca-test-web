<template>
    <div class="search-bar-container">
        <input v-model="inputText" class="search-bar" @keyup="filterTextChanged" type="text"
            :placeholder="$t('components.search-bar.placeholder')">
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

.search-bar-options {
    margin-top: 0.5rem;
}


@media (max-width:550px) {
    .search-bar-options {
        display: none;
    }
}
</style>