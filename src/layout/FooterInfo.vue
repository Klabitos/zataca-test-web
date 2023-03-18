<template>
    <div class="footer-layout">
        <div class="footer-layout--item">
            cruzrodripablo@gmail.com <span class="beutiful-icon">||</span> 
        </div>
        <div class="footer-layout--item">
            Pablo Cruz Rodríguez <span class="beutiful-icon">||</span> 
        </div>
        <div class="footer-layout--item">
            Github (Klabitos) 
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
@import '../style/colors.scss';
    .footer-layout{
        width: 100%;
        min-height: 50px;
        background-color: var(--primary-dark-color-font);
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }
    
    .footer-layout--item{
        color: var(--primary-light-color-font) !important;
        padding: 5px;
        font-weight: bold;
    }

    .beutiful-icon{
        color: var(--primary-yellow-color);
    }

    @media (max-width:800px) {
        .footer-layout--item:last-child{
            display: none;
        }
    }

    @media (max-width:550px) {
        .footer-layout--item:first-child{
            display: none;
        }
    }

</style>