<template>
   <div class="header">
      <span class="icon"></span>
      <h1 class="text">SoftDrink Music</h1>
   </div>
</template>

<script>
export default{
    name:'m-header',
    setup(){
        return {

        }
    }
}
</script>

<style scoped lang="scss">
.header{
    height: 44px;
    text-align: center;
    color: $color-theme;
    font-size: 0;
    .icon{
        // 行内元素转化为行内块元素
        display: inline-block;
        vertical-align: top;
        margin-top: 6px;
        width: 30px;
        height: 32px;
        margin-right: 9px;
        @include bg-image('logo');
        background-size: 30px 32px;
    }
    .text{
        display: inline-block;
        vertical-align: top;
        line-height: 44px;
        font-size: $font-size-large;
    }
}

</style>

 