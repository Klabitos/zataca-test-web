<template>
    <div class="footer-layout">
        <div class="footer-layout--item">
            correo
        </div>
        <div class="footer-layout--item">
            nombre
        </div>
        <div class="footer-layout--item">
            github
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
    .footer-layout{
        background-color: pink;
        width: 100%;
        min-height: 50px;

        display: flex;
        justify-content: end;
        align-items: center;
        
    }
    
    .footer-layout--item{
        padding: 5px;
        font-weight: bold;
    }

</style>