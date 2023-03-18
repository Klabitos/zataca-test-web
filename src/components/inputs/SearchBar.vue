<template>
    <div class="search-bar-container">
        <input v-model="inputText" class="search-bar" type="text" placeholder="Search a title or description...">
        <div class="search-bar-options">
            <input v-model="isTitleActive" disabled type="checkbox"> Title
            <input v-model="isDescriptionActive" type="checkbox"> Description
        </div>
    </div>
</template>
<script>
export default {
    name: "SearchBar",
    data() {
        return {
            inputText: '',
            isTitleActive: true,
            isDescriptionActive: false
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

.search-bar-options{
    margin-top: 0.5rem;
}
</style>