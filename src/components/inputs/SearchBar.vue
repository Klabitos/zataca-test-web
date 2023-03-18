<template>
    <div class="search-bar-container">
        <input v-model="inputText" class="search-bar" @keyup="filterTextChanged" type="text"
            placeholder="Search a title or description...">
        <div class="search-bar-options">
            <input v-model="isTitleActive" disabled type="checkbox"> Title
            <input v-model="isDescriptionActive" type="checkbox"> Description
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
            filter: ''
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